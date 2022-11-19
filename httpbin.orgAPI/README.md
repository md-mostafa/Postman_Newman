<div align='center'>

# httpbin.org API
The API is available at `https://httpbin.org/`
</div>

<br>
 
Automated the following crud operations using postman, newman for this api.

<br>
 

# 📄 **API Endpoints**


| HTTP Methods| Use                              | Endpoint                |
| ----------- | -------------------------------- | ----------------------- |
| **GET**     | The request's query parameters.  | `/get`                  |
| **DELETE**  | The request's DELETE parameters. | `/delete`               |
| **PATCH**   | The request's PATCH parameters.  | `/patch`                |
| **POST**    | The request's POST parameters.   | `/post`                 |
| **PUT**     | The request's PUT parameters.    | `/put`                  |

<br>


| Response Format   | Use                                      | Endpoint        |
| ----------------- | ---------------------------------------- | --------------- |
| **GET**           | Returns Brotli-encoded data.             | `/brotli`       |
| **GET**           | Returns Deflate-encoded data.            | `/deflate`      |
| **GET**           | Returns page denied by robots.txt rules. | `/deny`         |

<br>



| Request Inspection| Use                                                   | Endpoint        |
| ----------------- | ----------------------------------------------------- | --------------- |
| **GET**           | Return the incoming request's HTTP headers            | `/headers`      |
| **GET**           | Returns the requester's IP Address.                   | `/ip`           |
| **GET**           | Return the incoming requests's User-Agent header.     | `/user-agent`   |

<br>


| Status Codes| Use                                                                      | Endpoint                |
| ----------- | ------------------------------------------------------------------------ | ----------------------- |
| **DELETE**  | Return status code or random status code if more than one are given.     | `/status/{codes}`       |
| **GET**     | Return status code or random status code if more than one are given      | `/status/{codes}`       |
| **PATCH**   | Return status code or random status code if more than one are given      | `/status/{codes}`       |
| **POST**    | Return status code or random status code if more than one are given      | `/status/{codes}`       |
| **PUT**    | Return status code or random status code if more than one are given       | `/status/{codes}`       |

<br>



| Auth Methods| Use                                                               |Endpoint                                           |
| ----------- | ----------------------------------------------------------------  | -----------------------------------------------   |
| **GET**     | Prompts the user for authorization using HTTP Basic Auth.         | `/basic-auth/{user}/{passwd}`                     |
| **GET**     | Prompts the user for authorization using bearer authentication.   | `/bearer`                                         |
| **GET**     | Prompts the user for authorization using Digest Auth.             | `/digest-auth/{qop}/{user}/{passwd`               |
| **GET**     | Prompts the user for authorization using Digest Auth + Algorithm. | `/digest-auth/{qop}/{user}/{passwd}/{algorithm}`  |


<br>

<br>


## ⚙️ Setting Up

#### Prerequisites :
- nodejs
- postman

<br>

#### Downloading this folder :

1. Copy this link

   ```
   https://github.com/md-mostafa/Postman_Newman/tree/main/TestApiAutomation
   ```


2. Put the link into [Downgit](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fmd-mostafa%2FPostman_Newman%2Ftree%2Fmain%2FTestApiAutomation)
3. Download the zip file and unzip it

<br>

#### Steps to run this project:

1.  Give the following commands by opening terminal in the project folder
 ```
 npm i
 ```
 ```
 npm run test
```
