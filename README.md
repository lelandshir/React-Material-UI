### ::My Notes on Material-UI::

- For Standardized components and functionality

##### Bootstrap/React-Bootstrap

- Ported for React
- Oldest (suite of pre-styled html elements accessed via classes)
- Not originally for React
- A bit restrictive, not as easy to customize

##### Semantic-UI/Semantic-UI-React

- Similar to bootstrap but adds a theming system and seeks to add more functionality
- Also ported for React
- Dependent on this main library which has no React specific styling

##### Material-UI

- Built explicitly for and only for React
- Optimized, streamlined experience
- Flexible, consistent, customizable - your own design through their library
- Active Development and Upkeep, frequent commits
- Advanced Feature Support
- Sever Side Rendering for server side set ups
- Easy to change layouts and adapt the websites
- Integrating layouts with grid system and making websites responsive to any screen-size
- Provides components
- Media Queries

##### 1. Responsive Design

- Any screen-size and orientation

##### 1. SEO — Search Engine Optimization

- Important to clients

##### 1. NEXT.JS & Create-React-App

- Migration

##### 1. Google-Cloud Functions

- Store functionality in the cloud at a URL
- Makes apps more lightweight

##### 1. Google Analytics

- A certification available
- Analyzing data from users to make smarter applications

##### 1. Animation Integration

- Personalize designs
- Streamlined a process to export and render animations

##### 1. Cross-Browser Support

- Make sure it looks great in every browser

===

### About: MATERIAL-UI THEMING SYSTEM

- Same advanatages as Styled-Components

- Uses `JSS`, a JavaScript to CSS Compiler; works at runtime and server-side

Install the Dependency: `npm i @material-ui/styles`

- Palette is an Obj inside of Theme with color options we can set to variables so that we only have to change it once to edit the theme throughout our UI. We pass palette as an obj to the `createMuiTheme` hook and set our properties in a compone

### The hook I enjoy more than CSS Styled Components

- To create a theme for an application, aka colors and styles we're going to reuse, we can create a Theme component import createMuiTheme and export the createMuiTheme Material-UI hook to get access to the theme object in other files. Similarly to Styled Components && CSS Variables, we get access to everything on this object when we import useTheme and `const theme = useTheme();` to get access to the theme object. We can then pass this `useStyles/makeStyles(theme)` in other components. We can `useStyles/makeStyles(theme)`, return, and store styles on this object when we have select styles in a component. But for more consistency we can store reusable styles in the `createMuiTheme` hook. Notes on using theme.breakpoints further down...

`- const useStyles = makeStyleste(theme => ({ targetEl: { cssProp: "cssVal", }, targetEl2: { cssProp: "cssVal, "&hover:": { cssProp: "cssVal } } }))`

# Responsive Design

- Responsive Design provides the best UX; Compatibility for all devices vs. `Fixed Design` === one layout no matter what; results in the worst UX.
- Adaptive Design - Serving up a mobile version of your style-sheets? No. Imagine buildong for several different devices.
- Over half all web traffic comes from mobile devices
- Fluid design - using media queries to change the styles based on the screen-size; fine tune the look w/o having to harcode values for each device; display content in whatever makes the most since
- Media Queries detect screensizes

===

### react-lottie

- to render animations in react

===

### Responsive Design Best Practices:

1. Relative Units; VW/VH Viewport Width && Height
1. Media Queries
1. Grid System - Layout the content and tell it how to resize or reorder elements based on screen size
1. Perpetual Testing; Use dev tools to view content on varying screen sizes

### Goals:

- Looks good on all devices
- Orientation Indpendent; Did you plan for landscape mode?
- Resizable; should flow and adjust accordingly when the window resizes in real time

#### Breakpoints API

- use `theme.breakpoints` syntax for media queries
- API that enables use of breakpints in wide-variety of contexts; because design interfaces need to be able to adapt thier layout at various breakpoints

1. each breakpoint (key) matches with a `fixed` screen width (value):
1. the values determine bp ranges; a range starts from the bp value inclusive, to the next bp value exclusive

- xs: 0px
- sm: 600px
- md: 960px
- lg: 1280px
- xl: 1920px

- `useMediaQuery` React.js hook supports server side rendering and observes the document to detect when its media queries change, instead of polling the values periodically
- uses Boolean (matches) to detect screensizes
- import `useTheme` to gain access to theme `const theme = useTheme()`

### Tips on using Responsive Units

