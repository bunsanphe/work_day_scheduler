# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.



**Major Task 1 - Build the HTML for the calendar

Create styles

**Create Task 2 - we need a way to save our task for each hour
    saving tasks into localStorage
        for each textbox, save that data
    Load Data from our localstroage into our html
        return that data back to each textbox

    play and test moment.js
    figure out how to format a date string
    get the current and format it

**Major Task 3 - Get the current hour of the day and compare with the hour      blocks on the page
    Determine if each hour block is past, present or future

    cal example, 
        shared class name across each element
        Get all hour block $(".classname")
            hourBlocks = $(".hour-block")
        loop each block hourBlocks.ech (function (index)){
            
            // this is my current block element
            var myCurrentBlock = $(this);

            // data-hour="9"
            myCurrentBlock.data("hour")
        }    
        

**Major Task
Print the current date to the top of the page