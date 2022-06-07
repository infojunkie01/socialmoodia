// Helpers for formatting dates or handling plurals (ie. 1 follower or 2 followers)
module.exports = {
    format_date: date => {
      var moment = require('moment'); // require
      
      return moment(date).fromNow();
      // moment(new Date(), "MM-DD-YYYY").toString();
      // `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
  
      return word;
    },
    is_equal: (user, session) => {
      if (user === session){
        return true;
      }
      return false;
    }
}