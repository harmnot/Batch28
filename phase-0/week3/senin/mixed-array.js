function dataHandling2(data) {
  data.splice(1,1, "Roman Alamsyah Elsharawy")
  data.splice(2, 1, "Provinsi Bandar Lampung");
  data.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(data);

  var date = data[3].split("/");
  // console.log( date );
  switch (date[1]) {
    case "01":
      date[1] = "Januari"
      break;
    case "02":
      date[1] = "Februari"
      break;
    case "03":
      date[1] = "Maret"
      break;
    case "04":
      date[1] = "April"
      break;
    case "05":
      date[1] = "Mei"
      break;
    case "06":
      date[1] = "Juni"
      break;
    case "07":
      date[1] = "Juli"
      break;
    case "08":
      date[1] = "Agustus"
      break;
    case "09":
      date[1] = "September"
      break;
    case "10":
      date[1] = "Oktober"
      break;
    case "11":
      date[1] = "November"
      break;
    case "12":
      date[1] = "Desember"
      break;
  };
  console.log(date[1]);

  var sorting = data[3].split("/").sort((a, b) => b - a);
  console.log(sorting);

  var addDash = data[3].split("/");
  console.log(addDash.join("-"));

  var diSlice = data[1];
  console.log(diSlice.slice(0,15));
};

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
console.log(dataHandling2(input));
