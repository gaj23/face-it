# 💄🌱 FaceIt 🐰💄
__updated: 03/02/2020__

---
#### Table of Contents
- [Introduction](#Introduction)
- [Features](#Features)
- [Technologies](#Techologies)
- [Artist Credits](#Artist-Credits)
- [Contributions](#Contributions)
- [Authors](#Authors)
---
## Introduction

<img src="https://ibb.co/zPxsWBQ" alt="FaceIt logo" width="219" />

This project comes out of the need for an app that can help a concerned & conscientious consumer understand what beauty products match their lifestyle.

Originally, this project was built for a project with Turing School of Software & Design. [See rubric here](https://frontend.turing.io/projects/module-3/stretch.html).

## Features

To view:

https://face-it.vercel.app/

### Categories:
- [Home Page](#Home-Page)

- [Selecting a Category](#Category-Page)

- [Selecting a Product](#Product-Page)

- [Viewing a Cosmetic's Details](#Cosmetic-Details)

- [Using the Navigation Bar](#Navigation-Bar)

- [Search by Certification](#Search-Bar)

- [Error Message](#Error-Message)

- [Desktop Additions](#Desktop-View)

- [Cypress User Flow Testing](#Cypress-User-Flow-Testing)

#### Home Page
Upon navigating to our landing page, users see the available product categories: vegan, allergen friendly, and eco conscious.

<details>
<summary>Example of Home Page</summary>
<br>
 <img width="283" alt="static home page interaction" src="https://imgur.com/j9fLUoC">

 <img width="283" alt="home page gif" src="https://media.giphy.com/media/JkYD0SY27cAwdGcZht/giphy.gif">
</details>

#### Category Page
A user can select a category type and view makeup products available in that category.

<details>
<summary>Example of User flow</summary>
<br>
<img width="283" alt="eco page interaction" src="https://media.giphy.com/media/tNlGDjgYWICaJRQfVH/giphy.gif" />
</details>

<details>
<summary>Example of Eco</summary>
<br>
<img width="283" alt="static eco page interaction" src="https://imgur.com/yrAz4JX" />
</details>

<details>
<summary>Example of Allergen Friendly</summary>
<br>
<img width="283" alt="static allergen friendly category page interaction" src="https://imgur.com/SIWASk7" />
</details>

<details>
<summary>Example of Vegan</summary>
<br>
<img width="283" alt="static vegan page interaction" src="https://imgur.com/yGxCWoU" />
</details>

#### Product Page
A user can select a category type, view makeup products available, and then view the items of that product type in that category.

<details>
<summary>Example of Mobile Experience</summary>
<br>
<img width="283" alt="Product page interaction" src="https://media.giphy.com/media/OGqhmkyEZEIwisuFvO/giphy.gif" />
</details>


#### Cosmetic Details
A user can view a particular cosmetic's details such as brand, listed price, and available colors of that cosmetic.

<details>
<summary>Example of Mobile Experience</summary>
<br>
<img width="283" alt="viewing cosmetic details" src="https://media.giphy.com/media/BgfWldURYP7lcnqwJV/giphy.gif" />
</details>

#### Navigation Bar
A user can click the links in the navigation bar to visit a category's section rather than scrolling to the associated picture below. They can access this navigation bar no matter where they are.

<details>
<summary>Example of Mobile Experience</summary>
<br>
<img width="283" alt="using the navigation bar to go to different categories" src="https://media.giphy.com/media/f2cp8uRkPVhEJko1wC/giphy.gif" />
</details>

#### Search Bar
A user can search for a product by the certification tag (such as 'organic' or 'gluten free') or brand (such as 'e.l.f')

<details>
<summary>Example of Mobile Experience</summary>
<br>
<img width="283" alt="using the navigation bar to search" src="https://media.giphy.com/media/VUpTsyooy89hO1mvtN/giphy.gif" />
</details>

#### Error Message
If there's a failure to load data from the API or if there's been a user-side error, an error message will display to let the user know there's been a problem.

<details>
<summary>Example of Mobile Experience</summary>
<br>
<img width="283" alt="error message" src="https://ibb.co/CKwg9Mv" />
</details>

#### Desktop Additions
Note hover functionality

<details>
<summary>Example of Mobile Experience</summary>
<br>
<img width="283" alt="desktop hover abilities" src="https://media.giphy.com/media/uyW7BBvvaAEnreuvWy/giphy.gif" />
</details>

#### Cypress User Flow Testing
Testing the UX & UI of our app.

<details>
<summary>Example of Cypress Experience</summary>
<br>
<img width="600" alt="testing user flow in cypress" src="https://media.giphy.com/media/fg5R6OULfk2IMUupQG/giphy.gif">
</details>

## Technologies
- React
- Router
- Cypress for Testing
- CSS
- HTML
- Webpack
- WAVE for accessibility auditing
- Lighthouse for PWA & accessibility auditing

## Artist Credits
Thanks to the following artists from [Unsplash](https://unsplash.com/):
- @noahbuscher
- @brookelark
- @daniele_franchi
- @kellysikkema
- @igorrand
- @joannakosinska
- @raphaellovaski
- @pesce
- @laurachouette

## Future Iterations

More specifics about future work or refactoring can be found in this projects [GH issues](https://github.com/gaj23/face-it/issues).

## Contributions

Thank you <a href="https://github.com/lo-la-do-li">Lola Dolinsky</a>, <a href="https://github.com/GreyMatteOr" target="_blank">Matthew Lane</a>, <a href="https://github.com/yiranli624" target="_blank">Elle Li</a>, <a href="https://github.com/letakeane" target="_blank">Leta Keane</a>, and <a href="https://github.com/sertmer" target="_blank">Scott Ertmer</a> for their time and patience.

#### To Contribute
If you'd like to contribute to the code, please complete the following steps:
- clone this repo locally: `git clone git@github.com:gaj23/rancid.git <renameHere>`
- API documentation & endpoints are [here](https://makeup-api.herokuapp.com/)
  - Due to low rate limit of our chosen API you may choose to use the `Data` folder contained inside or our [server](https://github.com/kelsiebesingeryeh/face-it-server)
  - To use the local server in you CLI: `git clone git@github.com:kelsiebesingeryeh/face-it-server.git <renameHere>`
  - `cd <nameOfServer>`
  - `npm init --yes`
  - `npm i express --save`
  - `node server.js`
- from there please create a new branch following this pattern: `git checkout -b initials/feature-fix/focus-of-branch`
- cd into your local copy and run `npm install`
- Use Cypress for testing
 - check that the following key-value pair in `scripts` is in your `package.json`
 - `"cypress": "cypress open"`
 - if not please download Cypress with `npm i -D cypress` and add the above to `scripts`.
- contribute as you'd like and push up your work for review
Thank you.

## Author
<table>
    <tr>
        <td> Kelsie Besinger Yeh <a href="https://github.com/kelsiebesingeryeh">GH</td>
        <td> Connie Hong <a href="https://github.com/conconartist">GH</td>
        <td> Gabrielle Joyce <a href="https://github.com/gaj23">GH</td>
    </tr>
    <td><img src="https://avatars.githubusercontent.com/u/66699027?s=400&u=d42fb1a3e7238d769ea9a7b1cea57c17a6d53ed2&v=4" alt="Kelsie Besinger Yeh" width="150" height="auto" /></td>
    <td><img src="https://avatars.githubusercontent.com/u/67291333?s=400&u=d69914a734d609cf34dd7c65d185d9380b2a4d46&v=4" alt="Connie Hong" width="150" height="auto" /></td>
    <td><img src="https://avatars1.githubusercontent.com/u/68332132?s=460&u=a54dd9d3eede7c5ae0704846c510001c89dc88f7&v=4" alt="Gabrielle Joyce"
 width="150" height="auto" /></td>
</table>
