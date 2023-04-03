## ⭐ Explain Server & Client in Detail


<p align="center">
                <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                src="https://media.giphy.com/media/3oKIPku6fonFMEY2aI/giphy.gif"
               />
  </p>

<img src="https://user-images.githubusercontent.com/97989643/229522277-d7abf90b-fa71-4443-9c90-6ebe346b99d5.png" alt="example" />

1. A user sends an HTTP request using either the GET or POST method to a server.
2. The server receives the request and processes it.
3. If the request is a GET request, the server retrieves data from the database based on the parameters specified in the request.
4. If the request is a POST request, the server stores the data sent in the request into the database.
5. Once the data is retrieved or stored, it is formatted into JSON format (if necessary) and sent back to the client in an HTTP response.
6. The client receives the HTTP response and processes the JSON data (if any) to display it to the user.


*********


### 📃Additional Information





#### ⚡ Overview of how each HTTP method works:

- **GET**: The GET method is used to retrieve data from a server. When a GET request is sent to a server, the server retrieves data from the database based on the parameters specified in the request and sends it back to the client in an HTTP response.

- **POST**: The POST method is used to send data to a server to be processed. When a POST request is sent to a server, the server processes the data sent in the request and stores it in the database.

- **PUT**: The PUT method is used to update an existing resource on the server. When a PUT request is sent to a server, the server updates the specified resource with the data sent in the request.

- **PATCH**: The PATCH method is similar to the PUT method but is used to apply partial updates to a resource on the server. When a PATCH request is sent to a server, the server applies the specified changes to the resource.

- **DELETE**: The DELETE method is used to delete a resource on the server. When a DELETE request is sent to a server, the server deletes the specified resource.

- **COPY**: The COPY method is used to create a copy of a resource on the server. When a COPY request is sent to a server, the server creates a copy of the specified resource.

- **HEAD**: The HEAD method is similar to the GET method but is used to retrieve only the headers of a resource on the server. When a HEAD request is sent to a server, the server returns only the headers of the specified resource in an HTTP response.

- **OPTIONS**: The OPTIONS method is used to retrieve information about the communication options available for a resource on the server. When an OPTIONS request is sent to a server, the server returns information about the available communication options for the specified resource in an HTTP response.

- **LINK**: The LINK method is used to establish relationships between resources on the server. When a LINK request is sent to a server, the server establishes relationships between resources as specified in the request.

- **UNLINK**: The UNLINK method is used to remove relationships between resources on the server. When an UNLINK request is sent to a server, the server removes relationships between resources as specified in the request.

- **PURGE**: The PURGE method is used to remove cached copies of resources on proxy servers. When a PURGE request is sent to a proxy server, it removes cached copies of resources as specified in the request.

- **LOCK**: The LOCK method is used to lock resources on WebDAV servers. When a LOCK request is sent to a WebDAV server, it locks resources as specified in the request.

- **UNLOCK**: The UNLOCK method is used to unlock resources on WebDAV servers. When an UNLOCK request is sent to a WebDAV server, it unlocks resources as specified in the request.

- **PROPFIND**: The PROPFIND method is used on WebDAV servers to retrieve properties of resources. When a PROPFIND request is sent to a WebDAV server, it returns properties of resources as specified in the request.

- **VIEW**: The VIEW method does not exist in standard HTTP methods and may be specific to certain systems or applications.






#### ⚡ Summary of the HTTP request and response process.

- The HTTP method is used to indicate the type of request being made. The most common methods are GET, POST, PUT, and DELETE.
- The HTTP headers are used to provide additional information about the request. For example, the Content-Type header indicates the type of data being sent in the request body.
- The HTTP status code is used to indicate the success or failure of the request. The most common status codes are 200 (OK), 400 (Bad Request), and 500 (Internal Server Error).
- The HTTP body is used to send data to the server. The data can be in any format, but JSON is a common format.
- The JSON data is formatted into a JavaScript object. The object can contain any type of data, but it is often used to store data in a key-value format.
- The client receives the HTTP response and processes the JSON data (if any) to display it to the user. The JSON data can be displayed in a variety of ways, but it is often used to create web pages, images, or files.








## ⭐ Request and Response



### **What are req and res?**

- req and res are short names for `request` and `response`.
- They are `objects` that help us communicate with the client using HTTP.
- HTTP is a protocol that lets the `client and the server` exchange data over the internet.

### **What is the request object (req)?**

