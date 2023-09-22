import * as core from '@actions/core'
// import { github } from '@actions/github';

try {
  const prNumber = core.getInput('pr-number');
  const artifactNameInput = core.getInput('artifact-name');
  const defaultName = 'app-main';

  console.log('prNumber', prNumber);
  console.log('artifactName', artifactNameInput);
  // If we have a PR number use it or the default value
  let artifactName = prNumber ? `app-pr-${prNumber}` : defaultName;
  // If we have an incoming name use it or the previous value
  artifactName = artifactNameInput ? artifactNameInput : artifactName;

  core.setOutput("artifact-name", artifactName);
} catch (error) {
  core.setFailed(error.message);
}