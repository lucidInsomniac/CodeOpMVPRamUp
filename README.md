# MVP Project Description: Ramp Up'!'

## Summary

Ramp Up'!' is an app for equipment managers in the athletics industry to manage inventory, and athletic gear distribution.

## Motivation and Description

At the moment, the athletics industry  does not have an app made with the equipment manager in mind.  There are similar apps available that offer basic needs like helping to keep  track of inventory with barcodes or QR codes. They even provide distribution and return features, as well as check in or out options for individual items. However, these are for start and end of season periods and does not include daily operations.

Equipment management requires thorough app to help with daily operations such as:

- Break down of how many items were returned vs given out

- Enter orders by team, vendor, invoice information and ability to edit received partially or full order

- Borrowing daily issued items: towels, locks, practice balls, etc

- How much money is left in the fiscal year budget vs how much was spent

- An ability to search matched invoices, and to upload associated invoices to orders

- Uniform prep list for game days (coaches change line ups all the time)

- An ability to generate different reports: Break down of athletes charged for missing gear, Vendor purchases, team purchases etc.

- Set up  appointments with teams for gear distribution and returns

- Communicate directly with Student Athletes via email on the app that automatically bcc a copy to the manager's registered email

Ramp Up'!' helps provide a more efficient workflow by allowing equipment managers to enter their orders into a inventory database. When gear is distributed to an athlete, the items will automatically update from the inventory database, thus assuring a better inventory record.

## Minimal Product

This part walks through the features included in this minimal viable product.

### Features

- Be able to create, search, delete, update, and separate orders and inventory

- Edit feature will pull existing data from database and allow changes. Provided with update and cancel button

- Be able to view: orders, and inventory

- Navigate with a sidebar with menu

- Data will be input by user in frontend and will be saved in a MYSQL database on the backend

### Design Overview

This app has 6 pages:

1. An "About" page introducing the app and features.

2. A "Home" page that displays a welcome message, with charts displaying current percentages of available gear vs borrowed, a profile icon, and sidebar for navigating the menu to other pages

3. An "Ordering" page that is a form for entering orders

4. A "Partial Orders"page to list all unreceived and partially received orders by order date and allows updating, and deleting

5. A "Full Orders"page to list all completely received orders by order date and allows updating, and deleting

6. An "Inventory" page that displays all the current inventory from the MYSQL database

7. There is a search bar for orders and inventory

8. Form: Edit, Cancel, Delete,

## MySQL Database Schema

![RampUp Database Schema for MySQL](/ProjectInfo/rampupDBSchema.png)

## User Workflows

### 1. How to Check Or Add Order(s)

![How to Add Order(s)](/ProjectInfo/CheckAddOrder.png)

### 2. How to Edit Or Delete Order(s)

![How to Edit Order(s)](/ProjectInfo/EditDeleteOrder.png)

### Technologies

1. Frontend

    - React JS

    - React-Bootstrap

    - Material UI Icons for side bar icons

    - Font Awesome for mock-up avatar

    - React Router for Frontend routes

    - canva.com for mock-up charts on homepage

2. Backend

    - MYSQL DB

    - Express JS

    - Node JS

3. Error and Bug Tracking

    - Jira for error, bug and story tracking

## Error Logs

    1. React-Bootstrap error: 

        part_orders:1 Refused to apply style from 'https://maxcdn.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css' because its MIME type ('application/xml') is not a supported stylesheet MIME type, and strict MIME checking is enabled.

    2. React-Bootstrap error:
    
        Failed to load resource: the server responded with a status of 403 ()

## Known Bug Issues

    1. The "Edit" Button is not responsive at all for "Partial Orders" and "Full Orders"pages. Isolated issue to how data is passed from /components/Routes.js. Check console log, nothing registers when "Update" Button in both "Partial Orders" and "Full Orders" pages:

            [Line 55] props.updatePartOrder()

            [Line 73] props.updateFullOrder()

        They fetch with "PUT" method function on client App.js if used to replace the following functions and come up as "undefined" for eacg value: 

            [Line 46] props.getPartOrdId()

            [Line 65] props.getFullOrdId()

        Isolation incident is most likely in handleSubmit event handlers for both:

            /components/PartialOrders/EditPartOrdForm.js  [Line 33]
            
        AND 
            
            /components/FullOrders/EditFullOrdForm.js  [Line 30]


    2. Search bar temporarily stopped working

    3. Some dates are not listed in order even though sql commands set to ORDER BY ASC

    4. Submitted new order would not render in "Partial Orders" or "Full Orders" if input for both fields were not selected with "Yes"or "No".  -- Issue resolved 02/24/2021

## Jira Log as of: 02/25/2021

![Screenshot of current log](/ProjectInfo/Jira2.png)

### Roadmap

1. Identify users, user stories, and actions to map workflow

2. Utilize page sketches to render layout and CSS choices

3. Narrow down to core functional components and create basic mock-up pages

4. Identify what type of data will be entered and passed around

5. Pseudo code workflow for each page

6. Use test data on the individual static pages to test site functionality

7. Create data schema

8. Create backend and test database data against it

9. Connect Frontend and backend

10. Test entire functionality

## Features to Revisit

Future features in the pipeline, might not be included in MVP based on time allotted.

- FAQ

- Schedule Appointments: integrate G-Cal and G-Forms

- Check-in/out for uniforms and daily items

- Generate to PDF for print

- Form: Edit settings

- Athlete Cards

- Login/Register

- User roles: Manager, Student Staff, and Athlete

### Technologies

- Google Apps Script API for Google Calendar, Gmail Suite, and Google Sheets

- Passport JS

- Google's OAuth 2.0 API

- Zendesk

- Barcode and QR code scanner API

- Confluence: Internal FAQ

## Roadmap

1. Psuedo code routes in backend to link to external APIs

2. Test APIs in Postman

3. Research how to link external APIs to update from the API's native workspace to update database in MYSQL while still linking MYSQL to frontend to receive updates at the same time.

4. Document user workflow for each user role and provide as public (athlete) and internal (manager, student staff) FAQ

5. Integrate Zendesk as contact for users to report issues

​ _This is a student project that was created at
[CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona.
