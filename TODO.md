# Node.js Express JSON API - CRUD Stickers

We'll be using:
* Postgres for our database
* knex.js for our database migrations, seeds and queries.
* express.js for our JSON routes
* Mocha, Chai and SuperTest to test our routes

* Prerequisites (Mac OS Commands)
  * Latest version of Node.js
    * brew install node
  * Postgres
    * brew install postgres
    * brew services start postgres
    * createdb
  * Express Generator
    * npm install -g express-generator
  * Knex installed globaly
    * npm install -g knex

## Server Check List
* [x] Create a server folder
  * [x] Generate Express App
  * [x] initialize git repo
* [x] Create database
* [x] Initialize knex project
  * [x] Install knex and pg
  * [x] Create knexfile.js
* [x] Create sticker table migration
* [x] Seed sticker table with sample data
* [x] Add api folder and create/mount router
* [x] Connect to the database'
  * [x] Create database connection file
  * [x] Create a queries file
* [x] Setup tests
  * [x] Install mocha, chai and supertest
  * [x] Add a test database connection
  * [x] Add npm test script
    * [x] Drop/Create database
  * [x] Create before
    * [x] Run migrations/seeds on test db
* [x] List all records with GET /api/v1/stickers
    * [x] Add test
* [x] Make sure the tests are working!
* [x] List all records with GET /api/v1/stickers
  * [x] Create query
  * [x] Create route
* [x] Show one record with GET /api/v1/stickers/:id
  * [x] Create query
  * [x] Create route
* [] Create a record with POST /api/v1/stickers
  * [] Create route
  * [] Create query
* [] Update a record with PUT /api/v1/stickers/:id
  * [ ] Create route
  * [ ] Create query
* [ ] Delete a record with DELETE /api/v1/stickers/:id
  * [ ] Create route
  * [ ] Create query
