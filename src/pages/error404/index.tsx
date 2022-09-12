import { Helmet } from 'react-helmet-async';

export const Error404Page = () => (
  <>
    <Helmet title="Not found" />
    <div className="page-title">Page not found</div>
  </>
);
