# _GitHub Search_

#### _Using a GitHub API this app allows the user to search GitHub by username._

#### By _**Brianna Popson**_

## Description

_The purpose of this app is to allow the user to search GitHub. A viable search of a username will return that user's avatar picture, their name, location if it's there, and the dates of when this specific user created their GitHub account and the last time they updated anything in their repository. In addition the app will return a column of the searched user's public repositories in alphabeticall order. At this time it will return only the first 30 repositories but in the searceed user's profile a link to their GitHub profile is available._

## Setup/Installation Requirements

* _Clone this repository_
* _Open a shell (terminal on mac) and navigate to the top level of the project directory._
* _Open the folder in a text editor like Atom to view the code_
* _Then run `npm install` and `bower install`. All appropriate files will be installed based on JSON files saved in the code._
* _While still in the top level of the project folder, type "guilp buildAll" followed by "gulp serve". This will open the page up in whatever internet brower you were using last._
* _Secure a GitHub API key (or in this cas an Access Token) by going to your GitHub profile's settings page._
* _You can generate your key by navigating to the Personal Access Token section._
* _Leave all checkboxes for the key generation blank._
* _Insert your Personal Access Token into the "Placeholder" in the .env file._
* _IMPORTANT: When pushing your commits back to the repository, make sure to have added .env to the .gitignore_

## Known Bugs
_Sometimes building the data seems to take one or more tries. If the browser loads and there's no styling on the page, please cancel the server using ctrl + c and run the "buildAll" command again, then run "gulp serve"._

## Technologies Used

_This app was built in Javascript using Node.js, Bower, Gulp, and Sass_

### License

*MIT License*

Copyright (c) 2016 **_Brianna Popson_**
