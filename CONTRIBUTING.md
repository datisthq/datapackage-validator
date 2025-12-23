# Contributing

Thank you for your interest in contributing to datapackage-validator! This document provides guidelines and instructions for contributing to this project.

## Project Overview

Project is a single-page application (SPA) built with React and TypeScript.

## Development Environment

### Prerequisites

- **Node.js**: v24.0.0 or higher
- **PNPM**: v10.0.0 or higher

### Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/datapackage-validator.git
   cd datapackage-validator
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```
## Development Workflow

### Dependencies

Update all dependencies to their latest versions:

```bash
pnpm run bump
```

### Quality and Testing

We use Biome for linting and formatting, and TypeScript for type checking:

- **Lint**: Check for code issues
  ```bash
  pnpm lint
  ```

- **Format**: Auto-fix formatting issues
  ```bash
  pnpm format
  ```

We use TypeScript for type checking:

- **Type Check**: Verify TypeScript types
  ```bash
  pnpm type
  ```

Specs are collocated with the source code and use Vitest:

- **Run Tests Only**: (without linting/type checking)
  ```bash
  pnpm run spec
  ```

- **Run a Specific Test**:
  ```bash
  pnpm exec vitest run folder/file.ts
  ```

- **Run All Tests**: (includes linting and type checking)
  ```bash
  pnpm test
  ```

## Translations

Translations are managed using [Lingui](https://lingui.js.org/).

> [!NOTE]
> You need to provide OpenAI API key in `.env` file

- **Generate Translations**: (extracts and translate)
  ```bash
  pnpm translate
  ```

## Code Style Guidelines

- Use TypeScript with strict type checking
- Follow ES modules pattern (`import`/`export`)
- Tests should be placed alongside the source code
- Use semicolons only as needed (not required everywhere)
- Use arrow function parentheses as needed (omitted for single parameters)

## Submitting Changes

1. Create a feature branch (`git checkout -b feature/your-feature`)
2. Make your changes with appropriate tests
3. Ensure the code passes all checks: `pnpm test`
4. Commit your changes with a descriptive message
5. Submit a pull request

## License

By contributing to dpkit, you agree that your contributions will be licensed under the project's license.

Thank you for your contribution!
