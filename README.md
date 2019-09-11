# Commute Tracker

A browser based app that helps people track commutes to help improve how they get
around. The app allows a user to register, login, log and save commutes, retreive
past commutes, edit and delete past commutes, and later log back in and review their
commute history.

#### Links

https://ehaffey.github.io/commute-client/

https://peaceful-reaches-24074.herokuapp.com/

https://github.com/ehaffey/commute-client

https://github.com/ehaffey/commute-api

#### Technologies

- HTML
- CSS
- Sass
- Bootstrap
- Javascript
- jQuery
- Ajax
- Handlebars
- Custom API
- Ruby
- Ruby on Rails
- Postgresql
- Heroku

#### Planning and Development

-Planning-
1. Work through ideation, wireframes, and user stories
2. Develop working order of development tasks
3. Break tasks down to ticket-like items
4. Review scope for likely completion in alloted time

-Development-
1. Build out database and APIs
2. Test API interactions with curl-scripts
3. Build basic front-end login capability and test deployed authentication API
4. Setup skeleton features of app functionality and test with autentication and database access
5. Setup front-end user experience with familiar logic page design and functionality and branded header
6. Move skeleton user interactions post-login to navbar with dropdown buttons
7. Style record retrieval for seamless user experience upon viewing log
8. Added confirmation on delete and moved editing a record to each record's card
9. Review/resove outstandind bugs/issues
10. Deploy

#### Wireframes and user stories

- As a user I want to be able to register with a username and password
- As a user I want to be able to sign in with my username and password
- As a user I want to be able to change my password
- As a user I want to be able to store a commute
- As a user I want a stored commute to have a date, method, and total time
- As a user I want to be able to see all of my stores commutes
- As a user I want to be able to delete a commute in case I made an error
- As a user I want to be able to logout

#### Front-end Wireframes

https://drive.google.com/file/d/1-YhBefWvPIpciD55J9cGHT7SEVElJMHx/view?usp=sharing

https://drive.google.com/file/d/1-YhBefWvPIpciD55J9cGHT7SEVElJMHx/view?usp=sharing


#### Problem Solving Strategy

The idea came to me after listening to a podcast about disruption and how after signficant interruptions in public transit in London many commuters were able to imrpove their commute by being forced to review how they made their trip. In creating the app I first had to consider what columns would be manageable in my initial database. Then came building and deploying the database and API with ruby, and then creating a barebones front-end to ensure everyting worked. With the outline of the front-end working, I then moved features one at a time into their appropriate place within the app layout.

#### Future Development

1. Google API integration
2. Data scientist user role with full access
3. Refactored codebase
4. Additional data points, such as starting and ending zip code or address
