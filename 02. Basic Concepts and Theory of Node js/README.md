# [Website View](https://codexam.vercel.app/docs/node/node2)

## ⭐ What are Client and Server Sides?



<p align="center">
                <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                src="https://media.giphy.com/media/jmYJF3hGctoOI/giphy.gif"
               />
            </p>
<PhotoView   src="https://user-images.githubusercontent.com/97989643/224646023-57aa0edd-1692-428c-9038-1d280708e14f.png" alt="example" >
                                <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://user-images.githubusercontent.com/97989643/224646023-57aa0edd-1692-428c-9038-1d280708e14f.png" alt="example" />
                            </PhotoView>




**Client-side** code runs on the user's web browser, while **server-side** code runs on the web server. For example:

- **Client-side code** can use **HTML**, **CSS**, and **JavaScript** to create the web page layout, style, and interactivity. It can also fetch data from the server using AJAX.
- **Server-side code** can use **Node.js** or other languages to handle requests from the client, access the database, and send back data. It can also run business logic and authentication.

A real-world example is [Gmail](https://mail.google.com/). The client-side code loads the web page and sends requests to the server-side code to fetch your emails. The server-side code validates your identity and sends back the data to the client-side code.


## ⭐ How NodeJs use JavaScript?


<PhotoView   src="https://user-images.githubusercontent.com/97989643/224650492-61a83921-b8a7-46e6-99bc-cf05dea143bc.png" alt="example" >
                                <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://user-images.githubusercontent.com/97989643/224650492-61a83921-b8a7-46e6-99bc-cf05dea143bc.png" alt="example" />
                            </PhotoView>

  

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, which allows JavaScript to be executed outside of a browser environment.

**V8 JavaScript Engine:** Node.js uses the V8 engine to compile and execute JavaScript code. This engine was originally developed by Google for their Chrome browser, and it provides high-performance execution of JavaScript code outside of the browser. [Ryan Dahl](https://en.wikipedia.org/wiki/Ryan_Dahl) (the creator of Node.js) used the V8 engine to create Node.js. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, which allows JavaScript to be executed outside of a browser environment.

Here's an example of how Node.js uses JavaScript:
> If you can't understand the code, don't worry. We'll explain it later.

```js
// This is a simple Node.js HTTP server that responds to requests with "Hello, World!"
const http = require('http'); // Import the Node.js HTTP module

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'}); // Set the response headers
  res.write('Hello, World!'); // Write the response body
  res.end(); // End the response
});

server.listen(3000); // Start the server on port 3000

```


## ⭐ What developer Make with Node Js?

<PhotoView   src="https://user-images.githubusercontent.com/97989643/224663995-64d2844c-8927-4b1c-8f46-5bcb8abb9607.png" alt="example" >
                                <img  className="bg-purple-900 dark:bg-stone-900" style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}} align="center"  src="https://user-images.githubusercontent.com/97989643/224663995-64d2844c-8927-4b1c-8f46-5bcb8abb9607.png" alt="example" />
                            </PhotoView>
    
First request is coming from client like browser, Android, IOS etc then that request is send to server and then server connect to the database and file server and get the data and send it to the client.


- Developers Make API with Node js
> API in simple words is a set of rules that allow two software programs to communicate with each other. When you send a request to a server, the server sends back a response. The request and response are both in the form of an API call. For example, when you search for a product on Amazon, the server sends back a response that contains the product information. This response is an API call.
- So we can connect Server with Client
- Node can make API for web, Android and IOS etc.
- Make can also make website

