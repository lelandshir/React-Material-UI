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

##### Responsive Design

- Any screen-size and orientation

##### SEO — Search Engine Optimization

- Important to clients

##### NEXT.JS & Create-React-App

- Migration

##### Google-Cloud Functions

- Store functionality in the cloud at a URL
- Makes apps more lightweight

##### Google Analytics

- A certification available
- Analyzing data from users to make smarter applications

##### Animation Integration

- Personalize designs
- Streamlined a process to export and render animations

##### Cross-Browser Support

- Make sure it looks great in every browser

===

### MATERIAL-UI THEMING SYSTEM

- Same advanatages as Styled-Components

- Uses `JSS`, a JavaScript to CSS Compiler; works at runtime and server-side

Install the Dependency: `npm i @material-ui/styles`

- Palette is an Obj inside of Theme with color options we can set to variables so that we only have to change it once to edit the theme throughout our UI. We pass palette as an obj to the `createMuiTheme` hook and set our properties in a compone
