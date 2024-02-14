// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://youtube138.p.rapidapi.com/auto-complete/',
//   params: {
//     q: 'desp',
//     hl: 'en',
//     gl: 'US'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'f55c058cd1msh7b76b087fb8da80p146c3cjsn54b56fb963fe',
//     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }




// import React, { useState } from 'react';

// function SearchBar() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you can perform search operations using the searchTerm
//     // For demonstration, let's say we are just filtering an array of items
//     const filteredResults = items.filter(item =>
//       item.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(filteredResults);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {searchResults.map((result, index) => (
//           <li key={index}>{result}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // Dummy array of items for demonstration
// const items = [
//   'Apple',
//   'Banana',
//   'Orange',
//   'Strawberry',
//   'Pineapple',
//   'Grapes',
// ];

// export default SearchBar;






// import React, { useState } from 'react';

// function App() {
//   const [searchInput, setSearchInput] = useState('');
//   const [comments, setComments] = useState([]);

//   const handleChange = (event) => {
//     setSearchInput(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (searchInput.trim() !== '') {
//       setComments([...comments, searchInput]);
//       setSearchInput('');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={searchInput}
//           onChange={handleChange}
//           placeholder="Type your comment here..."
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         <h2>Comments</h2>
//         <ul>

//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;



<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Search and Store Comments</title>
</head>
<body>
  <input type="text" id="searchInput" placeholder="Enter your comment">
  <button id="submitButton">Submit</button>
  <div id="commentsContainer"></div>

  <script>
    // Get references to the input field, submit button, and comments container
    const searchInput = document.getElementById('searchInput');
    const submitButton = document.getElementById('submitButton');
    const commentsContainer = document.getElementById('commentsContainer');

    // Define an event listener for the submit button
    submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default form submission behavior

      const commentText = searchInput.value.trim(); // Get the comment text and remove leading/trailing spaces

      if (commentText !== '') { // Check if the comment is not empty
        const commentElement = document.createElement('p'); // Create a new paragraph element
        commentElement.textContent = commentText; // Set the text content of the paragraph to the comment text

        commentsContainer.appendChild(commentElement); // Append the paragraph to the comments container

        searchInput.value = ''; // Clear the input field after submitting the comment
      }
    });
  </script>
</body>
</html>
