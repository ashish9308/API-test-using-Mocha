# API-test-using-Mocha
A very basic but very useful example. This example will show you how to write a sample unit test using mocha and generate a report of the test using mochawesome.


# Features
* Written in JavaScript
* Hits the Galactic endpoints from the outside world
* Assertions on the JSON response
* Quick and efficent
* Easy to write new tests
* Generate cool report using mochawsome

# Sample Report

![picture alt](https://github.com/ashish9308/API-test-using-Mocha/blob/master/report.JPG)

# Installation

1) Install node.js, by either crack open your favourite package manager: typically apt-get install nodejs on Debian/Ubuntu Linux, brew install node on a Mac or directly from the website http://nodejs.org

2) Clone the repository from github:
>$ git clone https://github.com/ashish9308/API-test-using-Mocha.git

3) CD into the repository 
>$ cd API-test-using-Mocha

4) Install all the dependencies by:
>$ npm install

5) Fire up Mocha to run the tests!
>$ mocha

6) Fire up Mocha with reporter mochawesome to run the tests and generate reports!
>$ mocha test.js --reporter mochawesome

7) Want to know more about mochawsome reporter please go to this link
>https://github.com/adamgruber/mochawesome



