## Problem Statement

Create e a simple application that allows the user to complete/solve programming tests/problems just like LeetCode or Hackerrank.

### Requirements

- [Nodejs](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Nestjs](https://nestjs.com/) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript. Under the hood, Nest makes use of robust HTTP Server frameworks like Express (the default) and optionally can be configured to use Fastify as well!
- [Docker](https://www.docker.com/) is a platform designed to help developers build, share, and run container applications.
- [Docker compose](https://docs.docker.com/compose/) is a tool for defining and running multi-container applications. It simplifies the control of your entire application stack, making it easy to manage services, networks, and volumes in a single, comprehensible YAML configuration file. Then, with a single command, you create and start all the services from your configuration file.

## How to Setup Locally

- Ensure you have node, docker and docker compose installed
- Clone the repository using `git clone https://github.com/alahirajeffrey/tvzcorp-technical-test.git`
- Navigate to the cloned repo and install the dependencies using `npm install`
- Run the command `docker compose up -d` to run redis in a detached mode.
- Create a .env file and use the variavles in the .env.example file as a guide to populate the .env file
- To run the API sever in development mode using nodemon, use `npm run start:dev`
- To run in production using, use `npm run start:prod`
- Once the application is running, navigate to `localhost:3000/api/v1/doc` to access the swagger file and test the enpoints

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

# Author

[Alahira Jeffrey](<(https://github.com/alahirajeffrey)>)

# Lincense

This project is available for use under the MIT License.
