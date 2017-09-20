# Setting up the Development Environment

The development environment builds `ias-icons.css` and the associated icon font files. It also serves
a documentation application showing all the icon fonts.

1. Clone the repository and install packages via NPM

       git clone git@github.com:microfocus/ias-icons.git
       cd ias-icons
       npm install -g gulp-cli
       npm install

2. In a terminal window:

       ~/ias-icons# gulp
       
   This will build ias-icons, serve the documentation application, and watch all files for changes.
   
3. Navigate to localhost:8083 to view the documentation application.

## Gulp

This project uses [Gulp](https://gulpjs.com/) to build the project, watch the source for changes, and start
a local server which hosts the application.
