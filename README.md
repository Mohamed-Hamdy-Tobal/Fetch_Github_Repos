# Fetch GitHub Repos with Fetch APIs

This project is a simple web application that allows users to fetch GitHub repositories using the Fetch API. It provides a user interface where you can enter a GitHub username, and upon clicking the "Get Repos" button, it retrieves and displays the repositories associated with that user.

## Usage

1. Enter the GitHub username of the user whose repositories you want to fetch in the input field labeled "Github Username."
2. Click the "Get Repos" button.
3. The application will retrieve the repositories from GitHub's API and display them in a list.
4. Each repository is shown with its name, a link to visit the repository on GitHub, and the number of stars it has received.

## Technologies Used

This application utilizes the following technologies:

- HTML: Provides the structure and layout of the web page.
- CSS: Styles the HTML elements to create an appealing user interface.
- JavaScript: Implements the functionality to fetch repositories from the GitHub API and dynamically update the DOM.

## How It Works

1. The application retrieves the input value from the "Github Username" field and stores it in a variable.
2. Upon clicking the "Get Repos" button, a function is triggered to fetch the repositories using the Fetch API.
3. The Fetch API sends a request to the GitHub API endpoint, passing the entered GitHub username as a parameter.
4. The response from the GitHub API is received and converted to JSON format.
5. The JSON data is processed, and for each repository, a new HTML element is created dynamically.
6. The repository name, a link to visit the repository, and the number of stars are added to the HTML element.
7. The HTML element is appended to the DOM, displaying the repository information on the web page.
8. If there are no repositories or an error occurs during the process, an appropriate message is displayed.

## Limitations and Future Improvements

- Currently, the application only displays the repository name, a link to visit the repository, and the number of stars. Additional information about each repository could be included, such as the description, language, or last updated date.
- Error handling could be improved to provide more specific error messages or handle different types of errors.
- User authentication could be implemented to access private repositories.
- The application's design and layout could be enhanced to provide a more visually appealing user interface.


## Conclusion

The "Fetch GitHub Repos with Fetch APIs" project provides a straightforward way to fetch and display GitHub repositories using the Fetch API. It demonstrates how to interact with a web API and dynamically update the DOM based on the retrieved data. With further enhancements, this project could serve as a foundation for more advanced GitHub-related applications or be integrated into larger web development projects.

