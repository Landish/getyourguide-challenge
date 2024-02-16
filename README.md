## Getting Started

To run the full project locally use the following command:

```
docker compose up --build
```

It will provide us with these links which we can open in browser:

- Client UI: http://localhost:4173/
- REST API: http://localhost:3000/activities

Source code is located in following directories:

```
nest-backend/src/
vue-frontend/src/
```

## Assumptions & Technical Decisions

My assumptions where that this task is a part of a microservice architecture. 
Instead of java spring boot we are using NestJS, which is a Node.js framework. 

Searching logic is implemented on backend in `nest/backend/src/activities/activities.service.ts` file. 
Ideally this service should communicate with Database and fetch results optionally with their relationships.
But in our case we are simply using hardcoded list of activities from `activities.json` file.

## Areas of Improvement

- Client: Update URL while searching, so that the results page can be shareable, for better UX. 
- Client: Use delay of 250ms on key up of activities filter, so that we are not hitting API all the time.
- Client: Add preloader screen, before activities list is loaded.
- ...

- Server: Add error handling
- Server: Integrate with database
- Server: Add cache layer between API and DB calls. 
- ...

## Tests

Both, client and server comes with unit tests. To run them, install necessary dependencies and run `test` command.

```
# Backend Tests
cd nest-backend
npm install && npm run test

# Frontend Tests
cd vue-frontend
npm install && npm run test
```