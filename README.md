# Password Generator

[https://mui-password-generator.vercel.app/](https://mui-password-generator.vercel.app/)

This is a password generator application built with Create React App using React, TypeScript, and MUI (Material-UI). The application allows you to generate strong passwords based on your preferences and saves the copied passwords in the history. You can also remove passwords from the history.

https://github.com/ruslanpashkov/mui-password-generator/assets/129327901/f9b2dbda-2fc7-40ef-8d72-2a44dd98ce20

## Features

- Password generation with various options:
  - Uppercase characters
  - Lowercase characters
  - Numbers
  - Symbols
  - Starts with specific characters
  - Ends with specific characters
  - Excludes specific characters
  - Strict mode (password must include at least one character from each selected option)
- Password history with the ability to remove passwords
- User-friendly interface with responsive design

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v12 or higher)
- npm (Node Package Manager) or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ruslanpashkov/mui-password-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd password-generator
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

To start the application locally, run the following command:

```bash
npm start
# or
yarn start
```

This will start the development server and open the application in your default browser. If the browser doesn't open automatically, you can access the application by visiting [http://localhost:3000](http://localhost:3000) in your browser.

### Generating Passwords

1. Set your password preferences using the available options:
  - Toggle the checkboxes for uppercase, lowercase, numbers, and symbols to include or exclude them from the generated password.
  - Enter specific characters in the "Starts with," "Ends with," and "Excludes" fields.
  - Enable strict mode if you want to ensure that the generated password includes at least one character from each selected option.

2. Click the "Generate" button to generate a password based on your preferences.

3. The generated password will be displayed in the "Generated Password" field.

4. You can copy the generated password by clicking the "Copy" button.

### Password History

When you copy a generated password, it will be added to the password history.

After clicking on the "History" button, you can access and view the password history.

To copy a password from the history, click the "Copy" button next to the password.

### Removing Passwords

To remove a password from the history, click the "Remove" button next to the password.

To remove all passwords from the history, click "Clear History" button on the bottom of the sidebar.

The password will be removed from the history, and it will no longer be available for future reference.

## Customization

If you want to customize the application or add additional features, you can modify the source code according to your needs. Here are some files and directories you might find useful:

- `src/App.tsx`: Main component containing the application logic and UI.
- `src/components/PasswordGenerator.tsx`: Component responsible for generating passwords.
- `src/components/PasswordHistory.tsx`: Component displaying the password generation history.

## Credits

The Password Generator application was created by [Ruslan Pashkov](https://github.com/ruslanpashkov). It utilizes the following open-source libraries:

- React: [https://reactjs.org](https://reactjs.org)
- TypeScript: [https://www.typescriptlang.org](https://www.typescriptlang.org)
- MUI (Material-UI): [https://mui.com](https://mui.com)
- zxcvbn: [https://github.com/dropbox/zxcvbn](https://github.com/dropbox/zxcvbn)