1. em - static responsive unit based on parent element font size. If parent element fontSize: 8px then child element 1em = 8px.

Because 'em' units don't always refer to the same value (if you change one element's fontSize then its children will have a different em value) This can be regarded as a big negative for use of 'em' units

2. rem - static responsive unit based on page font size. If HTML fontSize: 8px then 1rem = 8px.

'rem' units always refer to the page font size. This means it will always provide a consistent value wherever used in your application. So 'rem' can be regarded as the unit of choice for almost all values: fontSize, margin, padding, width/height, etc. Use 'rem' when you want to define an explicit value, like width: 5rem. This will compute a fixed px value corresponding to 5 \* page fontSize, so as you change the size of the window the width will not change, however what makes it responsive is when it is loaded on smaller screens the value computed will be proportional.

3. % - fluid responsive unit based on parent element dimensions. This value constantly changes the underlying px value returned to maintain the specified percentage. As the screen size changes this unit changes in realtime maintaining proportions.

You want to use '%' when you want the value to change in realtime as the size of the window changes. So a width: 100% will always span the entire width of the available space, regardless of actual px values. This allows you to define fluid elements with relative sizes.

4. px - standard fixed unit. Other units calculate and return respective px values. 1px = 1/96th of 1in

The 'px' unit should only be used when you want a very explicit value regardless of screen size. This can sometimes be helpful for spacing certain items, but in practice, try to avoid it and use 'rem' instead.

# Component Overview

- If you ever want to change a default setting on a component, endeavor to head to the documentation to see if there are ways to do so via a prop

### Drawers AKA Side-Panels in Material-UI

- `Drawers` === Navigation Component in MUI
- Pages anchored off screen to the left right top or bottom that can be brought on screen when an action is taken to display a a list of further options and information

### Lists

- `Lists` === Data Display Componenets in MUI
- Lists are vertaile and can render icons or text: ListItemIcon || ListItemText; lots of properties available on the list component

### zIndex && position

- learned to make great use of these CSS style keys when implementing a header, footer and drawers. We never want drawers to slide over the header and footer bc it covers valuable content. Use a combo of zIndex, position and Material-UI's props to control these details.

### Grid Overview

- Grid is a component in layouts, and adapts to screen size
- Grid System is connected to the Media Query system,
  we can use this to our advantage

  - There are 2 grid eleemnts, containers and items. Items have access to the same props on `breakpoints` "xs, sm, etc" and range from 1-12. 12 is 100% screen width while 6 of 12 is 50% and so on. The rules are applied via the props. size is the key, 1-12 is the acceptable value.

  - justfiy and alignItems props orients items along a certain axis dependent on grid direction

  - Size props, for example, the `lg` prop lets grid item containers know when to share the space with other grid item containers. Adding a number to the prop tells the container how many columns of space to take up on the screen. I believe there are 12 columns by default; So by adding `lg={9}` to one container and `lg={3}` to another, you'd be telling one item to take up 3 quarters of the space available, reserving that last quarter for the other container. So 2 lg props w/o a number on 2 separate containers take up 6 spots each - half and half.

  - grid item containers have a default direction of row

  ## Landing Page :: Homepage ::

  Animations:: add professionalism to a website

  - After Effects
    Call to Action -> Free estimate
  - Card Components
    -Image Parallax Effect => backgroundAttachment: "fixed"

  👇🏾 Keyboard Shortcut Tip:
  `ctrl` + `cmd` + spacebar => pulls up emoji menu 🤓

  ### Tips & Trics: Resizing with Grid and useMediaQuery Hook

  - Grid items must be containers in order to be justified
  - The `container` prop tells an item to take up a width of 100% of the space avaiable, so `alignItems` could be tricky

  adding margin:

  - Add a style obj of marginBottom: "10em" to the wrapping item container Grid

  hide an element at a certain screen width w/ material-ui:

  - Use the Hidden Component as seen in the landding page:  
    `<Hidden mdDown> <HideMe/> </Hidden>`

Working with breakpoints on the theme object:

