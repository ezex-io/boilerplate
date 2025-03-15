# Project Boilerplate

A **Standardized Boilerplate** for starting new projects quickly and consistently.

## Features

-   **Templates**: Ready-to-use templates for [Go](./go), [TypeScript](./ts), and [Rust](./rust/).
-   **CI/CD**: GitHub Actions workflows for testing, linting, and deploying.
-   **Templates**: Standardized issue and pull request templates.
-   **Docs**: `LICENSE` and `CONTRIBUTING.md` for compliance and collaboration.

## Usage

-   **Templates**: Each template includes some necessary files and a README.md.
-   **Workflows**: Pre-configured GitHub Actions in [.github/workflows/](.github/workflows/).
-   **Issue Template**: Use[.github/ISSUE_TEMPLATE.md](.github/ISSUE_TEMPLATE.md)
-   **Pull Request Template**: Use [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md).
-   **License**: Include the LICENSE file in your project.
-   **Contributing**: Add the CONTRIBUTING.md file to guide contributors.

## Some Notes

### Rust

-   For libraries, add `Cargo.lock` into `.gitignore`.

### TypeScript

-   We strictly use [Yarn](https://yarnpkg.com/getting-started/install) as the package manager.
-   We use [Vitest](https://vitest.dev/) as the testing framework.
-   We use [ESLint](https://eslint.org/) for linting.
