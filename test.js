function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'P.M.' : 'A.M.';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
  let time = date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime + " (Pacific Standard Time.)"
    return time;
  }
  
  var d = new Date();
  var e = formatDate(d);

  console.log(e);