## The Odyssey
---
#### _Javascript practice, homework as assigned by Epicodus, 3/6/19_

#### Slater Smith

### Description

A simple Javascript application to practice creating animations in javascript. This project shows the text of the ancient classic epic "The Odyssey", which will animate when the user interacts with their web browser. For best performance, scroll down page slowly using your Chrom browser.

#### Program behavior specifications:
| Behavior | Input | Output |
| --------------------------- | ------------------- | ------------------- |
| Page will animate when user scrolls down | User initializes application, and scrolls down the page after it loads | Text fades in with custom animation |
| Page will change to greek text when greek button is pressed| Clicks button with greek text | Page shows ancient Greek version of The Odyssey's text |


### Technologies and Resources

* Javascript
* WOW.js
* Webpack
* sass
* npm

### Setup Instructions

If you would like to skip cloning this project up on your local machine, visit https://slaterjamessmith.github.io/odyssey/

1. Clone this repository at https://github.com/SlaterJamesSmith/odyssey
2. Use a terminal of your choice to access the webpage and its files by inputting: "git clone {the above clone link}"
3. If homebrew is not yet installed on your Mac, install it by running the following command in your terminal: "$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
4. If you are not using a Mac, and homebrew is not yet installed, go to the node website and follow appropriate installer for your operating system at https://nodejs.org/en/download/
5. In terminal, enter "$ npm i" to install node package manager
6. In terminal, navigate into project by entering enter "$ cd odyssey"
7. Next, in terminal enter "$ npm run start"
9. The application should automatically open in your default web browser under the url "localhost:8080"
10. Use Chrome for best results


### Bugs & Roadmap
This application was built for ongoing practice. Issues that need to be fixed are as follows
* On initialization, text should fade in, but it currently flashes on the page for a moment before disappearing and then animating. This needs to be fixed
* Animation is currently very laggy. This will need to be fixed for the application to be usable.

### License

*This software is licensed under the MIT license*
Copyright (c) 2019 **_Slater Smith_**
