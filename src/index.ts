import ImproveThisPage from './components/ImproveThisPage';
import ReportAProblem from './components/ReportAProblem';
import SiteVersion from './components/SiteVersion';

declare global {
  type JSXNode = JSX.Element | null;

  namespace JSX {
    interface IntrinsicElements {
      ['ion-icon']: any
    }
  }
}

export {
  SiteVersion,
  ReportAProblem,
  ImproveThisPage
};
