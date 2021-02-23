# MVP Project Description: Ramp Up'!'

## Summary

Ramp Up'!' is an app for equipment managers in the athletics industry to manage inventory, and athletic gear distribution.

## Motivation and Description

At the moment, the athletics industry  does not have an app made with the equipment manager in mind.  There are similar apps available that offer basic needs like helping to keep  track of inventory with barcodes or QR codes. They even provide distribution and return features, as well as check in or out options for individual items.

However, equipment management require a more thorough app to help with daily operations such as:

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

- Be able to create, delete, update and separate orders, and inventory

- Be able to view: orders, and inventory

- Navigate with a sidebar with menu

- Data will be input by user in frontend and will be saved in a MYSQL database

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

### Technologies

- React JS

- Material UI Icons for side bar icons

- Font Awesome for mock-up avatar

- Jira for error, bug and story tracking

- React Router for Frontend routes

- MYSQL DB

- Express JS for server

- canva.com for mock-up charts on homepage

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
[CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._