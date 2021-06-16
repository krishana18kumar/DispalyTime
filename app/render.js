const hh = document.querySelector("#hh");
const mm = document.querySelector("#mm");
const ss = document.querySelector("#ss");

setInterval(() => {
  let date = new Date();

  let hr = "" + date.getHours();
  let mn = "" + date.getMinutes();
  let sc = "" + date.getSeconds();

  if (hr.length === 1) {
    hr = "0" + hr;
  }
  if (mn.length === 1) {
    mn = "0" + mn;
  }
  if (sc.length === 1) {
    sc = "0" + sc;
  }
  hh.innerHTML = hr;
  mm.innerHTML = mn;
  ss.innerHTML = sc;
}, 1000);
