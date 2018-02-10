# birthdayTexter

A server that sends me text messages the day before a friend's birthday with Twilio.

I often have my facebook account disabled, but I also have a hard time remebering my friend's birthdays,
so i built this simple server to text me the day before any of my friends or families B-days.

The heroku Scheduler addon runs 'node bin/checkDates' once a day, which compares the date tomorrow with the dates of my friends,
which are stored in a postgres database (also on Heroku).

To see how it works check out bin/checkDates, which is heavily commented.

A lot of the work of this small project was different on development and production, so it doesn't make too much sense to 
try to run this yourself locally, but if you want to:

1) clone this repo, and cd into it (cd birthdayTexter)

2) Register for a twilio account and phone number (to send texts from)

3) run yarn install (to get all dependencies)

4) create a .env file in the root of your project

add these things to your .env file:

PORT=3000
HOST_NAME=127.0.0.1

DB_HOST=localhost
DB_NAME=Whatever you like (birthdaytexter)
DB_USER= your db user
DB_PASSWORD=

TWILIO_SID=find this in your newly created twilio account
TWILIO_TOKEN=this too
TWILIO_PHONE=this as well, though you actually need to pick a number yourself first
JOHNS_NUMBER=This is where you should put your personal number (the one that will recieve the texts)

6) Create a local pg database called whatever you put as DB_NAME

7) run knex migrate:latest

8) Adjust seeds/sample_data.js so that there is at least one birthday tomorrow

9) run knex seed:run

10) run node bin/checkDates and you should get a text telling you the name of whoever's birthday tomorrow!

