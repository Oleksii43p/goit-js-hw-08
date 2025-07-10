const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const subtitle = item.querySelector("h2");
  const descr = item.querySelector("ul");
  console.log(`Category: ${subtitle.textContent}`);
  console.log(`Elements: ${descr.children.length}`);
});


