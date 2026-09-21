# CS329 Notes

This repository contains my notes and work for CS329.

## What I learned

### GitHub
1. Branching
- git checkout -b [new branch name]
- git merge [new branch name]
2. Forks
- create a copy of a GitHub Repository. (e.g. fork a repo)
- clones to GitHub > Fork down to work on my development environment.
- maintains a link to the original repository. > pull down updates & merge them with my fork.
- allows create a pull request.
3. Pull requests
Make modifications to the repository fork and push the changes as a pull request. > Owner review the changes.
4. Commit message: use the imperative mood (Fix instead of Fixed or I fixed)

### Using .md file
See the documentation: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

### D2 Automation
How to choose what to automate

- data: how often and how long you are spending on manual tasks
- impact score: to each task impact = (monthly frequency * duration) * value
- complexity score: priority = impact/complexity

### D3 CI
Goal of Continuous Integration (CI): To increase the speed and efficiency with which code moves from a developer's workstation to a shared codebase. Automated flow is CI pipeline.

### Github Actions
Workflow:
- composed of one or more jobs
- comprised of one or more steps (steps: building the code, running the tests, or copying files)
- runner: loads and executes the workflow

Jobs: A job is a set of steps that execute on the same runner (virtual machine). By default, multiple jobs in a workflow run in parallel, though you can make them dependent on one another.

Steps: These are individual tasks within a job. They run sequentially (one after the other). A step can run a command (like npm install) or an "Action" (a reusable script).

### Testing Categories
- Unit testing: Tests one small piece of code, such as a function or class, in isolation. External dependencies like databases are usually mocked.
- Component testing: Tests multiple related units working together, such as the complete login, registration, logout, and account-deletion flow.
- Integration testing: Tests how different modules, services, and databases interact using more real dependencies and fewer mocks.
- Regression testing: Re-runs existing tests after code changes to make sure previously working features have not broken.
- End-to-end testing: Tests the entire application from the user’s perspective, including the frontend, backend, database, and third-party services.
- Synthetic testing: Simulates realistic user actions, such as logging in, purchasing, or updating a profile.
- Load testing: Creates many simultaneous users or requests to determine whether the system remains stable under heavy traffic.
- Penetration testing: Attempts to attack or misuse the application to find security vulnerabilities.
- Smoke testing: Performs a quick, high-level check after deployment to confirm that the main application functions work.
- User acceptance testing: Allows real users or stakeholders to determine whether the software meets their needs.
- Compatibility testing: Checks whether the application works across different browsers, operating systems, devices, and versions.
- Accessibility testing: Ensures people with disabilities can use the application through screen readers, keyboard navigation, high contrast, and other support. WCAG is the main standard.
- Localization testing: Verifies translations, date and time formats, cultural details, and layouts such as right-to-left languages.
- Alpha testing: Early testing performed while the application is still incomplete.
- Beta testing: Testing by selected external users before the official release.
- Black-box testing: Tests software without seeing its internal code.
- White-box testing: Tests software with access to its source code and internal design.