- Be sure to import `useMediaQuery` and set a constant as seen below and pass `theme.breakpoints.down("md")`
- `const matchesMD = useMediaQuery(theme.breakpoints.down("md"));`
- find the Grid item container that holds the grid items you want to `justify` once reaching the breakpoint that matches MD (medium), using `breakpoints` off of the `theme` object
- set `justify` on the Grid item container to a ternary statement as seen here:
  ` <Grid item container direction="row" justify={matchesMD ? "center" : undefined} > ...`

  - we can also set responsiveness using theme.breakpoints on the styles object
    `mainContainer: { paddingLeft: "5em", paddingRight: "5em", paddingTop: "2em", paddingBottom: "10em", [theme.breakpoints.down("sm")]: { paddingLeft: "1.5em", paddingRight: "1.5em", },`

    - The more we structure out our layouts with Grid item(S)/container(s) components the more control we have over how the application looks and operates
    - Use the matches constant with the `useMediaQuery` hook passing the theme.breakpoints.down("size") :: it really comes in handy for ternary statements on props when working toward a responsive layout
    - Work section by section to achieve best results, build the layout for the desktop users first then size down from large to medium to small breakpoints applying ternaries where necessary -- be sure to commit often, each time we finish a section

    - Remeber: We can't use the alignItems (center (center) props on a wrapping container if trying to move a container inside of it. We havr to apply that to an item.

    - Often, it'll make more sense in the code.

    ### :: Text Field Component ::

    - Allow users to enter text into the UI
    - Form props available are similar to basic HTML props such as `required`, `disabled`, `password`, `read only`, `number`, etc...
    - label prop is neat; sets the name and jumps to small when clicked to give space for user input

### Theme Overrides

- adding an overrides object to the theme outside of the typography section
- Plenty of information on this in the Material-UI documentation

### Background for desktop switch to Mobile

background: {
`backgroundImage: `url(\${background})`,`
backgroundPosition: "center",
backgroundSize: "cover",
backgroundRepeat: "no-repeat",
height: "60em",
paddingBottom: "10em",
`[theme.breakpoints.down("md")]: { backgroundImage:`url(\${mobileBackground})`, },`
},

### Nested Ternary Statements:

- marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0

### Input Fields -- Validation && Error Prop Available to us

- error prop
- helperText prop: `helperText="Please enter a name"`
- use hooks and JS to help here

### Dialogs -> Feedback -> Modal

- Added a confirm message modal with this component

### Google Cloud Functions: Nodemailer and

- Sending a message; need a backend and a server
- This is front-end only app and we don't need to set up a custom server for this little bit of functionality
- Hello, `Firebase`, a Google-owned co. providing serverless backend functionality like real-time DB's, authentication, and cloud functions
- `Nodemailer`, a clean and lightwight email package built to be run in a node server environment; configure the mailer, pass it certain data, and have the appropriate email created and sent to specified recipient

### Firebase

- owned by google
- provides backend cloud services; such as real-time DB's, authentication, and cloud functions
- Serverless, only work with the top level API
- Never have to update or maintain any servers

### I. Firebase Setup:

1. In browser: https://firebase.google.com/ -> Be sign into google acct
1. Get started -> Create a project -> title it
1. go to menu -> functions -> get started
1. On command line: `sudo npm install -g firebase-tools`
1. then run: `firebase login`; choose y or n for analytics -> browser will open
1. Login to the google acct used to set up Firebase and allow Firebase CLI permsissions -> should say "success"
1. In project folder: run `firebase init`
1. Firebase will ask what features we're using; select with arrows and select `functions` with spacebar and enter to continue
1. Use an exisitng project
1. Select the project set up in the browser and press enter
1. Choose JavaScript as the language and press enter
1. Yes, use ESLint
1. Yes install dependencies
1. Terminal -> "Firebase initialization complete!"
1. Functions folder will appear in project folder
1. find index.js ...
1. add these two constants: `const config = functions.config()` &&
   `const admin = require("firebase=admin")` -> dependencies that were installed for us with firebase -> seen in package.json
1. Under `admin` call `admin.initializeApp()`
1. Must check out Nodemailer setup and deploy the function to use in next steps

### II. Nodemailer Package Setup:

- `http://nodemailer.com/about/`

