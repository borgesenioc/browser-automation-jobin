#!/bin/bash

# Path to Chrome browser
CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# Chrome profile for the account
PROFILE_DIR="Profile 1"

# URL to open
URL="https://my.jobin.cloud"

# Open Chrome with the specified profile
"$CHROME_PATH" --profile-directory="$PROFILE_DIR" "$URL"
