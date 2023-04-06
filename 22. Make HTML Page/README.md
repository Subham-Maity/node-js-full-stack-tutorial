
## ⭐ Make Html Pages

<p align="center">
                <img style={{ position: "relative" ,opacity: 1 ,borderRadius: "10px" ,overflow: "hidden" , marginTop:"20px" , marginBottom: "20px"}}
                src="https://media.giphy.com/media/ylyUQmwRhTyxiD5CFO/giphy.gif"
               />
            </p>

### ❗ HTML Setup
1. First Make a Folder name "public" in your project folder.
2. Inside the public folder make a file name "about.html" and write some html code.
> You can write very basic html code or you can just simply copy the code from the below.
```js
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Neon Dark Theme HTML Page</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
        <header>
          <div class="container">
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <section class="boxed">
            <h2>Section 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              malesuada justo in risus bibendum aliquet.
            </p>
          </section>

          <section class="boxed">
            <h2>Section 2</h2>
            <p>
              Vivamus ac lacinia quam, vitae eleifend velit. Integer sit amet libero
              sit amet risus tristique mollis sed quis ipsum.
            </p>
          </section>

          <section class="boxed">
            <h2>Section 3</h2>
            <p>
              Donec feugiat dolor id sapien interdum, a ullamcorper nisl malesuada.
              Etiam nec feugiat leo.
            </p>
          </section>
        </main>

        <footer>
          <p>&copy; 2023 My Website</p>
        </footer>
      </body>
    </html>
```

3. Now if you want you can make a css file name "styles.css" and write some css code.

```css
/* Body styles */
body {
  background-color: #181818;
  color: #fff;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  margin: 0;
  padding: 0;
}

/* Header styles */
header {
  background-color: #181818;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  z-index: 999;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav li {
  margin: 0 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

/* Main styles */
main {
  padding: 80px 0;
}

section {
  margin: 0 auto;
  max-width: 960px;
  padding: 40px;
  margin-bottom: 40px;
}

section h2 {
  font-size: 36px;
  margin: 0;
  margin-bottom: 20px;
}

section p {
  margin: 0;
}

.boxed {
  background-color: #222;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

/* Footer styles */
footer {
  background-color: #181818;
  color: #fff;
  padding: 20px;
  text-align: center;
}

/* Neon color theme */
a {
  color: #fff;
  text-decoration: none;
}

section h2,
nav a:hover {
  color: #00ffea;
  text-shadow: 0 0 10px #00ffea;
}

.boxed:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 255, 234, 0.3);
}

footer p {
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  nav ul {
    flex-direction: column;
  }
  nav li {
    margin: 10px 0;
  }

  .container {
    padding: 0 20px;
  }

  main {
    padding: 20px 0;
  }

  section {
    padding: 20px;
  }

  section h2 {
    font-size: 24px;
  }
}
```
> It's not necessary to make a css file. You can write css code in the html file itself or you can simply skip this step.

### ❗ Node.js Setup

1. First inside open your `index.js` file and write the following code.

```js
const express = require('express');
const app = express();

app.listen(5000);
```
> This will call the express module and create a server on port 5000.

2. Now we want the path of the project folder so we will use __dirname. So write the following code.

```js
const express = require('express');
const app = express();
// import path module
const path = require('path');

// set the path of the project folder
//join the path of the project folder with the public folder
const publicPath = path.join(__dirname, 'public');

app.listen(5000);
```
> __dirname is a global variable that gives the path of the project folder.
> Join method joins the path of the project folder with the public folder.
> If you want you can check the path by console logging it `console.log(publicPath);`

3. Now we will use the express static middleware to serve the static files. So write the following code.

```js
const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, 'public');

// use the express static middleware to serve the static files
app.use(express.static(publicPath));

app.listen(5000);
```
> Here use method is used to use the express static middleware means if you have any static files like html, css, js, images, etc. then you can use this middleware to serve the static files to the browser.
> Use method takes the path of the public folder as an argument It is the function of the express module.
> this app is coming from the express module because we have called the express module in the first line and stored it in the app variable.

4. Now open you browser and type `http://localhost:5000/about.html` and you will see the about page.

![image](https://user-images.githubusercontent.com/97989643/230273348-9421e54b-9921-4f74-98b6-b4145c4947a9.png)

> If you want to add more pages then you can simply add more html files in the public folder and you can access them by typing `http://localhost:5000/nameofthefile.html`





