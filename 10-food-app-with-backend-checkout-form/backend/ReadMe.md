# calendar-service

This is a service to allow users to add, view, modify events in a calendar.
Currently JWT authentication and user login flow is not integrated. A default user is created at startup if not exists.

# Database Schemas
Can be found at: /src/model

# Pseudo code for functionalities

1. User should be able to add an event which occurs on a fixed date and time
=> 
a) Get user
b) Add an event to User collection's events array field with type "fixed". 

This is implemented at following url:
POST /api/v1/event
Request Body:
{
    "startDate": "04-30-2021 12:00",
    "endDate": "04-30-2021 13:00",
    "type": "fixed"
}


2. User should be able to add a recurring event
=> 
a) Get user
b) Add an event to User collection's events array field with type "recurring".
c) Fill the instances array of this event with dates that lie on the day provided 


3. User should be able to alter one instance of an already existing recurring event
4. User should be able to alter an already existing recurring event from one instance onwards
=> 
a) get User
b) An instance _id is received for an event to be editted.
c) All the instances from a particular date should be modified according to the criteria. 


5. User should be able to fetch the calendar for the given date range, start date and end date  both inclusive
=> 
a) Get user
b) For each events of user, find events that lie between the date range
c) Push such events to array to be returned

This is implemented at following url:
GET /api/v1/event?startDate=04-01-2021&endDate=05-01-2021

## Author
Rahul Midha

rahul.midha31@gmail.com