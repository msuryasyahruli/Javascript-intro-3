const axios = require("axios");
axios
  .get("https://api.nationalize.io?name=nathaniel")
  .then(function (res) {
    res.data.country.map((item) => {
      console.log(`country : ${item.country_id}`);
    })
  })
  .catch(function (err) {
    console.log(err);
  });

// const axios = require("axios");
// axios
//   .get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
//   .then(function (res) {
//     res.data.data.map((item) => {
//       console.log(`year : ${item.Year}`);
//     });
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
