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

  ## Landing Page :: Homepage

  Animations:: add professionalism to a website

  - After Effects
    Call to Action -> Free estimate
  - Card Components
    -Image Parallax Effect => backgroundAttachment: "fixed"

  👇🏾 Keyboard Shortcut Tip:
  `ctrl` + `cmd` + spacebar => pulls up emoji menu 🤓

  ### Tips & Trics: Resizing with Grid and useMediaQuery Hook

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
