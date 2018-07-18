# cat-clicker-premium
Premium version of the cat clicker project, utilizing the MVO pattern.

See the live project here: [Cat Clicker Premium](https://clockwerkz.github.io/cat-clicker-premium/)


## MVO
The basis of this assignment was to refactor the previous [Cat Clicker project](https://github.com/clockwerkz/cat-clicker) to using the Model View Octopus Pattern. 

### Model
The Model object is an array of cat objects, that each contain the properties name, img, altText, clickCount, and selected. Selected is used to highlight the currently selected Cat on the list view object.

### View(s)
Following the course's suggestion, I created two separate View objects: A List View and a Cat View object. The list view handles the displaying of the ul list of cats on the aside section to the left. The Cat view handles displaying the currently selected Cat in the main section.

### Octopus
The Octopus object handles calling the list view render when the page first opens (init). It also handles any clicks on the list view, updating the current cat selection to the new clicked cat name, and calling the render for both views with the updated cat. Any clicks on the displayed cat is also handled by the Octopus, incrementing the selectedCat and re-rendering the cat view.