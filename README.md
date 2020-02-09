# Five Day Weather forcast app

Link to production app - https://wthr.mcwn.dev

## Development app

- Development `yarn start`
- Build `yarn build`
- Test `yarn test`

## Usage

The app displays five days of weather forcasts from the Open Weather Map api. The forcasts for each day can be accessed via the buttons at the bottom of the app.

To change cities type the new city, for example Glasgow and either tab on desktop or tap 'done' on a mobile keyboard.

## Improvements

- Add service workers for offline caching
- Server side rendering for improved response time
- Server side cache of the api response, should the endpoint be unavailable

## Tech debt

- On the data side, response testing and error handling could be vastly improved. At the moment the app displays the error message for an invalid input, but does not gracefully handle an invalid response from the api.
- Test coverage should be addressed.
- Linting issue in forcastData.js due to using an arrow function for assignment instead of returning a value
- While I am comfortable with vanilla CSS, the use of tooling like SCSS or styled-components would be better suited to the componentised nature of a React app.
