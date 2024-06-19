I need to create an application that automates browser actions that I have to perform manually today to run Jobin on my Linkedin account. For example:

Jobin only runs tasks if my browser is open as well as my Linkedin account. I need it to run on a remote server, so tasks run while I don't have my computer on.
Linkedin flags and suspends my account if its open 24h a day and all days, so I need the app to open the browser, Jobin and Linkedin on a programmed interval and close it after a certain period of time.
I have 16 active Linkedin accounts, which each operate in a specific Chrome user profile, but I only have 10 Jobin premium licenses. So I need the app to transfter licenses within Jobin as they are opened, in an alternated schedule.
Eventually, Jobin runs into execution errors, so I need to manually archive or try to run the task again. I need the app to push these buttons automatically.
If my pending Linkedin invitations reach 900, Jobin has a feature where I can withdraw the oldest 600 invitations. I need the app to run that process automatically.
If there are any errors while logging into Linkedin, I need the app to stop trying to log in and send me a warning.
I know Javascript, Node, and Express, so that is my preferred structure for now.
If possible, I'd like to run this application from the cheapest structure possible. If Github can host the files and most of the application, that would be great.
I need the app to run from an IP address that has the location set to New York City


https://chatgpt.com/share/e/e020baa3-267b-4c44-b975-1e32d54e5378


jobin-automation/
│
├── .env
├── app.js
├── schedule.js
├── jobin.js
├── linkedin.js
├── license-manager.js
├── error-handler.js
└── config/
    ├── accounts.json
    └── config.json
