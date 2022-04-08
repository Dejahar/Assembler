`#programming-fundamentals` `#program-structure` `#assembler-institute` `#master-in-software-development`

# Assembler Institute: Programming Fundamentals - Program Structure Exercises <!-- omit in toc -->

With these exercises pill you'll learn how programs are structured.

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Contents and Branches Naming Strategy](#contents-and-branches-naming-strategy)
- [Tests Suites](#test-suites)

## Getting Started

### The repo

First, you will need to clone the repo:

```bash
$ git clone https://github.com/assembler-institute/programming-fundamentals-program-structure-pill.git
```

## Dependencies

Before we can get started you will need to make sure that all the necessary dependencies are installed in your system.

### Node.js

You can install it by following the instructions [in the official docs](https://nodejs.org/en/) (we recommend that you install the version that is named _Current_).

To verify that you have installed it correctly, you can run the following command from the terminal that should output the version installed:

```bash
$ node --version
```

### Project Dependencies

Then, you will have to install all the project dependencies with npm in the root folder:

```bash
$ npm install
```

## Contents and Branches Naming Strategy

The repository is made up of two branches: main and solution.

The main branch contains the exercises with blanks you have to code and the solution branch contains the entire code needed to pass tests. 

- Exercises are inside src folder with this naming strategy `{NN}-exercise`

### Change between Branches

In order to change between main and solution branches you can use the checkout command:

```bash
$ git checkout solution
```

You can use diff command to show differences between branches so you can see the solution of the different exercises:

```bash
$ git diff main..solution .\src\01-exercise.js
```


## Tests Suites

The test suites for these exercises can be executed with the following script: `npm run test`.

Open the files indicated bellow and read the instructions and requirements of the tests to solve them.

- If you get stuck you can find the answers in the `solution` branch
- Try not to peek at the solutions

## Author <!-- omit in toc -->

[Dani Lucaci](https://github.com/danilucaci)

## License <!-- omit in toc -->

[MIT](https://choosealicense.com/licenses/mit/)