# HubSpot Project Solution


## Overview
It’s your first day at HubSpot, and you’re in charge of writing the logic to send invitations to a special two-day event in each country for HubSpot’s partners in those countries. We need to find the dates that’ll work best based on survey results that partners have sent in and determine how many people can attend.

You’re provided with an API that gives you a list of partners, their countries, and which dates they’re available in ISO 8601 format.

Another team will send out the invitations, but you need to tell them when we should host the event and who should attend by POSTing to an API.

The date you send in for the country should be the starting date of the two day period where the most partners can make it for both days in a row. In case of multiple dates with the same number of partners, pick the earlier date. If there are no two days in a row when any partners can make it, return null.


## Endpoints
`https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=${USER_KEY}`
`https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=${USER_KEY}`


## Before Running
- Please have the following installed and upgraded to their respective version or newer
    - Node 15.0.1 
        - checking via `node -v` 
    - NPM 7.0.3
        - checking via `npm -v`


## Installation 
- Options to access the project 
    * `git clone https://github.com/Yves-UMBC/hubspot.git` if you wish to clone the project from terminal 
    * download the zip file from https://github.com/Yves-UMBC/hubspot, then run `tar xvzf hubspot-master.zip > hubspot` to decompress the project root directory   
- run `cd hubspot` to go to the project root directory 
- run `npm install` to install npm module dependencies
- run `sudo npm install -g` to install the program 


## Run Program
- `run-search`


## Clean up (optional)
- run `npm uninstall -g hubspot` to uninstall the program
- `cd ..`
- run `sudo rm -r hubspot` to delete the project

