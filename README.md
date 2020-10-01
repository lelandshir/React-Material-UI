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

# Responsive Design

- Responsive Design provides the best UX; Compatibility for all devices vs. `Fixed Design` === one layout no matter what; results in the worst UX.
- Adaptive Design - Serving up a mobile version of your style-sheets? No. Imagine buildong for several different devices.
- Over half all web traffic comes from mobile devices
- Fluid design - using media queries to change the styles based on the screen-size; fine tune the look w/o having to harcode values for each device; display content in whatever makes the most since
- Media Queries detect screensizes

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

### Drawers AKA Side-Panels in Material-UI

- `Drawers` === Navigation Component in Material-UI from temporary to swipeable temporary drawers
- Pages anchored off screen to the left right top or bottom that can be brought on screen when an action is taken to display a a list of further options and information
