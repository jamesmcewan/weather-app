# Five Day Weather forcast app

Link to production app - [https://ecstatic-fermi-5824e4.netlify.com/](https://ecstatic-fermi-5824e4.netlify.com/)

## Development app

* Development `npm start`
* Build `npm run build`
* Test `npm test`

## Usage

The app displays five days of weather forcasts from the Open Weather Map api. The forcasts for each day can be accessed via the buttons at the bottom of the app.

To change cities type the new city, for example Glasgow and either tab on desktop or tap 'done' on a mobile keyboard.

## Approach

For this app I intentionally opted to build from scratch instead of using Create React App. For most projects I would recommend using a build tool like Create React App due to the affordances like optimised webpack configuration which takes a lot of the pain out of getting an app up and running.

Some of the stack:

* Webpack for bundling JavaScript and CSS
* Jest with enzyme for testing
* Vanilla CSS for styling

## Improvements

* Add service workers for offline caching
* Server side rendering for improved response time
* Server side cache of the api response, should the endpoint be unavailable

## Lessons learned and tech debt

On the data side, response testing and error handling could be vastly improved. At the moment the app displays the error message for an invalid input, but does not gracefully handle an invalid response from the api.

While I am comfortable with vanilla CSS, the use of tooling like SCSS or styled-components would be better suited to the componentised nature of a React app.
