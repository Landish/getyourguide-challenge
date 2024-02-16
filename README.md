### Getting Started

To run the full project locally run the following command:

```
docker compose up --build
```

Client UI: http://localhost:4173/
REST API: http://localhost:3000/activities

### Assumptions & Technical Decisions

My assumptions where that this task is a part of a microservice architecture. 
Instead of java spring boot we are using NestJS, which is a


### Areas of Improvement

- Client: Styles should match branding
- Client: Update URL while searching, so the search results page can be shareable. 
- Client: Use delay of 250ms on key up of activities filter

- Server: Integrate with database
- Server: Add cache layer between API and DB calls. 

#### Tests

Both, client and server comes with unit tests. To run them, install necessary dependencies and run `test` command.

```
# Backend
cd nest-backend
npm install

npm run test

# Frontend
cd vue-frontend
npm install 

npm run test
```