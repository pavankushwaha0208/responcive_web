// tab links & tabContants
let tablinks = document.getElementsByClassName("tab-links");
let tabContants = document.getElementsByClassName("tab-contents");

//o n openTab function call

function openTab(tabname) {
  for (const item of tablinks) {
    item.classList.remove("active-link");
  }
  for (const item of tabContants) {
    item.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
