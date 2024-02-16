### Getting Started

To run the full project locally run the following command:

```
docker compose up --build
```

It will provide us with these links, which we can open in browser:

- Client UI: http://localhost:4173/
- REST API: http://localhost:3000/activities

Important files are located in following directories:

```
nest-backend/src/
vue-frontend/src/
```

### Assumptions & Technical Decisions

My assumptions where that this task is a part of a microservice architecture. 
Instead of java spring boot we are using NestJS, which is a Node.js framework. 

### Areas of Improvement

- Client: Update URL while searching, so the search results page can be shareable. 
- Client: Use delay of 250ms on key up of activities filter, so that we are not hitting API all the time.
- Client: Add preloader screen, before activities list is loaded.
- ...

- Server: Integrate with database
- Server: Add cache layer between API and DB calls. 
- ...

### Tests

Both, client and server comes with unit tests. To run them, install necessary dependencies and run `test` command.

```
# Backend Tests
cd nest-backend
npm install && npm run test

# Frontend Tests
cd vue-frontend
npm install && npm run test
```