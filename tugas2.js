const getMonth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      let month = [
        "januari",
        "februari",
        "maret",
        "april",
        "mei",
        "juni",
        "juli",
        "agustus",
        "september",
        "oktober",
        "november",
        "desember",
      ];
      if (!error) {
        resolve(month);
      } else {
        reject(new Error("Sorry data not found"), []);
      }
    }, 400);
  })
};

getMonth()
  .then((res) => {
    let month = res.map((item) => {
      console.log(`bulan ${item}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
