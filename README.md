# README #
Twitter Example

## How do I get set up? ##

### Install Node Server
```
running v6.11.1
```
#### Clone Repository
```
git clone https://github.com/richhuth/twitter.git
```
### npm install
```
npm install
```
### Run project
```
npm start
```

### users.js

By looking at the user.txt, not all users had followers. So in order to create a list of users I have to retrieve all the inital users and their followers. This created an array of users which I then removed all the duplicates to create a unique list of users. My assumption here was that each username was unique. 

### follower.js

This created a map of followers from the user.txt file. I thought it would be best to keep this list as as separate data set.

### tweets.js

This created a map of the users tweets which we are able to search through

### app.js

This is the main function file where I gathered all the data I needed and rendered the output to console as per assignment request.

###Comments

From the data that was provided, I thought the best approach would be to get the data into a readable arrays. Once that was achieved I was able to create the functions to display the data as per example.
From the error checking side of things, I would would make sure that the data goes in correctly from the front end side of things.
The current error handling is on the tweets themselves but this would create promise block. So another approach would be not to show those tweets but again this should come from a data input side of things.