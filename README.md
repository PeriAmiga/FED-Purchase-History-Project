<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<h1>FED-Purchase-History-Project</h1>

<h2>Overview</h2>
<p>The FED-Purchase-History-Project is a web application designed to manage all your purchases. It allows users to add new items, view existing items, filter items by month and year, save data locally, and clear stored data.</p>
<p>Link to the web: <a href="https://fed-finalproject.netlify.app/">FED-Purchase-History-Project</a></p>
<img src="https://user-images.githubusercontent.com/107958370/232275317-e15a6ad1-ab25-4958-8425-9e8ee1df270b.png" alt="Project Screenshot" width="500">

<h2>Technologies Used</h2>
<ul>
	<li>HTML: Used for structuring the web page.</li>
	<li>CSS: Used for styling the web page elements.</li>
	<li>JavaScript: Used for client-side scripting and interactivity.</li>
	<li>localStorage: Used to store data locally within the user's browser.</li>
	<li>Date Object: Utilized to handle and manipulate dates for filtering items.</li>
</ul>

<h2>Algorithms</h2>
<ul>
	<li>Filtering Algorithm: Implements a filter function to display items based on the selected month and year.</li>
	<li>Data Rendering Algorithm: Dynamically renders the items table based on the data stored in the local storage.</li>
</ul>

<h2>Usage</h2>
<ol>
	<li>Add New Item:
		<ul>
			<li>Enter the date, description, price, and category of the new item.</li>
			<li>Click the "Add" button to add the item to the list.</li>
		</ul>
	</li>
	<li>Clear Form:
		<ul>
			<li>Click the "Clear" button to reset the form and clear all input fields.</li>
		</ul>
	</li>
	<li>Filter Items:
		<ul>
			<li>Enter the month and year to filter items by them.</li>
			<li>Click the "Filter" button to display items matching the specified month and year.</li>
			<li>Click the "Clear Filter" button to cancel the filter and display the full list of items.</li>
		</ul>
	</li>
	<li>Save Data:
		<ul>
			<li>Click the "Save" button to store all items data locally using the browser's localStorage.</li>
		</ul>
	</li>
	<li>Clear Data:
		<ul>
			<li>Click the "Reset" button to clear all stored data from the localStorage.</li>
		</ul>
	</li>
</ol>

<h2>Project Structure</h2>
<ul>
	<li>index.html: HTML file containing the structure of the web page.</li>
	<li>style.css: CSS file for styling the elements of the web page.</li>
	<li>script.js: JavaScript file containing client-side scripting logic and functionalities.</li>
</ul>

<h2>Additional Notes</h2>
<ul>
	<li>This project is designed as a front-end application and does not require any server-side processing.</li>
	<li>Ensure proper validation is implemented to handle user inputs and prevent errors.</li>
	<li>The application can be extended with additional features such as editing and deleting items, user authentication, and data export options.</li>
</ul>
</body>
</html>