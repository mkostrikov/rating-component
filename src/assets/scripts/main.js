const ratingComponent = {
  rating: null,

  init(node) {
    let form = node.querySelector("#rating-component-form");
    let output = node.querySelector("#rating-component-output");

    if (!(form && form.nodeName.toLowerCase() === "form" && output)) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(form);

      for (const [key, val] of data) {
        if (key === "rating") this.rating = val;
      }

      if (!this.rating) return;

      node.classList.add("b-rating-component--submit");
      output.textContent = this.rating;
    });
  },
};

ratingComponent.init(document.querySelector("#rating-component"));
