(function () {
  const presentation = document.querySelector(".presentation");
  const presentationMainImage = document.getElementById(
    "presentation-main-img"
  );
  const presentationListImages = presentation.querySelectorAll(
    ".images__item-control"
  );

  presentationListImages.forEach((item) => {
    item.addEventListener("click", (event) => {
      const currentSrcImage = item.nextElementSibling.getAttribute("src");
      presentationMainImage.setAttribute("src", currentSrcImage);
    });
  });
})();
