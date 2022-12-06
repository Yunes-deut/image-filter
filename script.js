const filterItems = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");
const prevwosBoxEl = document.querySelector(".prevwos-box");
const imageselectedEl = document.querySelector(".imageselected img");
const closeEl = document.querySelector(".header i");
const imageCategory = document.querySelector(".imgcategory");

window.onload = () => {
  filterItems.onclick = (selectItem) => {
    if (selectItem.target.classList.contains("item")) {
      filterItems.querySelector(".active").classList.remove("active");
      selectItem.target.classList.add("active");
      let filterName = selectItem.target.dataset.name;
      filterImg.forEach((el) => {
        let imageTarget = el.dataset.name;
        if (imageTarget != filterName && filterName != "all") {
          el.style.display = "none";
        } else {
          el.style.display = "block";
        }
      });
    }
  };
  filterImg.forEach((element) => {
    element.addEventListener("click", (e) => {
      // prevwosBoxEl.style.display="block";
      prevwosBoxEl.style.top = "50%";
      imageselectedEl.src = e.target.src;
      imageCategory.innerHTML = e.target.parentElement.dataset.name;
    });
  });
  closeEl.addEventListener("click", () => {
    // prevwosBoxEl.style.display="none";
    prevwosBoxEl.style.top = "-50%";
  });
};
