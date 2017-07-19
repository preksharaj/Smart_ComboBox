#Task 
A smart selection combo box,  wherein user selectable possible options get filtered by the user input values. 

#To Run
Download the entire package and run from the root directory.
$python serve.py

This will run the scirpt and load a HTML page on Localhost:3333.
Open the borwser and type the URL: http://localhost:3333/
to view the page.

#Explanation
When you open the page, index.html gets rendered which in turn renders app.css and app.js for all the functionality.
The package has an Angular module that contains directive for creating combobox with custom search form control. 

In the first input field, Type one of the seven continent and it has a dropdown of other continents that matches the typed text in the input field as a drop down. You can select one of the continents by clickinng on them.This sets the value of the Continent.

It is followed by a dependent combobox chain: Based on the Continent selected the second input field lets you select a Country corresponding to the above selected Continent.You can select one of the Countries by clickinng on them.This sets the value of the Country.
This text field is also a smart selection combo box with the list of Countries filters for the first selected Continent.

All the options for the Continent and Countries are fetched from json files so as to Mimic that the possible options are fetched from a backend service.

# Smart_Selection_Combobox
