# S-Commerce Platform

S-Commerce is an e-commerce platform made on the MERN stack.

The repository has 2 parts:
* Client (Frontend: React)
* Server (Backend: Node)

## Installation Client

1. Navigate to the client folder
2. Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install the S-Commerce frontend.
  ```bash
  npm install
  ```
3. Start the server.
  ```bash
  npm start
  ```

## Installation Server

1. Need to set up a MongoDB account and get the connection string. [Ref](https://www.mongodb.com/docs/guides/cloud/connectionstring/)
2. Navigate to the server folder
3. Make a [.env]() file at the root with reference to the [.env_template]() file present in the repository
4. Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install the S-Commerce frontend.
  ```bash
  npm install
  ```
5. Start the server.
  ```bash
  npm start
  ```

## Routes

### Products

```
GET      /api/v1/products
GET      /api/v1/products/:id
POST     /api/v1/products
PUT      /api/v1/products/:id
DELETE   /api/v1/products/:id
GET featured products: /api/v1/products/get/featured/:count
GET products count: /api/v1/products/get/count
```

### Categories
```
GET      /api/v1/catgories
GET      /api/v1/categories/:id
POST     /api/v1/categories
PUT      /api/v1/categories/:id
DELETE   /api/v1/categories/:id
```

### Users

```
GET      /api/v1/users
GET      /api/v1/users/:id
POST     /api/v1/users
PUT      /api/v1/users/:id
DELETE   /api/v1/users/:id
GET users count: /api/v1/users/get/count
```

### Register new user

```
POST     /api/v1/users/register
```

### Login user

To login the user and get the auth token you can use:

```
POST     /api/v1/users/login
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
