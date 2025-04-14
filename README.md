# Project Boilerplate

A **Standardized Boilerplate** for starting new projects quickly and consistently.

## Features

- **Templates**: Ready-to-use templates for [Go](./go), [TypeScript](./ts), and [Rust](./rust/).
- **CI/CD**: GitHub Actions workflows for testing, linting, and deploying.
- **Templates**: Standardized issue and pull request templates.
- **Docs**: `LICENSE` and `CONTRIBUTING.md` for compliance and collaboration.

## Usage

- **Templates**: Each template includes some necessary files and a README.md.
- **Workflows**: Pre-configured GitHub Actions in [.github/workflows/](.github/workflows/).
- **Issue Template**: Use[.github/ISSUE_TEMPLATE.md](.github/ISSUE_TEMPLATE.md)
- **Pull Request Template**: Use [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md).
- **License**: Include the LICENSE file in your project.
- **Contributing**: Add the CONTRIBUTING.md file to guide contributors.

## Some Notes

### Go

In [go.mod](./go/go.mod?#L3) update the Go version to the latest.

### Rust

For libraries, add `Cargo.lock` into `.gitignore`.
For application, keep `Cargo.lock` in git source control.

### TypeScript

Creating a standardized boilerplate for TypeScript is quite challenging.
Many frameworks and libraries have their own conventions and tooling.

For example, the simple "Hello, World!" application in TypeScript requires five dependencies,
whereas in Go and Rust, it has zero dependencies.
Dependencies evolve over time, and perhaps by the time you're reading this, some may already be outdated.

With this in mind, we decided to create a simple TypeScript template and
outline some key principles to follow when starting a new TypeScript-based project.

We recommend:

- Following the [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html).
- Using [Yarn](https://yarnpkg.com/getting-started/install) as the package manager.
- Keeping dependencies as low as possible.
- Avoid using packages like Husky or anything that alters the developer environment.

### About Tests

Keep test files as close as possible to the source files they relate to.
Avoid placing them in a separate `tests` folder unless they are specifically for system or integration tests.