1. cd into the functions folder and run command: `npm i --save nodemailer`
1. add `const nodemailer = require("nodemailer");` to index.js in functions folder
1. const transporter = nodemailer.createTransport({})
1. Google Email Account -> turn `on` "Less Secure App Access" in Account Settings -> Security :: Because we want to give a program like Nodemailer permission to send emails from our account -> set UN && PW in next step
1. still in functions folder run command: `firebase functions:config:set user.email="<emailHere>"`
1. then run: `firebase functions:config:set user.password='<passwordHere>'`
1. Terminal: "✔ Functions config updated."
1. use the properties set in the auth as seen in the file
1. set up mailOptions constant with from, to, subject, text
1. uncomment the exported function and change the name to `sendMail` instead of `helloWorld`
1. After editing the function as seen in the file ->
1. Run: `firebase deploy` to launch our function to google-cloud so that it is hosted and ready at our URL
1. The function link is where our cloud function lives -> Test it by going to the link and seeing if the message sent
1. If that works, in functions folder `npm i --save cors`
1. Require CORS and set it's cross-origin access prop to true - `const cors = require("cors")({ origin: true });`
1. Use `cors` in sendMail function, passing `req`, `res`, and an ES6 arrow function firing the transporter.sendMail method

#### Troubleshooting -> Extra Tips :: Nodemailer/Firebase:

- Set up an App specific password after setting up 2 factor authentication
- Use that password for setting the environment variable otherwise there may be some security issues blocking the message from sending

#### A Cloud Function Defined

- a function stored at a URL; make a get req to this url, this function will be called
- recieves data through query strings
- Perfect for Single operation use-cases

### III. CORS (Cross Origin Resource Sharing):

- Network Requests
- When trying to access a resource not on the same domain as you, request may be blocked
- Makes cross site scripting difficult

#### Extra CORS tool is `cors-anywhere`

- CORS policy: No 'Access-Control-Allow-Origin' header

If you get the following error when clicking the send message button and not receiving any data. You can add cors for the react side to fix the issues.

Problem:

- Access to XMLHttpRequest at 'YOUR_URL' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

Solution:

const onConfirm = () => {
const cors = 'https://cors-anywhere.herokuapp.com/';
axios
.get(
`${cors}YOUR_URL`
)
.then(res => console.log(res))
.catch(err => console.log(err));
};

### Sending the Message:

#### Axios

`https://github.com/axios/axios`

- Used to handle network requests, has a simple API, has a simple option for sending query parameters
- `npm i axios` && require (node), import (react) axios from axios
- `axios.get().then().catch().finally()`

From here - Should be successfully able to send off a `network request` using `axios` from the contact page to `trigger` the `cloud function` on `firebase`.

===

### Progress Indicators via Material-UI

- aka spinners, express an unspecified wait time or display length of a process.
- Animation works with CSS not JavaScript (very lightweight)
- Circular || Linear Determinate - ie: CircularProgress Component - check sthe loading state

- Contact JS
- Render: {loading ? <CircularProgress size={30} /> : buttonContents} in the button instead of text and an image

===

### Snackbar Component

- Provide brief messages about app processes
- Like on linkedin when you perform an action and the small dialog box appears at the bottom right of the page

===

### Sending Form Values

- Working in Contact.js
- Query Strings are parameters inside a URL
  Example: in `https://youtube.com/results?search_query=4k+video`
- the query string name === search_query && the value === 4k+video
- after the URL string in the axios network request, as a second argument pass the query string as an object called params, passing all the props and values
- check out the mailOptions object in functions -> index.js ...folllow that
- professional email template :: table based -> html response
- stop server
- `firebase` deploy to reaffirm the newest version of the function
- npm start
- test

### A good use of Lodash's cloneDeep method:

- Make proper copies of nested items so that we don't attempt to incorrectly data

- Elaborate: Spreading data (...) into new objects or arrays may cause mutability issues and this makes working with nested objects and arrays in state very tricky. When copying over a reference of an obj or arr into a new const and changing a property of it from the new const will change the orginal as well. To properly copy over all the data makes for some pretty messy syntax...

- In comes Lodash. We can `npm i --save lodash` and import the cloneDeep function from it. Pass the item to copied through cloneDeep and set that equal to the constant, change a property and we'll find that cloneDeep has made a true copy of the data, and not a shallow copy.

- lodash imports from an underscore, otherwise destructure out the methods you want to use

- See use of this in the Estimate.js file

- #### correctly maintain a mutable state by using cloneDeep via lodash:
  wrong:
- const newQuestions = { ...defaultQuestions };
- newQuestions[0].options[0].selected = true;
- console.log(defaultQuestions[0].options[0]);
- => selected will be true on defaultQuestions the copy

correct:

- const newQuestions = cloneDeep(defaultQuestions);
- newQuestions[0].options[0].selected = true;
- console.log(defaultQuestions[0].options[0]);
- => only the true copy will have been changed

- Adding component={Button} to a grid item to turn it into a button
- default styling occurs, learn to shut it off with styling
