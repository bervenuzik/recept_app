# Recept App

Recept App is a web application designed to help users discover and share recipes. The app features a variety of components that work together to provide a seamless user experience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [HomePage](#homepage)
  - [IngredientsTable](#ingredientstable)
  - [Label](#label)
  - [CategoryPage](#categorypage)
  - [DrinkCard](#drinkcard)
  - [DetailedDrink](#detaileddrink)
  - [Header](#header)
  - [ModalDetails](#modaldetails)
  - [RatingStars](#ratingstars)
- [License](#license)

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/recept_app.git

2.Navigate to the project directory:
cd recept_app

3.Install the dependencies:
npm install

4.Start the development server:
npm run dev

## Usage
Open your browser and navigate to http://localhost:3000 to see the app in action.

## Components

# App
The App component is the root component of the application. It sets up the routing and context providers.

File: src/App.jsx

# Layout
The Layout component defines the common layout for the application, including the header, footer, and main content area.

# Header
The Header component is the top navigation bar of the app. It includes a logo, a menu button, and a search bar.

File: src/components/Header/Header.jsx

# Footer
The Footer component is the bottom section of the app, containing links and other information.

File: src/components/Footer/Footer.jsx

# HomePage
The HomePage component is the main landing page of the app. It displays a grid of recipe cards and includes buttons for navigation. It also features a scroll-to-top arrow for easy navigation.

File: src/components/HomePage/HomePage.jsx

# CategoryPage
The CategoryPage component displays a list of recipe categories. Each category can be clicked to view the recipes within that category.

File: src/components/CategoryPage/CategoryPage.jsx

# RecipePage
The RecipePage component displays detailed information about a specific recipe.

File: src/components/RecipePage/RecipePage.jsx

# SearchResultsPage
The SearchResultsPage component displays the results of a search query.

File: src/components/SearchResults/SearchResults.jsx

# FavoritePage
The FavoritePage component displays a list of favorite recipes.

File: src/components/Favorite/FavoritePage/FavoritePage.jsx

# AboutUsPage
The AboutUsPage component displays information about the team behind the app.

File: src/components/AboutUsPage/AboutUsPage.jsx

# GDPRPage
The GDPRPage component displays information about GDPR compliance.

File: src/components/GDPRPage/GDPRPage.jsx

# Cookies
The Cookies component displays a cookie consent banner.

File: src/components/Cookies/Cookies.jsx

# AgeDialog
The AgeDialog component displays an age verification dialog.

File: src/components/AgeDialog/AgeDialog.jsx

# DrinkCard
The DrinkCard component displays a card with information about a drink. It includes a button to view more details and a favorite icon.

File: src/components/DrinkCard/DrinkCard.jsx  

# DetailedDrink
The DetailedDrink component displays detailed information about a drink, including ingredients, instructions, and comments. It also includes buttons for sharing and rating the drink.

File: src/components/DetailedDrink/DetaileDrink.jsx

# IngredientsTable
The IngredientsTable component displays a table of ingredients for a recipe. It includes columns for the ingredient name and amount.

File: src/components/IngredientsTable/IngredientsTable.jsx

# Label
The Label component is used to display an icon and text together. It is commonly used to label different sections of the app.

File: src/components/ModalDetails/Label/Label.jsx

# DrinkComments
The DrinkComments component displays comments for a drink. It includes a comment area for adding new comments and a list of existing comments.

File: src/components/DrinkComments/DrinkComments.jsx

# CommentArea
The CommentArea component provides a text area for users to add new comments.

# CommentsList
The CommentsList component displays a list of comments.

File: src/components/DrinkComments/CommentsList/CommentsList.jsx

# RatingStars
The RatingStars component allows users to rate a recipe or drink using a star rating system.

File: src/components/RatingStars/RatingStars.jsx

# ScrollToTopArrow
The ScrollToTopArrow component provides a button that scrolls the page to the top when clicked.

File: src/components/ScrollToTopArrow/ScrollToTopArrow.jsx

# ModalDetails
The ModalDetails component is used to display content in a modal dialog. It can be used to show detailed information about a recipe or drink.

File: src/components/ModalDetails/ModalDetails.jsx

# ButtonWithMessage
The ButtonWithMessage component displays a button with an icon and a message.

File: src/components/ButtonWithMessage/ButtonWithMessage.jsx

# CategoryButton
The CategoryButton component displays a button for a recipe category.

File: src/components/CategoryButton/CategoryButton.jsx

# Difficulty
The Difficulty component displays the difficulty level of a recipe.

File: src/components/Difficulty/Difficulty.jsx

# FavoritsHeart
The FavoritsHeart component displays a heart icon that can be clicked to add or remove a recipe from the favorites list.

File: src/components/Favorite/FavoriteHeart/FavoritsHeart.jsx

# CheckList
The CheckList component displays a checklist of instructions for a recipe.

File: src/components/Instructions/CheckList.jsx

# SearchBar
The SearchBar component provides a search input for users to search for recipes.

File: src/components/SearchBar/SearchBar.jsx

# DrawerRight
The DrawerRight component displays a drawer that slides in from the right side of the screen.

File: src/components/DrawerRight/DrawerRight.jsx

# MenuItems
The MenuItems component displays a list of menu items for navigation.

File: src/components/MenuItems/MenuItems.jsx


## License
This project is licensed under the MIT License. See the LICENSE file for details.

