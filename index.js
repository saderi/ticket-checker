var axios = require('axios');
var FormData = require('form-data');
const jsdom = require("jsdom");
const dotenv = require('dotenv');
dotenv.config();

var data = new FormData();
data.append('chat_id',process.env.TELEGRAM_CHAT_ID);
data.append('text', process.env.TELEGRAM_TEXT);

var config = {
  	method: 'post',
  	url: 'https://api.telegram.org/bot'+process.env.TELEGRAM_TOKEN+'/sendMessage',
  	headers: {
  	  	  	...data.getHeaders()
  	  	},
  	  	data : data
};

const { JSDOM } = jsdom;
JSDOM.fromURL(process.env.FILM_URL, {}).then(dom => {
    var test = dom.window.document.querySelectorAll('.movie-details-header .movie-buttons a');
    if ( test[0].text == 'Bilet Al' ) {

        axios(config)
        .then(function (response) {
          	console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          	console.log(error);
        });

    }
});



