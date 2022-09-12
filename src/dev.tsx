import React from 'react';
import { createRoot } from 'react-dom/client';
import ImproveThisPage from './components/ImproveThisPage';

const container = document.getElementById('root');
const root = createRoot(container!); // eslint-disable-line @typescript-eslint/no-non-null-assertion
root.render((<div>
  <h1>Improve This Page</h1>
  <h2>No Args</h2>
  <ImproveThisPage />
  <h2>Just Source path</h2>
  <ImproveThisPage sourcePath="/foo" />
  <h2>Just Github Repo</h2>
  <ImproveThisPage githubRepo="/foo" />
  <h2>Both</h2>
  <ImproveThisPage sourcePath="/githubRepo" githubRepo="/githubRepo" />
  <br />
</div>));
