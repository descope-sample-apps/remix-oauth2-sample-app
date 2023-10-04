<img width="1400" alt="Monosnap Github Profile Header Generator 2023-07-20 23-09-34" src="https://github.com/descope-sample-apps/remix-oauth2-sample-app/assets/32936811/82b448e5-742d-46fd-8c4f-ff0792fded11">

---

This sample app is an open-source sample app, built with React and Remix. This app uses [Remix-Auth](https://github.com/sergiodxa/remix-auth) and the OAuth 2.0 standard to utilize Descope authentication. This project also showcases how to store and display user information with a Prisma DB.

## Table of Contents 📝

1. [Features](#features)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [Issue Reporting](#issue-reporting)

## Features ✨

- **Descope Login**: Users can login with their Descope credentials.
- **User Dashboard**: After logging in, users are redirected to a dashboard which displays the information of the logged in user.

## Installation 💿

1. Clone the repository:

```bash
git clone https://github.com/descope-sample-apps/remix-oauth2-sample-app.git
```

2. Install dependencies:

```bash
npm install
```

3. Setup environment variables:

Use the `.env.example` file in the repo, and change the name to `.env`. Then, fill in the following variables with your own information:

1. **Client ID** - This will be your Descope Project ID, which you can find under [Project Settings](https://app.descope.com/settings/project), in the console.

2. **Client Secret** - A Descope Access Key you can generate under [Access Keys](https://app.descope.com/accesskeys), in the console.

3. **Local Callback URL** - If you're testing with localhost, it'll be something like `http://localhost:3000/auth/callback`.

## Running the Application 🚀

To start the application, run:

```bash
npm run dev
```

Navigate to `http://localhost:3000/` in your browser.

## Issue Reporting ⚠️

For any issues or suggestions, feel free to open an issue in the GitHub repository.

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
