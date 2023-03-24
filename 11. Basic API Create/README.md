
## ⭐ Make a Server First


<p align="center">
                <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                src="https://media.giphy.com/media/5ipPCxr2YlmU3f7siP/giphy.gif"
               />
            </p>



1. We already know how to make a simple server. You can check it out the [previous chapter](https://code-xam.vercel.app/docs/node/node7)

 ```js
 const http = require('http');

 http.createServer((req, res) => {



   }
 ).listen(5000);
```

2. Now `res.writeHead(200, {'Content-Type': 'application/json'});` - This line sets the response status code and headers using the `writeHead` method of the `res` (response) object

 >  -  `writeHead` method takes two arguments, the first is the status code and the second is an object containing the response headers (in this case, we are setting the `Content-Type` header to `application/json`)

 >  -  The `writeHead` method is used to send the response status code and headers to the client

 >  -  The status code `200` is a standard HTTP status code that indicates the request was successful.

 >  -  The `Content-Type` header is used to specify the media type of the resource being sent in the response body this means that the client can expect to receive data in a specific format.

 >  -  `application/json`, indicating that the response body will contain data in JSON format & we use `/` to separate the type and subtype of the media type.

3. Now `res.write(JSON.stringify({name: 'Subham', age: 20}));` - This line writes the response body using the `write` method of the `res` (response) object

 >  -  The `write` method is used to send the response body to the client means that the client can expect to receive data in a specific format.

 >  -  The `JSON.stringify` method is used to convert a JavaScript object to a JSON string

 >  -  In this case, it is sending a JSON representation of an object with properties `name` and `age`.

 >  -  The `JSON.stringify` method takes a single argument, the object to be converted to a JSON string

 4. Now `res.end();` - This line signals the end of the response and sends it to the client using the `end` method of the `res` (response) object.

 >  -  The `end` method is used to indicate that all of the response headers and body have been sent and that the server should consider this message complete.



 > These lines of code are part of a Node.js server that sends a response to an HTTP request. The `writeHead` method is used to set the response status code and headers. In this case, the status code is set to `200` to indicate success, and the `Content-Type` header is set to `application/json` to indicate that the response will contain JSON data. The `write` method is used to send data in the response body. In this case, it sends a JSON representation of an object with properties `name` and `age`. Finally, the `end` method is used to signal the end of the response and send it to the client.




```js filename="server.js"
const http = require('http');

http.createServer((req, res) => {

   res.writeHead(200, {'Content-Type': 'application/json'});
   res.write(JSON.stringify({name: 'Subham', age: 20}));
   res.end();
  }
).listen(5000);
```
5. Now we can run this server using `nodemon server.js` and check it out in the browser using `localhost:5000`

6. Now we can see the output in the browser like this

```json
{
  "name": "Subham",
  "age": 20
}
```

> You can also check it out in the postman we already discussed about it in this project section [here](https://codexam.vercel.app/docs/project/xt/xt4)




## ⭐ Add More Data





 ### 📝 Separate the data using data.js

 1. Create a new file `data.js`and add this code
 ```js filename="data.js"
 const data ={
     "name":"Rajesh",
     "age": 20,
     "email": "rajesh@dev.com"
 }
 module.exports=data;
 ```
 - Here `const data` is a variable which contains an object with some data
    - `name` is a property of the object and its value is `Rajesh`
    - `age` is a property of the object and its value is `20`
    - `email` is a property of the object and its value is `
 - `module.exports=data` is used to export the data variable so that it can be used in other files

2. Now we can import this data in the `server.js` file using `require` method

```js filename="server.js"

const data = require('./data');
```
3. Now pass the data variable in the `write` method of the `res` object inside `JSON.stringify` method like this
```js filename="server.js"
res.write(JSON.stringify(data));
```
4. Now we can run this server using `nodemon server.js` and check it out in the browser using `localhost:5000`

5. Now we can see the output in the browser like this

```json
{"name":"Rajesh","age":20,"email":"rajesh@dev.com"}
```

### 📝 Add more data in the data.js file

1. Now we can add more data in the `data.js` file like this

```js filename="data.js"

const data = [
  {
    name: "Rajesh",
    age: 20,
    address: {
      city: "Delhi",
      state: "Delhi",
      country: "India",
    },
    hobbies: ["coding", "reading", "playing"],
    skills: ["html", "css", "js", "nodejs"],
    education: {
      school: "Delhi Public School",
      college: "Delhi University",
      degree: "B.Tech",
    },
    projects: {
      project1: "Portfolio",
      project2: "Blog",
      project3: "E-commerce",
    },
    social: {
      github: "rajesh.github.io",
      linkedin: "rajesh.linkedin.com",
      twitter: "rajesh.twitter.com",
    },
    work: {
      company: "XYZ",
      position: "Software Engineer",
      experience: "2 years",
    },
    achievements: {
      achievement1: "Won a hackathon",
      achievement2: "Got a scholarship",
      achievement3: "Got a job",
    },
    interests: {
      interest1: "Reading",
      interest2: "Playing",
      interest3: "Coding",
    },
    languages: {
      language1: "English",
      language2: "Hindi",
      language3: "Punjabi",
    },
    contact: {
      phone: "1234567890",
      email: "rajesh.dev.com",
    },
  },
  {
    name: "Subham",
    age: 20,
    address: {
      city: "Delhi",
      state: "Delhi",
      country: "India",
    },
    hobbies: ["coding", "reading", "playing"],
    skills: ["html", "css", "js", "nodejs"],
    education: {
      school: "Delhi Public School",
      college: "Delhi University",
      degree: "B.Tech",
    },
    projects: {
      project1: "Portfolio",
      project2: "Blog",
      project3: "E-commerce",
    },
    social: {
      github: "subham.github.io",
      linkedin: "subham.linkedin.com",
      twitter: "subham.twitter.com",
    },
    work: {
      company: "XYZ",
      position: "Software Engineer",
      experience: "2 years",
    },
    achievements: {
      achievement1: "Won a hackathon",
      achievement2: "Got a scholarship",
      achievement3: "Got a job",
    },
    interests: {
      interest1: "Reading",
      interest2: "Playing",
      interest3: "Coding",
    },
    languages: {
      language1: "English",
      language2: "Hindi",
      language3: "Punjabi",
    },
    contact: {
      phone: "1234567890",
      email: "subham.dev.com",
    },
  },
  {
    name: "Rahul",
    age: 20,
    address: {
      city: "Delhi",
      state: "Delhi",
      country: "India",
    },
    hobbies: ["coding", "reading", "playing"],
    skills: ["html", "css", "js", "nodejs"],
    education: {
      school: "Delhi Public School",
      college: "Delhi University",
      degree: "B.Tech",
    },
    projects: {
      project1: "Portfolio",
      project2: "Blog",
      project3: "E-commerce",
    },
    social: {
      github: "rahul.github.io",
      linkedin: "rahul.linkedin.com",
      twitter: "rahul.twitter.com",
    },
    work: {
      company: "XYZ",
      position: "Software Engineer",
      experience: "2 years",
    },
    achievements: {
      achievement1: "Won a hackathon",
      achievement2: "Got a scholarship",
      achievement3: "Got a job",
    },
    interests: {
      interest1: "Reading",
      interest2: "Playing",
      interest3: "Coding",
    },
    languages: {
      language1: "English",
      language2: "Hindi",
      language3: "Punjabi",
    },
    contact: {
      phone: "1234567890",
      email: "rahul.dev.com",
    },
  },
];

module.exports = data;
```

2. Now our server will look like this

```js filename="server.js"

const http = require('http');
const data = require('./data');

http.createServer((req, res) => {

   res.writeHead(200, {'Content-Type': 'application/json'});
   res.write(JSON.stringify(data));
   res.end();
  }
).listen(5000);
```

3. Now we can run this server using `nodemon server.js` and check it out in the browser using `localhost:5000`

4. Now we can see the output in the browser like this

```json
[{"name":"Rajesh","age":20,"address":{"city":"Delhi","state":"Delhi","country":"India"},"hobbies":["coding","reading","playing"],"skills":["html","css","js","nodejs"],"education":{"school":"Delhi Public School","college":"Delhi University","degree":"B.Tech"},"projects":{"project1":"Portfolio","project2":"Blog","project3":"E-commerce"},"social":{"github":"rajesh.github.io","linkedin":"rajesh.linkedin.com","twitter":"rajesh.twitter.com"},"work":{"company":"XYZ","position":"Software Engineer","experience":"2 years"},"achievements":{"achievement1":"Won a hackathon","achievement2":"Got a scholarship","achievement3":"Got a job"},"interests":{"interest1":"Reading","interest2":"Playing","interest3":"Coding"},"languages":{"language1":"English","language2":"Hindi","language3":"Punjabi"},"contact":{"phone":"1234567890","email":"rajesh.dev.com"}},{"name":"Subham","age":20,"address":{"city":"Delhi","state":"Delhi","country":"India"},"hobbies":["coding","reading","playing"],"skills":["html","css","js","nodejs"],"education":{"school":"Delhi Public School","college":"Delhi University","degree":"B.Tech"},"projects":{"project1":"Portfolio","project2":"Blog","project3":"E-commerce"},"social":{"github":"subham.github.io","linkedin":"subham.linkedin.com","twitter":"subham.twitter.com"},"work":{"company":"XYZ","position":"Software Engineer","experience":"2 years"},"achievements":{"achievement1":"Won a hackathon","achievement2":"Got a scholarship","achievement3":"Got a job"},"interests":{"interest1":"Reading","interest2":"Playing","interest3":"Coding"},"languages":{"language1":"English","language2":"Hindi","language3":"Punjabi"},"contact":{"phone":"1234567890","email":"subham.dev.com"}},{"name":"Rahul","age":20,"address":{"city":"Delhi","state":"Delhi","country":"India"},"hobbies":["coding","reading","playing"],"skills":["html","css","js","nodejs"],"education":{"school":"Delhi Public School","college":"Delhi University","degree":"B.Tech"},"projects":{"project1":"Portfolio","project2":"Blog","project3":"E-commerce"},"social":{"github":"rahul.github.io","linkedin":"rahul.linkedin.com","twitter":"rahul.twitter.com"},"work":{"company":"XYZ","position":"Software Engineer","experience":"2 years"},"achievements":{"achievement1":"Won a hackathon","achievement2":"Got a scholarship","achievement3":"Got a job"},"interests":{"interest1":"Reading","interest2":"Playing","interest3":"Coding"},"languages":{"language1":"English","language2":"Hindi","language3":"Punjabi"},"contact":{"phone":"1234567890","email":"rahul.dev.com"}}]
```



#### Status Code

If I send instead of 200, I send 404, it will show not found in the postman status code because there are lots of status codes are there. We use them according to our need.

Some of the status codes are:

- 200 - OK
- 201 - Created
- 204 - No Content
- 400 - Bad Request
- 401 - Unauthorized
- 403 - Forbidden
- 404 - Not Found
- 500 - Internal Server Error
- 503 - Service Unavailable


> You can check all the status codes [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

