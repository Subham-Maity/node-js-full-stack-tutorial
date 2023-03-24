## [Check Here](http://codexam.vercel.app/docs/node/node9) For Challenge


**********

 
 ## What is gitignore file?




 node_modules is very large folder and if you try to push it to github it will take a lot of time and it will also increase the size of your repository. So, we need to ignore this folder because we can install all the dependencies again using npm install command. So, we need to create a file named .gitignore and add node_modules in it. Now, when you push your code to github, it will ignore node_modules folder.

 ```bash filename=".gitignore"

 /node_modules

 ```

  