# Check paribucineverse.com ticket 

This is a simple script to check ticket of movie is available or not.

paribucineverse.com is a movie ticket booking website in Turkey. They didn't provide any way to check ticket availability. So I wrote a simple script to check ticket availability.

# requirements
- nodejs
- telegram bot

# How to use
- Clone this repository
- Create a telegram bot and get the token
- Create a telegram channel and get the channel id
- update .env file with your token and channel id and movie url
- Run `npm install`
- Run `node index.js`

You can add cron job to run this script every 5 minutes or one hour.

# How to get channel id
check this link: https://stackoverflow.com/questions/32423837/telegram-bot-how-to-get-a-group-chat-id