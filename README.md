# 📖 Table of Contents

- About the Project
- Features
- Getting Started
	 - Pre-requisites
	- Get API Key
	- Installation Instructions
- App Preview
	- Video Preview
	- Register Screen
	- Login Screen
	- Home Screen
	- Search Screen
	- Details Screen
	- Favorites Screen
	- Watchlist Screen
	- User Menu Screen
	- My Profile Screen
	- About Screen

- Tech Stack
- Folder Structure
- What's Included
- Known Bugs
- Contribution
- License Information
- Credit and Acknowledgement
- Future Updates

# :popcorn:PopcornTime 

  ![tv](https://user-images.githubusercontent.com/99785438/162727728-649748d6-cf8a-437f-a9de-f545c9d59c70.png)


**PopcornTime** is a free, cross-platform mobile application for Android and iOS which can be used to discover, manage, organize and share movies that users enjoy. Built as a training project to learn React Native, it is intended for non-commercial use only.

It provide a user-friendly, intuitive interface to its users to manage their catalog of movies. A user can start by registering for a profile or an account in the app. It provides a seamless experience in terms of application usage to browse through the list of movies sorted by popularity and view details about the movie such as the plot summary, runtime and release year of the movie. A user can organize the movies into Favorites and Watchlist. It also allows the users to view similar titles below for the movie that they are interested in.

# :fallen_leaf:Features
  
 -  **Create Account:** The user will create an account and log in to the account.
 -  **Search Title:** The user will use the search bar to search for any movie or tv show.
 -  **View Details:** The user will be able to view details for the title such as plot summary, cast members, number of seasons, and episodes.
 -  **Add to Lists:** The user can add a title to a list to watch later or mark it as a favorite.
 -  **View Recommendations:** The user will be shown recommended titles for a selected title.

# Getting Started
  
### Pre-requisites
The app is developed and tested for Android 11 or iOS 15 and higher versions of the mobile Operating Systems.

### Installation Instructions
1.  Install the latest Node
2.  Install  [Expo](https://expo.io/)  -  `npm install expo-cli --global`
3.  Clone the repo 
	```
	git clone https://github.com/rinku-s/popcorntime-android
	```
4.  `cd`  into this project directory
5.  Install the dependencies by running `npm install`  or  `yarn install`
6.  Run  `expo start`

### Get API Key from TMDB
TMDB has more than 700,000 movies in its database. to access movies data for free, create an account on TMDB to [generate a unique API key](https://developers.themoviedb.org/3/getting-started/authentication). It is free to use provided it is **cited** as the source when used.

  
# App Preview
 ## Video Preview
 ## Register Screen
 ## Login Screen
 ## Home Screen
 ## Search Screen
 ## Details Screen
 ## Favorites Screen
 
 ## Watchlist
 ## User Menu Screen
 ## My Profile Screen
 ## About Screen
  
# App Architecture
The overall architecture of PopcornTime is based on the [Container and Presentational Pattern.](https://www.google.ca/books/edition/React_Design_Patterns_and_Best_Practices/kc6PDwAAQBAJ?hl=en&gbpv=1&dq=react%20container%20and%20presentational&pg=PA95&printsec=frontcover) It splits the code according into two parts - 
1. **Container:** the logic layer of the application
2. **Presentation:** the view layer of the application

The **container component** is concerned with how the application works such as any data processing, logic, API calls, state management, etc. 

The **presentational component** is stateless and contains the layout of the UI which displays the data passed to it via props.

Each screen in PopcornTime has two files associated with it - the .js file is under *presentation* folder which contains the code for the layout of the screen, and the second .js file is under *screens* folder which is the container component of the screen. A third file which may be associated with any screen is under the *styles* folder which contains the design of the layout of the application.

This pattern was selected as it provides an easy to understand code structure which follows Separation of Concerns principle. The layout can be easily modified without touching the logic of the application and vice versa. Further, it increases code reusability as the same presentational component can be used to display data from different sources.
# Folder Structure
The folder structure in React Native with a list of all files is mentioned below:
```
code
.
C:.
│   .gitignore
│   App.js
│   app.json
│   babel.config.js
│   package.json
│   README.md
│
├───assets
│       adaptive-icon.png
│       app-icon.png
│       favicon.png
│       heart-icon.png
│       icon.png
│       like-icon.png
│       popcorn-icon.png
│       search-icon.png
│       snack-icon.png
│       splash.png
│       user-icon.png
│       watchlist-icon.png
│
├───helpers
│       Colors.js
│
├───presentation
│       AboutUI.js
│       AppIconUI.js
│       DetailsUI.js
│       FavoritesUI.js
│       HomeUI.js
│       LoginScreenUI.js
│       ProfileIconUI.js
│       RegisterUI.js
│       SearchUI.js
│       UserDetailsUI.js
│       UserProfileUI.js
│       WatchlistUI.js
│
├───screens
│       About.js
│       Details.js
│       FavoritesList.js
│       Home.js
│       LoginScreen.js
│       RegisterScreen.js
│       SearchScreen.js
│       UserDetails.js
│       UserProfile.js
│       Watchlist.js
│
└───styles
        DetailsStyle.js
        HomeStyle.js
        ListStyle.js
        LoginStyle.js
        MenuStyle.js
        SearchScreenStyle.js
```


# Known Bugs
![enter image description here](https://img.shields.io/badge/bugs-OPEN-red)

1. **Search bar size issue on Android**
 The search bar on Home screen shrinks when the keyboard comes up on the screen. This is due to the flex layout of the Home screen. This issue was resolved by wrapping the entire layout in  [keyboard-aware-scrollview](https://www.npmjs.com/package/react-native-keyboard-aware-scrollview). However, using this package on the Home screen adversely affected the performance of the application resulting a significant slowdown in loading poster images of movies which are displayed on the Home screen by fetching them through network calls. Therefore, this fix was rolled back and the issue is open until it can be resolved without any side-effects.
 2. **Search does not work on iOS**
The search bar does not work on iOS. The root cause of the issue is unknown. Due to unavailability of Apple devices, it has been tested only once on iOS and the issue has not been fixed yet.
|Version|Issue|Status|
|0.1|Search bar size issue on Android|Open|
|0.1|Search does not work on iOS|Open|
# Future Updates
![enter image description here](https://img.shields.io/badge/features-OPEN-orange)
Features not implemented in current version (v0.1) but planned for later versions due to time constraints - 

 - **Create Multiple Lists**: A user can create their own custom lists.
 - **Share Lists:** A user can collaborate with friends on lists to make plans together.
## Tech Stack
The tech stack used for implementation of PopcornTime is described briefly in the following section:
|Technology|Description|
|--|--|
|[React Native](https://reactnative.dev/)|React Native is an open-source, cross-platform software framework that can be used to develop apps that work on desktop, web and mobile using a single codebase. It is used to develop the frontend of PopcornTime.|
|[Expo](https://expo.dev/)| Expo is an open-source framework for React applications which is used to build PopcornTime.
|[Django REST Framework](https://www.django-rest-framework.org/)|Django REST is a framework written in Python Django for building Web APIs to fetch data about movies and users from the database.|
|[PostgreSQL](https://www.postgresql.org/)| Postgres is a free, open-source relational database that is used to store all the data of PopcornTime.
|[Pandas](https://pandas.pydata.org/)| Pandas is an open-source data manipulation and analysis tool written in Python which is extensively used in pre-processing and cleaning the data fetched from TMDB API to be stored in the database and also in writing the algorithm for generating recommendations for movies.
  # Contribution
This application was developed as a final project for the graduate course *CS 855 Mobile Computing* at **University of Regina**.

👩  **Rinku Ansari**
  
Email: [raf122@uregina.ca](mailto:divya.bhagavathiappanshiva@mail.concordia.ca) 

GitHub: [@rinku-s](https://github.com/rinku-s)

# License Information
This software is freely distributable under the MIT License. Please see License.md for more information.


#  📜 Credits and Acknowledgement
The following open-source packages were used in development of PopcornTime:

 - [@react-navigation/native](https://www.npmjs.com/package/@react-navigation/native)
 - [@react-navigation/stack](https://www.npmjs.com/package/@react-navigation/native)
 - [@react-native-async-storage/async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage)
 - [@react-native-community/datetimepicker](https://www.npmjs.com/package/@react-native-community/datetimepicker)
 - [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context)
 - [react-native-keyboard-aware-scroll-view](https://www.npmjs.com/package/react-native-keyboard-aware-scroll-view) 
### Other
 > [Flaticon](flaticon.com) - Images & icons used in PopcornTime.

> [shields](https://shields.io/) - Badges in README file.

> [emojis cheatsheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md) - Emojis used in README file.
# :bookmark_tabs:Further Reading

 - [About Presentation and Container Pattern](https://blog.bitsrc.io/implementing-the-container-pattern-using-react-hooks-f490a8492d05).
 - [About creating REST APIs using Django REST Framework](https://stackabuse.com/creating-a-rest-api-with-django-rest-framework/).
 - [About recommendation algorithms](https://towardsdatascience.com/brief-on-recommender-systems-b86a1068a4dd.).







![logoutGif](https://user-images.githubusercontent.com/99785438/162812854-02a18e33-bab6-4689-9b2c-4b012e04e214.gif)




