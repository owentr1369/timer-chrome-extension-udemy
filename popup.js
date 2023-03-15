const timeElement = document.getElementById("time");
const currentTime = new Date().toLocaleTimeString();

timeElement.innerHTML = `<h3>The time is ${currentTime}</h3>`;

chrome.action.setBadgeText(
  {
    text: "TIME",
  },
  () => {
    console.log("Finished setting badge text.");
  }
);
