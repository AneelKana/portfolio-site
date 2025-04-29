document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".click-to-toggle").forEach((video) => {
    const wrapper = video.closest(".project-media");
    const overlay = video.parentElement.querySelector(".video-overlay");

    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        if (overlay) overlay.style.display = "none";

        // Expand the container smoothly
        wrapper.style.maxHeight = "250px"; /* or whatever fits your video */
      } else {
        video.pause();
        if (overlay) overlay.style.display = "block";

        // Collapse the container smoothly
        wrapper.style.maxHeight = "200px";
      }
    });
  });
});
