# Test Case

## Dashboard

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

### ✅Result

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
## TO DO

- [x] fix on click outside with dropdown
- [x] card like wrapper for "add card" dropdown (styling)
- [x] card header with title and remove functionality
- [ ] grid type generic component
- [ ] better styling for main header
- [x] svg icons for better visual effect
- [ ] responsive adaptations
- [ ] tests
- [ ] Check `Text content did not match. Server: "9b1d6583" Client: "c7d94dee"` warning on page load

### Follow up questions

Imagine the data points amount has increased to 4 MB of data. What strategies would you use to insure the app would not lose performance? Think about data download and data visualisation.

## Energy Price Calculator

There are available energy market orders you can buy like the list array below. You can execute part of an order, for example: you can acquire 5 MW from a 10 MW volume order.
Write a function in Javascript and necessary tests to run it that will have as input:

* list of available orders
* the desire volume

Function should return the lowest weighted average price to meet that desire volume.

It should work for different input volumes.

For example: How much would I have to pay to buy 8 MW given the list below? What would the output be if I wanted to buy 1000 MW?

### ✅Result

Find the code for  [calculating lowest weighted average price for MW](https://github.com/mifrej/wattsight/tree/master/src/lib/energy-calculator). Run the result function with:

  ```bash
    yarn calculate
  ```

Runt tests for the function with:

  ```bash
    yarn test src/lib/energy-calculator
  ```
