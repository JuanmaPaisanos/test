import { danger, danger, warn, fail } from 'danger';

const pr = danger.github.pr;

if (pr.requested_reviewers.length > 0) {
    message('Se han asignado revisores al pull request.');
  } else {
    warn('No se han asignado revisores al pull request.');
  }

if (pr.body && pr.body.length < 10 ) {
fail("this pull request needs a descriptions.")
}

// const hasChangelog = danger.git.modified_files.includes("changelog.md")
// const isTrivial = (danger.github.pr.body + danger.github.pr.title).includes("#trivial")

// if (!hasChangelog && !isTrivial) {
//   warn("Please add a changelog entry for your changes.")
// }

// const hasChanges = danger.git.modified_files.length > 0;
// if (!hasChanges) {
//   warn('No se han realizado cambios en este pull request.');
// } 

// const packageChanged = danger.git.modified_files.includes('package.json');
// const lockfileChanged = danger.git.modified_files.includes('yarn.lock');
// if (packageChanged && !lockfileChanged) {
//   const message = 'Changes were made to package.json, but not to yarn.lock';
//   const idea = 'Perhaps you need to run `yarn install`?';
//   warn(`${message} - <i>${idea}</i>`);
// }

// var bigPRThreshold = 600;
// if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
//   warn(':exclamation: Big PR (' + ++errorCount + ')');
//   markdown('> (' + errorCount + ') : Pull Request size seems relatively large. If Pull Request contains multiple changes, split each into separate PR will helps faster, easier review.');
// }

