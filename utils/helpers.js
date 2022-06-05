// Helpers for formatting dates or handling plurals (ie. 1 follower or 2 followers)
module.exports = {
    format_date: date => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
      ).getFullYear()}`;
    },
    format_plural: (word, amount) => {
      if (amount !== 1) {
        return `${word}s`;
      }
  
      return word;
    }
}