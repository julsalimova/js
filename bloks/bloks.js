const quantitySelector = document.querySelector(".quantity-selector");
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector(".blocks");

  
  quantitySelector.addEventListener("change", (e) => {
  const quantity = e.target.value;
  let markup = "";

  for (let i = 0; i < quantity; i++) {
    const block = document.createElement("div");
    block.className = "item";
    block.innerText = i + 1;

    markup += block.outerHTML;
  }
  blocksContainer.innerHTML = markup;
  
})




