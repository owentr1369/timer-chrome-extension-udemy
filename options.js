const inputEl = document.getElementById("nameInput");
const btnEl = document.getElementById("saveBtn");
const timeInput = document.getElementById("timeInput");

btnEl.addEventListener("click", () => {
  const notificationTime = timeInput.value;
  const name = inputEl.value;
  chrome.storage.sync.set(
    {
      name,
      notificationTime,
    },
    () => {
      console.log(`Name is set to ${name}`);
    }
  );
});

chrome.storage.sync.get(["name", "notificationTime"], (res) => {
  inputEl.value = res.name ?? "";
  timeInput.value = res.notificationTime ?? 1000;
});
