# RN Todo App Server

### Installation

- Create two postgres databases - **rn_todo_dev** and **rn_todo_test**
- Run `yarn install`
- Run `yarn run run-migrations:dev` to build database tables
- Run `yarn run run-seeds:dev` to include some data to database
- Run `yarn run start:dev` to start server for development

### Testing
- Run `yarn run test-full` to implement migrations and some data to test database before test running or if You want to just run tests You can use `yarn run test`