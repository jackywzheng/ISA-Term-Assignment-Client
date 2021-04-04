// XHTTP stuff
const xhttp = new XMLHttpRequest();
const endPointRoot = "https://comp4537-u2server.herokuapp.com/API/v1/"


// GET function
function get() {
  xhttp.open("GET", endPointRoot + "requests", true)
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // this.responseText is a string
      let req_JSON = JSON.parse(this.responseText)
      console.log(req_JSON)
      let text = "<table><tr><th>Method</th><th>Endpoint</th><th>Requests</th></tr>"
      for (i in req_JSON) {
        text += `<tr><td>${req_JSON[i].method}</td><td>${req_JSON[i].endpoint}</td><td>${req_JSON[i].count}</td></tr>`
      }
      document.getElementById("response").innerHTML = text + "</table";
    }
  }
}

get();