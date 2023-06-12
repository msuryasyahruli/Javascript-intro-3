const axios = require("axios");
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then( (res) => {
    res.data.map((item) => {
      console.log(`name : ${item.name}`);
    });
  })
  .catch( (err) => {
    console.log(err);
  });
