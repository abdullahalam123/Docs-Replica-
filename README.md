
# Google Docs Replica

Introducing a replica of Google Docs user interface. This creation was developed as part of the Front End Assessment for Mercor. It has a familiar and intuitive user experience, designed to mirror the renowned Google Docs interface.


## Features
- **Text Editor**: A simple text editor that enables the user to write, copy, and delete content effortlessly. Also supports Grammarly out of the box. The text editor features a white background for easy readability, set against a subtle gray backdrop.

- **Sidebar**: A convenient with quick access to other Google apps to switch between them effortlessly

- **Toolbar**: A toolbar component that allows the user to edit the document name, which gets reflected on the browser tab. A variety of familiar commans like Undo, Redo, Text Style, Font Size, Bold, Italics to name a few and the option to share the document.


## Components
- **app.js**: The App.js file in React is the main component where the application logic and structure are defined.
- **index.js**: The index.js file in React is the entry point for rendering the application.
- **index.css**: It contains styles specific to the index.html file.
- **Public Folder:** It contains static assets, such as HTML, CSS, images, and other files.
    - *index.html*: The React code is injected here.
    - *images folder*: Contains static images .



- **src folder:** The source code files are stored here. It contains JavaScript files, stylesheets, and other assets that are used to build and run the application.
    - **assets folder**: It contains the logos for the Google Applications in the Sidebar.
    - **Components Folder**: Stores the reusable UI elements.
        - *Editor.jsx*: It is the main editing screen component that provides the primary interface for users to edit and manipulate the content.
        - *Header.jsx*:It includes components for displaying the document name, sharing options, user profile picture, and additional functionality for various options.
        - *Sidebar.jsx*:It displays links to various other Google Apps, allowing users to conveniently navigate between different Google applications from within the document editor.
        - *Toolbar.jsx*: It contains the toolbar component that provides a collection of formatting options similar to those available in Google Docs. It includes functionalities like text formatting, font styles, alignment, and other tools to enhance the appearance and style of the document.

- **Tech Stack**
This project is developed using React, and Chakra UI. React allows for efficient component-based development, while Chakra UI simplifies the styling and design process with its ready-to-use components and theming capabilities.

- **Steps to Run it locally**:
 *Clone the repository*:

   ```shell
   git clone https://github.com/abdullahalam123/Docs-Replica-.git
   ```
   
 *Navigate to the project directory*:
   ```shell
   cd .\Docs-Replica-\
   ```
 *Make sure Node.js is installed and run the command*:
   ```shell
   npm install
   ```
 *To start the developement server*:
   ```shell
   npm start
   ```
 *The app will be available at*: http://localhost:3000 on your browser.

