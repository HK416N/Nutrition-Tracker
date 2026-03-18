## Description
This Nutrition Tracker is a web application that helps users `monitor calorie` and `macronutrient` intake. The application provides an intuitive dashboard where users can search for foods, log and track their intake throughout the day.
Users are able to search for food items from a search bar. Once selected, details such as the name of the food, calories and macronutrients are displayed for confirmation. 
Once confirmed, the entry appears in a daily log representing the user’s daily intake. The application uses this list to track meals, calculate total calories consumed, macronutrient breakdown and provides a comparison to a user-defined calorie goal providing users with immediate feedback on their progress. 
Users are also able to `Delete` entries from their daily log, allowing them to correct erroneous entries.
The application integrates with the Open Food Facts API to Read and display nutritional data. The data is also used to `Create` backend data which is managed on Airtable. Through the integration with the `Open Food Facts API` and `Airtable`, the application is able to perform `CRUD` operations. (specifically `Create`, `Read` and `Delete`)
The Nutrition tracker is built to demonstrate key web development concepts such as `API integration`, `client-side data management`, and `interactive user interfaces`.

## User Stories
### Searching for Food and Viewing Nutritional Data
As a user :
- I want to enter the name of a food into a `search bar` to find food items so I can track nutritional information.
- I want to see a `list of food results` after searching so that I can choose the correct food item.
- I want to see a detailed breakdown of `nutritional data` (calories, protein, carbs, fats and caffeine(optional)) for each food item.
### Adding Food to a List/Tracker
As a user :
- I want to add a selected food item to a `tracker` to track my daily progress.
- I want the tracked foods to show up in a `list` so I can review my logged foods.
### Viewing Tracked Foods
As a user:
- I want to be able to click each listed food item and see the nutritional value so I can easily compare them.
### Deleting Tracked Food Entries
As a user:
- I want to `delete` a food entry from my tracker so that I can remove mistakenly added foods.
### Navigation
As a user:
- I want to `navigate` between the search and tracker page using simple navigation links so that I can easily move through the app.
- I want the navigation to `always be visible` so that I can quickly navigate to different pages within the app.
### Editing Tracked Foods Entries (Stretch Goal)
As a user:
- I want a form to `edit` food entries to correct any incorrect nutritional values, food names or portion sizes.
- I want the edit form to be `pre-filled` with the current food’s information so that I can easily and quickly modify the entry

## Positive User Stories
### Searching for Food and Viewing Nutritional Data
As a user :
- I want to enter the name of a food into a search bar to find food items so I can track nutritional information.
- I want to see a list of food results after searching so that I can choose the correct food item.
- I want to see a detailed breakdown of nutritional data (calories, protein, carbs, fats and caffeine(optional)) for each food item.
### Adding Food to a List/Tracker
As a user :
- I want to add a selected food item to a list/tracker to track my daily progress.
- I want the tracked foods to show up in a list so I can review my logged foods.
### Viewing Tracked Foods
As a user:
- I want to be able to click each listed food item and see the nutritional value so I can easily compare them.
### Deleting Tracked Food Entries
As a user:
- I want to delete a food entry from my tracker so that I can remove mistakenly added foods.
### Navigation
As a user:
- I want to navigate between the search and tracker page using simple navigation links so that I can easily move through the app.
- I want the navigation to always be visible so that I can quickly navigate to different pages within the app.
### Editing Tracked Foods Entries (STRETCH)
As a user:
- I want a form to edit food entries to correct any incorrect nutritional values, food names or portion sizes.
- I want the edit form to be pre-filled with the current food’s information so that I can easily and quickly modify the entry

## Negative User Stories
As a user:
- I want to see a message when no food matches are found
- I want to see an error message if the app fails to fetch data
- I should not be able to click the search button if the input field is empty
- I want the application to show a loading indicator while data is being fetched from the API
