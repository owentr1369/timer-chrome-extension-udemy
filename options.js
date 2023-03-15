const inputEl = document.getElementById("nameInput");
const btnEl = document.getElementById("saveBtn");

btnEl.addEventListener("click", () => {
  const name = inputEl.value;
  chrome.storage.sync.set(
    {
      name,
    },
    () => {
      console.log(`Name is set to ${name}`);
    }
  );
});

chrome.storage.sync.get(["name", "test"], (res) => {
  const name = res.name ?? "";
  inputEl.value = name;
});
