/*
  Когда файл video.mp4 появится рядом с index.html,
  скрипт автоматически покажет видеоплеер.

  QR-код при этом НЕ меняется.
*/

const videoSection = document.getElementById("videoSection");
const video = document.getElementById("video");

video.addEventListener("loadedmetadata", () => {
  videoSection.classList.add("active");
});

video.addEventListener("error", () => {
  videoSection.classList.remove("active");
});
