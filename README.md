# Welcome to Node Chat Starter

I was working on a project wherein I was tasked to create a chat via Node.js and Socket.io and I thought I could share what I did.
This repository will serve as a starter kit, for those who wanted to build their own chat application using the same technology.
It's running on Node.js and realtime communication is made possible by Socket.io.

There are 2 exposed API Endpoints from this starter app. One is for sending a message and the other one is for sending a ban.
I have used to integrate this app on a CMS platform (Drupal), and thought to leave it, as it might be useful to others.

## Usage

### As a widget app

Use this app in a form of a widget where you can embed to any pages via `iframe`. You can use the `index.html` as your starter client chat app.
The `index.html` as some pre made styles and functionality. Extend it as necesssary.

### As a Chat server

Primarily, this was made to serve that purpose. Like I said, this app was used to integrate into a CMS platform. The client chat app is served
from the CMS, while it connects to the chat server.


## Pre-Requisite Tools
Need to have these tools in your local to run this repo

- NodeJS - https://nodejs.org
- NPM - https://www.npmjs.com

## How to Run
- Open your terminal and change directory to the project root
- Run `npm install` to download the project denpendencies
- Finally, run `npm start`

## How to Stop
- Go to the project root folder and run `npm stop`

## How to view logs
- First, you must have [forever](https://www.npmjs.com/package/forever) module, installed globally: `npm install forever -g`
- Once that is installed, use the command `forever list`. It should print out the current running Forever processes
- From there, you should see the `logfile`
- `tail -f <logfile/path/filename>` to continously view the log's tail as it grow
- You may use `cat <logfile/path/filename>` to print the whole log from the screen OR use any editor to open up the log file