The request object contains information about what the client wants from the server.
- Some of the information in the request object are:
  - **The `URL`**: the address of the resource that `the client wants to access`.

  - **The `method`**: the action that the client wants to perform, such as `GET`, `POST`, `PUT`, `DELETE`, etc.

  - **The `headers`**: additional information about the request, such as the `content type`, the `language`, the `authorization`, etc.

  - **The `query string`**: optional data that is added to the URL after a question mark ``(?)``, such as /?name=John&age=25.
  - **The `parameters`**: optional data that is added to the URL as placeholders, such as /user/:id, where ``id`` can be any value.
  - **The `body`**: optional data that is sent along with the request, usually in a form or a `JSON format`.
- The request object also has methods that let us check or modify the request, such as:
  - **`req.accepts ()`**: checks what kind of data the client can receive, such as `text, HTML, JSON`, etc.
  - **`req.is ()`**: checks what kind of data the client has sent, such as `text/plain, application/json`, etc.
  - **`req.get ()`**: gets a specific header from the request, such as `req.get ('content-type')`.
  - **`req.set ()`**: sets a specific header for the request, such as `req.set ('content-type', 'application/json')`.


************


### **What is the response object (res)?**

The response object contains methods and properties to send back a response to the client.
- Some of the methods and properties in the response object are:
  - `res.send ()`: sends a `simple message to the client`, such as res.send ('Hello World').
  - `res.json ()`: sends a `JSON object to the client`, such as res.json ```({name: 'John', age: 25}).```
  - `res.render ()`: `renders a view template to the client`, such as res.render ```('index', {title: 'Home Page'}).```
  - `res.status ()`: sets the status code for the response, such as `res.status (200) for success` or `res.status (404) for not found`.
  - `res.set ()`: `sets a specific header` for the response, such as `res.set ('content-type', 'text/plain')`.
  - `res.cookie ()`: sets a cookie for the response, such as `res.cookie ('name', 'John')`.
  - `res.sendFile ()`: sends a file to the client, such as `res.sendFile ('/path/to/file.jpg')`.
- The response object also has properties that let us access or modify the response, such as:
  - `res.statusCode`: gets or sets the status code for the response, such as `res.statusCode = 200` or `console.log (res.statusCode)`.
  - `res.headersSent`: checks if the headers have been sent to the client, such as if `(res.headersSent)` ```{ // do something }.```
  - `res.locals`: stores local variables that are accessible within the view template, such as `res.locals.title = 'Home Page'`.


*************


### **How do we use req and res in Express.js?**

- Express.js is a web framework for Node.js that makes it easier to create web applications using HTTP.
- In Express.js, we use `req` and `res` as parameters in a callback function that handles a specific route or middleware.
- A route is a part of the URL that tells us what to do when a request is made. A middleware is a function that can change or add something to the request or response before or after a route is handled.


*************


**Example of using req and res in Express.js**

In this example, we will use your code to show how req and res work in Express.js.

```js
const express = require("express");
const app = express();

//Home Page
app.get(`/`, (req, res) => {
  console.log("Data send by the client: ", req.query.id);
  res.send("This is our main Page");
});

//Server
app.listen(5001);
```

1. We do
```js
const express = require("express");
```
> This line imports the express module using the require () function and stores it in a variable called express.
2. Then we do
```js
const app = express();
```
> This line creates an Express application using the express () function and stores it in a variable called app.

```js
app.get(`/`, (req, res) => {
  console.log("Data send by the client: ", req.query.id);
  res.send("This is our main Page");
});
```
> - This line defines a route for the home page using app.get (). This means that whenever a client makes a GET request to the root path (/), the callback function will be executed. The callback function takes two arguments: req and res.
> - The req argument represents the request object that contains information about the client's request. In this callback function, we use console.log () to print the value of req.query.id to the terminal. This means that if the client sends a request like /?id=123, we will see 123 in the terminal. The req.query property contains an object of key-value pairs that are added to the URL after a question mark (?).
> - The res argument represents the response object that contains methods and properties to send back a response to the client. In this callback function, we use res.send () to send a message "This is our main Page" back to the client. This means that the client will see this message in their browser or other HTTP client. The res.send () method can send data in different formats, such as plain text, HTML, JSON, etc.

3. This line starts the server and listens for incoming requests on port 5001. This means that our application will be accessible at http://localhost:5001/.

```js
app.listen(5001);
```

![Screenshot 2023-04-03 221442](https://user-images.githubusercontent.com/97989643/229575454-0dd914b2-5e85-4e58-b4a9-ad20cc1bdbdc.png)



