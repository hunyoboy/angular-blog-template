# Angular Responsive Blog Template

A template or starter kit to build your responsive blog in AngularJs/Bootstrap with slideout menu on mobile. See it in action here, http://joecaps.com/blog/demo/angular-blog-template/

##Requirement

Bower is used as the tool to manage dependencies and must be installed on your system. For download instructions for your 
platform, see https://bower.io/.


## Running On Node Server

Before you begin, Node.js, NPM, and Bower must be installed on your system. For download instructions for your 
platform, see http://nodejs.org/download/.

Get all required NPM modules. **From the root of the folder**, execute the following command on your terminal:

`bower install`

`npm install`

This downloads all dependencies.

Execute the following commands from the root of the repository:

```sh
    node server.js
```

Open a browser and go to http://localhost:8880


## Running On Apache Server On Root Directory 

Copy the folder's content inside the root of your Apache site.

Inside the source directory root, execute the command on your terminal to download dependencies:

`bower install`

Start Apache server and open http://{server_name} on your browser.

Ex. http://localhost



## Running On Apache Server On A Subfolder Directory Under Root

Copy the folder's content inside the subfolder.

Inside the source directory root, execute the command on your terminal to download dependencies:

`bower install`

Ex. Assuming the subfolder name is "site" and you're accessing it thru http://localhost/site/

1. Open the file "index.html" and find the "base" tag (<base href="/" >). Change it's href value
   to be href="/site/" or depending upon your subfolder name.


2. Open the file "config.js" and change the value of "BASE_HREF" to be equal to "/site" or depending on your subfolder name.
   Take note that it doesn't end with a slash.


3. You can now access the application, http://localhost/site/

