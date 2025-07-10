const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", (event) => {
  const value = event.currentTarget.value.trim();
  refs.nameOutput.textContent = value || "Anonymous";
});
