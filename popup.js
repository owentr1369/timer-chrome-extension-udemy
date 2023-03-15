const timeElement = document.getElementById("time");
const nameEl = document.getElementById("name");

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

chrome.storage.sync.get(["name"], (res) => {
  const name = res.name ?? "";
  nameEl.textContent = `Your name is ${name}`;
});

console.log(this);
