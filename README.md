# Playwright TypeScript Demo


## Overview

This project is a demo for using [Playwright](https://playwright.dev/) with [TypeScript](https://www.typescriptlang.org/). Playwright is a powerful library for end-to-end testing, and TypeScript provides static typing for better code quality and development experience.

## Features

- End-to-end testing with Playwright
- TypeScript support for type checking and enhanced IDE experience
- Sample test cases demonstrating basic Playwright functionalities

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Vinay08sharma/playwright-ts-demo.git
    ```

2. Navigate to the project directory:

    ```bash
    cd playwright-ts-demo
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

## Usage

### Running Tests

To run all tests:

```bash
npx playwright test
```

To run a specific test file

```bash
npx playwright test e2e/tests/fileName.spec.ts
```


## Project Structure
- e2e/tests/: Directory containing all test files.
- playwright.config.ts: Playwright configuration file.
- tsconfig.json: TypeScript configuration file.


 
