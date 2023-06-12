const cekharikerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject("Hari ini bukan hari kerja");
      }
    }, 3000);
  });
};

//menggunakan then catch
cekharikerja("senin")
  .then((res) => {
    console.log(`Hari: ${res}`);
  })
  .catch((err) => {
    console.log(err);
  });

//memnggunakan try catch
const harikerja = async (day) => {
  try {
    const cekhari = await cekharikerja(day);
    console.log(`Hari: ${cekhari}`);
  } catch (error) {
    console.log(error);
  }
};
harikerja("minggu");
