## [Live Demo](https://mern-hangout.herokuapp.com)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Introduction

Hangout is a web application backed by Django where every user can create, update and delete post on the feed(with timestamp). New users can set profile picture(also update later). Users can reset password via registered e-mail.  
Application uses PostgreSQL(relation database) to store user information and their blogs. AWS is used to store static files(profile picture). Heroku is used for deloyment.

[<img src="https://github.com/bmbshlly/django-blogpost/blob/main/giphy.gif" width="480" height="270">](https://django-blogpost.herokuapp.com)

## Tools:
- [Material-UI](https://material-ui.com) - React UI framework
- [Redux](https://redux.js.org) - State container for JS
- [React](https://reactjs.org) - JS library

- [Pusher](https://pusher.com) - Realtime chat
- [Express](https://expressjs.com) - Node.js(https://nodejs.org) framework
- [Postman](https://www.postman.com) - API testing  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - NoSQL cloud database
- [Firebase](https://firebase.google.com/docs/auth) - Google authentication
- [Heroku](https://www.heroku.com) - Deloyment.

## Key features:
- Authentication (register, login, logout)
- Reset password via SMTP (mail received with reset password link!)
- Create, update, delete post with timestamp (only author can edit)
- Pagination (per page 5 post) - navigation to first, previous 3, current, next 3 and last page in the bottom
- Profile update with picture
- View all post by a user in page.



## Getting Started

**Step 1: Clone the code into a fresh folder**

```
$ git clone https://github.com/bmbshlly/mern-hangout-backend.git
$ cd mern-hangout-backend
```

**Step 2: Create a Virtual Environment and install Dependencies**

Create a new Virtual Environment for the project and activate it. If you don't have the `virtualenv` command yet, you can find installation [instructions here](https://virtualenv.readthedocs.io/en/latest/).

```
$ virtualenv venv
$ source venv/bin/activate
```

Next, we need to install the project dependencies, which are listed in `package.json`.

```
(venv) $ npm install
```

**Step 3: Run application**

Now we're ready to start our server using [Nodemon](https://nodemon.io):

```
(venv) $ nodemon server.js
```

Open http://localhost:9000 (port number is prompted) to view it in your browser.
The app will automatically reload if you make changes to the code.
You will see the build errors and warnings in the console.

Try hosted app [here.](https://mern-hangout.herokuapp.com)

