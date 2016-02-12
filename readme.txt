Stock APP

Author: Alberto Martin

This is a CRUD application to control the stock of a Shop. You can add, delete, modify and read items on it.

1-Project Structure:
	
	Parent
		-src
			-js
				-app-controllers.js
				-app-factories.js
				-app.js
				-tests
					-unit.tests.js
			-css
				-styles.css
		-node_modules
		-build

2- How to run it:
	1- npm install - Will Install all the dependencies from package.json
	2- npm start - Will run Gulp, creating build folder ready to use.


3- How to use it:
	1- On the left you will see three input fields, Name, Code, and Quantity.
	2- If you click add the object will be pushed to the list on the right, only if the three fields are present.
	3- You can modify an item from the list by writting its code on the list and changing the values. Instead of adding a new
		item, it will modify it.

4- How to test it:
	1- npm test - Will run Jasmine / Karma tests on Chrome displaying the results on the console.

	For the tests I decided to test the core functionality of the application so it doesn't break.
	With the tests we are able to test that the Factory adds, modify and delete items correctly and the content remains consistent.

5- About Gulp (gulpfile.js)
	Tasks we are covering with Gulp:
		1- HTML Minifying
		2- CSS Minifying
		3- JS Minifying and Concat.
		4- JShints

6 Other Considerations:
	- Since I had to create a CRUD application, I decided that an application to manage stocks would be good.
	- The reason to split the JS files in controller, factory and config is because as the application scales is better to have factories, config and controllers separated one from each other, easier to spot them. In the build process we can combine all of them together at the end.