# How to start

1) First run:

    ```bash
      yarn install
    ```

2) To start app in dev mode

    ```bash
      yarn dev
    ```

    Application runs on **`http://localhost:3000`**

3) For production build

    ```bash
      yarn build
    ```

4) For production server

    ```bash
      yarn start
    ```

5) Testing

    ```bash
      yarn test
    ```

6) Linting

    For TypeScript linting

    ```bash
      yarn tslint
    ```

    For StyleLint

    ```bash
      yarn stylelint
    ```

7) Static Typing check

    ```bash
      yarn ts:check
    ```

# Test Case

## 1) Dashboard

Create a dashboard web application.
The application should:

* Display the sample data using different visual elements (like different chart types, tables)
* Add/remove rows dynamically on the dashboard
* Add/remove elements dynamically

These elements (charts and tables) can come from a pre-defined list (there is no need to have a lot of different types of these elements, just enough to place a few side by side, even if it means repeating them)

Use the data file in attachment as the data source. This data is energy hourly price (€/MWh) for Germany.

We would like to understand how you would use ReactJS to create this application:
* How you approach the problem?
* How you structure your code?
* How you use components, state and props?
* How you use component's lifecycle?

You can use  https://github.com/facebook/create-react-app to get it up and running. You can use other third party libraries.

There should not be a big effort put on design, but it should be user friendly.

Bonus points for the use of tools like webpack and npm or yarn as well as including tests.

### Follow up questions

Imagine the data points amount has increased to 4 MB of data. What strategies would you use to insure the app would not lose performance? Think about data download and data visualisation.

### ✅ Result for 1

#### Components composition

```text
_app (custom wrapper for next.js)
  └─page
    │ └─index (root route)
    │     └─dashboard
    │         └─row
    │            └─card
    │               ├─chart
    │               └─grid
    │
    ├─meta (basic meta tags)
    └─header (header title and navigation placeholder)
```

#### Description

  * Prototype build on Next.js framework (most of the fine grained setup is already built in)
  * Built with TypeScript (better code stability, less tests required)
  * For better code quality, consistency and integrity linters and formaters are incorporated used (tslint, stylelint, prettier)
  * For generating examplary chart `chart.js` library is used
  * For the rest of functionality custom components are developed
  * All components are built as functional components
  * Component states are managed with React Hooks
  * Examplary data sample (Hourly prices) is passed to React Context API for simplicity sake
  * `styled jsx` (built in Next.js) with `postcss preset-env` used for writing `CSS`
  * `flex-box` css properties are used for layouting (could be css-grid but flex-box is backward compatible)
  * Icons are build with svg sprite

## TO DO

- [ ] tests
- [ ] Check `Text content did not match. Server: "9b1d6583" Client: "c7d94dee"` warning on page load
- [ ] better data format for time column
- [ ] better hover with transition effects (buttons, add card, add row)

## 2) Energy Price Calculator

There are available energy market orders you can buy like the list array below. You can execute part of an order, for example: you can acquire 5 MW from a 10 MW volume order.
Write a function in Javascript and necessary tests to run it that will have as input:

* list of available orders
* the desire volume

Function should return the lowest weighted average price to meet that desire volume.

It should work for different input volumes.

For example: How much would I have to pay to buy 8 MW given the list below? What would the output be if I wanted to buy 1000 MW?

### ✅ Result for 2

Find the code for  [calculating lowest weighted average price for MW](https://github.com/mifrej/wattsight/tree/master/src/lib/energy-calculator). Run the result function with:

  ```bash
    yarn calculate
  ```

Runt tests for the function with:

  ```bash
    yarn test src/lib/energy-calculator
  ```
