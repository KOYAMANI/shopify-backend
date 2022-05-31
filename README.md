## About the Project

This project is an inventory tracking web application to demonstrate basic CRUD-operation.

## Environment

This project uses following technologies

Backend
- Node.js v14.12.0
Database
- MongoDB
Frontend
- React.js v18.1.0

## Available Scripts

In the project root directory, you can run:

### `npm start (production env)`

Runs the app in the production env.\
Make sure your environment variable is set as NODE_ENV=production.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `npm run dev (development env)` 

Runs the app in the development env, client and server concurrently.\
Make sure your environment variable is set as NODE_ENV=development.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `Other commands`

If you want to run a client alone, run `npm client` instead.
If you want to run a server alone, run `npm start` instead.

If you have Docker on your machine, you can also run :

## API References

| Method | API call                           | description                                                | 
|--------|------------------------------------|------------------------------------------------------------|
| GET    | api/items/:id                      | Find an item by its id.                                    |
| GET    | api/items/sort/:status             | Sort items by their status (in-stock, shipped, delivered). |
| POST   | api/create/                        | Create a new item.                                         |
| PUT    | api/edit/:id                       | Edit item info.                                            |
| PUT    | api/delete/:id                     | Delete an item.                                            |
