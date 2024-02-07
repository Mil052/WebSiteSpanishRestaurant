# Restaurant Website

Training Project for Next.Js - Website of a restaurant with spanish food.

## App description

This is my training project. A website of a restaurant. Project is made in Next.Js(React framework). Routing is based on App Router and is separated on User part and Admin part.

### User

User part is about displaying all the information to the user visiting the website.
Website consists of four pages (home page, menu, events, contact).
On main page I created my own slideshow component and gallery component. 
On Contact page user has an oportunity to send a message through the contact form. To perform this action a used a Route Handler to create API Endpoint which use Nodemailer package and gmail SMTP. I also added google maps using @vis.gl/react-google-maps

### Admin

Admin panel is protected with login and password using Basic Auth (a method for an HTTP user agent (e.g. web browser) to provide a username and password when making a request.)  
Admin panel is used to manage Event Page content. Admin can add/edit/delete events. An API Endpoint (/api/events) is created using Route Handler. Events data and images added by user are stored localy in file system (images in './public/events' folder and data in './eventsData' folder in JSON format)

## Deployment
Becouse during build process Next.js uses slashes/backslashess creating paths, depending from the oprerating system (windows/linuks) it's running on, and my hosting run on linuks system, I had to run build proces in Docker container.  
Building Next.js application as 'standalone' also requires some files to be added manualy to final build folder. So there is prepared a script './build.sh' to do that for me.  
Also worth noting is fact that only assets that are in the public directory at build time will be served by Next.js, and image files of events are added dinamicaly after build, so I had to change image src path to another domain running on my hosting server which have access to file system and can serve this content instead of Next.js. (also necessary was adding .htaccess file for that domain to protect from unauthorized access to file system)

## How to run the code:

* Download the code and instal dependencies (in the project directory run: `npm install`)
* Run the app in the development mode (In the project directory run: `npm run dev`, then open http://localhost:3000 in the browser)  
<<<<<<< HEAD
You can also see the working app here: http://mgwebsites.eu  
(You can go to admin panel through the 'admin panel' link at the bottom of the footer, or directly http://mgwebsites.eu/admin login: admin, password: admin )
=======
You can also see the working app here: http://la-fabrica-del-gusto.seeuinweb.pl
(You can go to admin panel through the 'admin panel' link at the bottom of the footer, or directly http://la-fabrica-del-gusto.seeuinweb.pl/admin login: admin, password: admin )
>>>>>>> 0339122 (new hosting code change)
