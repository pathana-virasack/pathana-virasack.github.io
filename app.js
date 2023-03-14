// animation titre H1

const txtTitleAnim = document.querySelector("#main-title");
new Typewriter(txtTitleAnim, {
  // loop: true,
  deleteSpeed: 60,
})
  .changeDelay(60)
  .typeString("Bonjour moi c'est Pathana ")
  .pauseFor(300)
  .typeString("<strong>, Dev Front-END</strong> !")
  .pauseFor(1000)
  .deleteChars(12)
  .typeString("<strong><span style='color: #ff6910'> HTML</span> </strong> !")
  .pauseFor(1000)
  .deleteChars(7)
  .typeString("<strong><span style='color: #2965f1'> CSS</span> </strong> !")
  .pauseFor(1000)
  .deleteChars(6)
  .typeString(
    "<strong><span style='color: #f0db4f'> JAVASCRIPT</span> </strong> !"
  )
  .pauseFor(1000)
  .deleteChars(13)
  .typeString("<strong><span style='color: #36a3c0'> REACT</span> </strong> !")
  .start();

// Mouse-effect

const mousesEffect = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mousesEffect.forEach((mouse) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
  });
});

// Navbar-effect

const sidebar = document.querySelector("#side-bar");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  // Img profil effect

  let scrollImg =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollImg > 1.1) {
    presentationImg.style.opacity = 1;
    presentationImg.style.transform = "none";
  } else {
    presentationImg.style.opacity = 0;
    presentationImg.style.transform = "translateX(-200px)";
  }
});
