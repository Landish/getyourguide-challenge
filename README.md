## Getting Started

> Solution for the [GetYourGuide Tech Challenge](https://github.com/getyourguide/se-tech-challenge). 

To run the full project locally use the following command:

```
docker compose up --build
```

It will provide us with following links:

- Client UI: http://localhost:4173/
- REST API: http://localhost:3000/activities

**Please review both, client and server applications in the following directories:**

```
nest-backend/src/
vue-frontend/src/
```

## Assumptions & Technical Decisions

In real-world scenario filtering, sorting and similar operations should be done on the Database/Server Layer. 

Filtering logic is implemented on backend in `nest-backend/src/activities/activities.service.ts` file. 
Ideally this service should communicate with Database and query results with their relationships.
But in our case we are simply using hardcoded list of activities from `activities.json` file.

Backend exposes following API endpoints to Client:

- `/activities`  -> returns list of activities.
- `/activities?withSupplier=true`  -> returns list of activities with supplier relationship included. 
- `/activities?title={SEARCH_KEYWORD}`  -> returns list of activities filtered by title. 
- `/suppliers`  -> returns list of suppliers. 

Client only uses `/activities?withSupplier=true&title={SEARCH_KEYWORD}` API endpoint for filtering and returning list of activities with their correspondent supplier. 

## Areas of Improvement

There are several things that can be done to improve these applications. However, in favor of time they were left out. 

- Client: Update URL while searching, so that the results page can be shareable, for better UX. 
- Client: Use delay of 250ms on key up on activities filter, so that we are not hitting API on every key stroke.
- Client: Add preloader screen, before activities list is loaded.
- Client: Add error handling, so that if server returns 
- Client: Use `Tanstack Query` for api calls and client side data caching. 
- Server: Integrate with relational database (PostgreSQL)
- Server: Add cache layer between API and DB calls. (Redis) 
- Server: Use paginated results for large list of activities. 
- Add missing E2E Tests for both applications
- ...

## Tests

Both, client and server has tests. To run them, install necessary dependencies and run `test` command.

```
# Backend Tests
cd nest-backend
npm install && npm run test

# Frontend Tests
cd vue-frontend
npm install && npm run test
```