// import "./header.js";

import "./noralize.css";
import "./style.css";

const tabs = document.querySelector(".tabs"),
  tabsButtons = tabs.querySelectorAll(".tabs__button"),
  tabsContent = tabs.querySelectorAll(".tabs__content");

tabsButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    tabsButtons.forEach((tabButton) =>
      tabButton.classList.remove("tabs__button--active")
    );
    tabsContent.forEach((tabContent) =>
      tabContent.classList.remove("tabs__content--active")
    );

    button.classList.add("tabs__button--active");
    tabsContent[index].classList.add("tabs__content--active");
  });
});
