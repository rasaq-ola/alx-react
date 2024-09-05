# ALX React - Webpack Tasks

This repository contains a series of tasks designed to help you get familiar with setting up and using Webpack for front-end development. The tasks involve configuring Webpack to handle JavaScript, CSS, and image files, as well as setting up a development server and optimizing build outputs.

## Table of Contents

- [General Requirements](#general-requirements)
- [Task 0: Basic Setup](#task-0-basic-setup)
- [Task 1: Using Webpack with a Config File](#task-1-using-webpack-with-a-config-file)
- [Task 2: Adding CSS & Images](#task-2-adding-css--images)
- [Task 3: Dev Servers, Modules, and Tree Shaking](#task-3-dev-servers-modules-and-tree-shaking)
- [Installation](#installation)
- [Usage](#usage)

## General Requirements

- All code is executed on Ubuntu 18.04 LTS using Node.js 12.x.x.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files should end with a new line.
- A `README.md` file is mandatory for each task.

## Task 0: Basic Setup

### Objective:
Set up a basic Webpack configuration that imports jQuery and adds three paragraphs to the page.

### Steps:
1. Create a folder named `task_0`.
2. Install Webpack and Webpack CLI as development dependencies.
3. Install jQuery as a regular dependency.
4. Create a `src/index.js` file that imports jQuery and adds three paragraphs to the page body.
5. Create a `dist/index.html` file that imports the generated JavaScript bundle.
6. Build the project using the `npm run build` command.

### Output:
- The final output should generate a `dist` folder containing the bundled JavaScript and `index.html` file.

## Task 1: Using Webpack with a Config File

### Objective:
Learn how to use a Webpack configuration file to build your project, including bundling JavaScript files.

### Steps:
1. Create a folder named `task_1`.
2. Install Webpack, jQuery, and Lodash as dependencies.
3. Create a `webpack.config.js` file to configure Webpack.
4. Write JavaScript code that interacts with the DOM using jQuery and handles a button click event using Lodash's `debounce` function.
5. Build the project using the `npm run build` command.

### Output:
- The final output should generate a `public` folder containing the bundled JavaScript (`bundle.js`) and an `index.html` file.

## Task 2: Adding CSS & Images

### Objective:
Extend the Webpack configuration to handle CSS files and images.

### Steps:
1. Reuse the code from `task_1` in a new folder named `task_2`.
2. Modify the Webpack configuration to support loading CSS and image files.
3. Create a CSS file that styles the page and an image file that is displayed as a logo.
4. Build the project using the `npm run build` command.

### Output:
- The final output should generate a `public` folder containing the bundled JavaScript (`bundle.js`), CSS, and `index.html` file with the styled content.

## Task 3: Dev Servers, Modules, and Tree Shaking

### Objective:
Set up a Webpack development server, split code into modules, and optimize the build output.

### Steps:
1. Reuse the code from `task_2` in a new folder named `task_3`.
2. Configure Webpack to run a development server on port 8564.
3. Split the code into three modules (`header`, `body`, and `footer`) and create corresponding JavaScript and CSS files.
4. Optimize the Webpack build process by enabling source maps, cleaning the build folder, and splitting modules into chunks.
5. Start the development server using `npm run start-dev`.

### Output:
- The final output should be available at `http://localhost:8564` with the application split into modular JavaScript files.

## Installation

To set up the project and install the dependencies, follow these steps:

```bash
git clone https://github.com/yourusername/alx-react.git
cd alx-react/0x00-Webpack/task_X
npm install                                                                                            
~          
