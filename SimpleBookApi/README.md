<div align='center'>

# 📚Simple Books API
The API is available at `https://simple-books-api.glitch.me`
</div>

<br>

Automated the following crud operations using postman, newman for this api

<br>


# 📄 **API Endpoints**

| HTTP Method | Use                            | Endpoint                |
| ----------- | ------------------------------ | ----------------------- |
| **GET**     | Returns the status of the api  | `/status`               |
| **GET**     | Returns a list of books        | `/books/`               |
| **GET**     | Get a single book              | `/books/:bookid`        |
| **POST**    | Register Api client            | `/api-clients`          |
| **POST**    | Order a book                   | `/orders`               |
| **GET**     | Get all orders                 | `/orders`               |
| **GET**     | Get an order                   | `/orders/:orderid`      |
| **PATCH**   | Update an order                | `/orders/:orderid`      |
| **DELETE**  | Delete an order                | `/orders/:orderid`      |

<br>

## ⚙️ Setting Up

#### Prerequisites :
- nodejs

#### Downloading this folder :

1. Copy this link

   ```
   https://github.com/md-mostafa/Postman_Newman/tree/main/SimpleBookApi
   ```

2. Put the link into [Downgit](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fmd-mostafa%2FPostman_Newman%2Ftree%2Fmain%2FTestApiAutomation)
3. Download the zip file and unzip it
 

#### Running the tests :
1.  Give the following commands by opening terminal in the project folder
 ```
 npm i
 ```
 ```
 npm run test
```
