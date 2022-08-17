import {TestErrorWithPage} from '~/sections/TestErrorPage.server';
import {TestMenu} from '~/sections/TestMenu.server';

export default function Subnav2() {
  return (
    <div className="border border-primary p-6">
      <TestMenu />
      <div className="border border-primary p-6">
        <p>Default error message when a section fails</p>
        <TestErrorWithPage />
      </div>
    </div>
  );
}
