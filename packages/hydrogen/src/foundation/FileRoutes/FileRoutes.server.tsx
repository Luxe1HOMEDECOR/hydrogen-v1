import React, {useMemo} from 'react';
import {matchPath} from '../../utilities/matchPath';
import {log} from '../../utilities/log';
import {extractPathFromRoutesKey} from '../../utilities/apiRoutes';
import {useServerRequest} from '../ServerRequestProvider';

import type {ImportGlobEagerOutput} from '../../types';
import {RouteParamsProvider} from '../useRouteParams/RouteParamsProvider.client';

interface FileRoutesProps {
  /** The routes defined by Vite's [import.meta.globEager](https://vitejs.dev/guide/features.html#glob-import) method. */
  routes?: ImportGlobEagerOutput;
  /** A path that's prepended to all file routes. You can modify `basePath` if you want to prefix all file routes. For example, you can prefix all file routes with a locale. */
  basePath?: string;
  /** The portion of the file route path that shouldn't be a part of the URL. You need to modify this if you want to import routes from a location other than the default `src/routes`. */
  dirPrefix?: string | RegExp;
}

/**
 * The `FileRoutes` component builds a set of default Hydrogen routes based on the output provided by Vite's
 * [import.meta.globEager](https://vitejs.dev/guide/features.html#glob-import) method. You can have multiple
 * instances of this component to source file routes from multiple locations.
 */
export function FileRoutes({routes, basePath, dirPrefix}: FileRoutesProps) {
  const request = useServerRequest();
  const {routeRendered, serverProps} = request.ctx.router;

  if (routeRendered) return null;

  if (!routes) {
    const fileRoutes = request.ctx.hydrogenConfig!.routes;
    routes = fileRoutes.files;
    dirPrefix ??= fileRoutes.dirPrefix;
    basePath ??= fileRoutes.basePath;
  }

  basePath ??= '/';

  const createdPageRoutes = useMemo(
    () => createPageRoutes(routes!, basePath, dirPrefix),
    [routes, basePath, dirPrefix]
  );
  const pageRoutes = createdPageRoutes.pageRoutes;
  const appOutlets = request.ctx.hydrogenConfig!.outlets;

  let foundRoute, foundRouteDetails;

  for (let i = 0; i < pageRoutes.length; i++) {
    foundRouteDetails = matchPath(serverProps.pathname, pageRoutes[i]);

    if (foundRouteDetails) {
      foundRoute = pageRoutes[i];
      break;
    }
  }

  console.log('Found route', foundRoute, foundRouteDetails);

  if (foundRoute) {
    request.ctx.router.routeRendered = true;
    request.ctx.router.routeParams = foundRouteDetails.params;

    let withProps: any;
    if (serverProps.outlet) {
      console.log('Found outlet:', serverProps.outlet);
      const FoundOutlet = (appOutlets[serverProps.outlet] ||
        createdPageRoutes.outlets[
          serverProps.outlet
        ]) as keyof JSX.IntrinsicElements;
      console.log(FoundOutlet);
      withProps = (
        <FoundOutlet params={foundRouteDetails.params} {...serverProps} />
      );
    } else {
      withProps = (
        <foundRoute.component
          params={foundRouteDetails.params}
          {...serverProps}
        />
      );
    }

    return (
      <RouteParamsProvider
        routeParams={foundRouteDetails.params}
        basePath={basePath}
      >
        {withProps}
      </RouteParamsProvider>
    );
  }

  return null;
}

interface HydrogenRoute {
  component: any;
  path: string;
  exact: boolean;
}

interface CreatedPageRoutes {
  outlets: Record<string, any>;
  pageRoutes: HydrogenRoute[];
}

export function createPageRoutes(
  pages: ImportGlobEagerOutput,
  topLevelPath = '*',
  dirPrefix: string | RegExp = ''
): CreatedPageRoutes {
  const topLevelPrefix = topLevelPath.replace('*', '').replace(/\/$/, '');

  const keys = Object.keys(pages);

  const outlets: Record<string, any> = {};
  const routes = keys
    .map((key) => {
      const path = extractPathFromRoutesKey(key, dirPrefix);

      /**
       * Catch-all routes [...handle].jsx don't need an exact match
       * https://reactrouter.com/core/api/Route/exact-bool
       */
      const exact = !/\[(?:[.]{3})(\w+?)\]/.test(key);

      if (!pages[key].default && !pages[key].api) {
        log?.warn(
          `${key} doesn't export a default React component or an API function`
        );
      }

      Object.keys(pages[key]).forEach((exportName: any) => {
        if (exportName !== 'default' && exportName !== 'api') {
          outlets[exportName] = pages[key][exportName];
        }
      });

      return {
        path: topLevelPrefix + path,
        component: pages[key].default,
        exact,
      };
    })
    .filter((route) => route.component);

  /**
   * Place static paths BEFORE dynamic paths to grant priority.
   */
  return {
    outlets,
    pageRoutes: [
      ...routes.filter((route) => !route.path.includes(':')),
      ...routes.filter((route) => route.path.includes(':')),
    ],
  };
}
