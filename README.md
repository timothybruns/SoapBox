# Final Project - SoapBox

## Heroku link:

* https://soapbox-wdi.herokuapp.com/
* USE TEST USER LOGIN INFO:
    * email: test@gmail.com
    * password: test

## The Problem

* The content which we ingest and broadcast online as a means to market ourselves is scattered among many social media applications. SoapBox application seeks to solve this problem as a centralized social media app that curates the content you'd like to broadcast and provide perspective on for your professional audience.

## Brainstorm/Initial Thoughts

* A social media application that displays a user's content(books, articles, etc.) that they want to broadcast to professionals (i.e. employers, influencers, colleagues, etc.)

* User will log in and have a profile that they can Create, Read, Update, and Destroy Content
    * Each piece of content will have a title, author/source, genre, and review
        * This will involve many-to-many relationships between data tables
            * This will require a cross reference table for each type of content

* User will be able to visit other user's profiles and view their content that they have generated

* Challenges/Roadblocks:
    * Learning and implementing Redux as a way to manage my applications state
        * Knowing when and if I will need to scrap this idea if it becomes apparent (by a set deadline) that this is not feasible for me to successfully implement
    * Incorporating an API call - likely to search for books to add to one's "bookshelf"
    * The differences in accessibility between Users as well as searching for other users
    * Webpack - how am I building this?
        * React Slingshot - will this be the best way for me to get a React/Redux app up and running quickly?
    * Using Ruby on Rails with React - will require a Gem file, which I've never done this before
        * Am I setting routes with Rails or React Router?

* At its core, this application is CRUD with auth, but with the intention of tapping into a purely professional/influential audience.

## Technologies/Dependencies Used

* React.js, React Router (frontend)
* Ruby on Rails (backend)
* Webpacker (Jason Seminara)
* HTML/CSS
* Bootstrap
* Heroku
* PSQL
* MVC Pattern
* Active Record
* Github
* See package.json for all dependencies/nodules used
* See Gemfile for all Gems used

## Wireframes & User Stories

* Wireframes: https://git.generalassemb.ly/tbruns3/Final-P4/blob/master/SoapBox%20wireframes.pdf
* User Stories: https://git.generalassemb.ly/tbruns3/Final-P4/projects/1

## Rough Project Proposal

* Cost - $75/hr while a Sprint is in progress (modified in propsal to Johnny Appleseed ;) )

* Time - will have a functioning application on 1/29

* $$ to start - $2000

* Working Demo at end of first sprint - Monday, 1/22 there will be a working demo of the app.
    * Redux implementation to be decided upon by Saturday, 1/20

* Work schedule (Sprint schedule)
    * 1st Sprint from Thursday to Saturday afternoon (Redux learning)
    * 2nd Sprint from Monday to Wednesday
    * 3rd Sprint from Thursday to Sunday, with presentation Monday

* Other pay dates?? Another $2000 when it's complete

* Prototype/MVP/Done?
    * MVP is a CRUD app with users/auth using React/Redux/Rails
    * Completed app includes different capablity based on the user


## Final Thoughts and Challenges

* Overall, I found this project to be the most difficult to handle - big surprise. I set out to build a social media application (meaning multiple users) using Rails on the backend, React on the frontend, and managing state using Redux, a technology I had not seen or experimented with before. In addition, I thought I could try incorporating Bootstrap for my CSS, given the poor designs of other applications I had built. Given the ease of getting a CRUD app going with Rails, my relative comfort with React, and my aspiration to learn Redux, I thought I had set ambitious but attainable goals, given the deadline.

* After spending 2 days of focused learning and practicing with Redux from several sources, I began to have a fundamental understanding of the technology, but with no real concept of how to implement it in the scope of my project. During this learning period, I was not able to adequately plan out my application, which affected in me in more ways than one. Days had passed and I needed to "pull the ripcord" on learning Redux. I began thinking about SoapBox as an app that set state purely with React, and started building out routes and models with Rails.

* Soon after did I realize that my skipped planning phase did not allow me to forecast for obvious problems. All webpack issues aside (as we all know, there were PLENTY), using React on Rails was new to me, the application was extremely model heavy, and my idea at its core was sort of boring to work with. I ended up zig zagging my way to the finish line (which by the way is not even close to "finished") instead of the straight-line approach. I piecemealed my way through the building of the React components and became aware that I needed a lot more practice with React and simple Javascript if I was to ever complete this application. Overall, I learned a TON through ultimately failing and decided that if I could go back, I would change 2 things. One would be come up with a more creative, and simple idea - aka not another CRUD app! The other would be to PLAN BETTER - I definitely took a step back in my ability to plan and got away from my normal routine, which had proved to work well in past projects. 
    
## Works Cited

* Webpack: https://github.com/shakacode/react_on_rails
    * This was the original Webpack used to serve up React on Rails, which was reconfigured with guidance from Jason Seminara and Kate Shishkina

* BCrypt Session Auth: https://gist.github.com/thebucknerlife/10090014
    * Note: had some help from Collin Schneider on this (GA alum/Rails developer)
    * This was a feature that was lost upon webpacker reconfig, but appears in older commits

* Render JSON in controller: https://stackoverflow.com/questions/14824551/rendering-json-in-controller

* CSS/styling inspiration: 
    * https://getbootstrap.com/docs/3.3/examples/dashboard/
    * https://codepen.io/samanthasquared/pen/bYeOGY
    * https://www.w3.org/Style/Examples/007/evenodd.en.html
    * Note: had some help from Yanina!

* Namespace: https://devblast.com/b/namespace-controllers-rails
    * Note: help from Kate here!

* HTML/CSS tables: https://css-tricks.com/complete-guide-table-element/

* Resources I used during my attempt at Redux
    * https://www.fullstackreact.com/ (Book)
    * https://learnredux.com/ (Wes Bos tutorial)

* David Azaria
    * Stand-up buddy, app naming, and general trouble-shooting

* Luke McDonald/Danny Graugnard
    * Stand-up buddies, and general trouble-shooting

