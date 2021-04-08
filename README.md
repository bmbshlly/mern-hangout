## [Live Demo](https://mern-hangout.herokuapp.com)

# Introduction

Hangout is a web application backed by Django where every user can create, update and delete post on the feed(with timestamp). New users can set profile picture(also update later). Users can reset password via registered e-mail.  
Application uses PostgreSQL(relation database) to store user information and their blogs. AWS is used to store static files(profile picture). Heroku is used for deloyment.

[<img src="https://github.com/bmbshlly/django-blogpost/blob/main/giphy.gif" width="480" height="270">](https://django-blogpost.herokuapp.com)

## Tools:
- [Material-UI](https://material-ui.com) - React UI framework
- [Redux](https://redux.js.org) - State container for JS
- [React](https://reactjs.org) - JS library
- [Pusher](https://pusher.com) - Realtime chat
- [Express](https://expressjs.com) - [Node.js](https://nodejs.org) framework
- [Postman](https://www.postman.com) - API testing
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - NoSQL cloud database
- [Firebase](https://firebase.google.com/docs/auth) - Google authentication
- [Heroku](https://www.heroku.com) - Deloyment

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
$ git clone https://github.com/bmbshlly/mern-hangout.git
$ cd mern-hangout
```

**Step 2: Create a Virtual Environment and install Dependencies**

Create a new Virtual Environment for the project and activate it. If you don't have the `virtualenv` command yet, you can find installation [instructions here](https://virtualenv.readthedocs.io/en/latest/).

```
$ virtualenv venv
$ source venv/bin/activate
```

Next, we need to install the server dependencies, which are listed in `package.json`.

```
(venv) $ npm install
```

Next, we need to build react project to static files, which are listed in `client`.

```
(venv) $ cd client
(venv) $ npm install
(venv) $ npm run build
```

We can find `index.html` in `build`.

**Step 3: Run application**

Now we're ready to start our server using [Nodemon](https://nodemon.io):

```
(venv) $ nodemon server.js
```

Open http://localhost:9000 (port number is prompted) to view it in your browser.
The app will automatically reload if you make changes to the code.
You will see the build errors and warnings in the console.

Try hosted app [here.](https://mern-hangout.herokuapp.com)

