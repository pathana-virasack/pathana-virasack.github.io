// animation titre H1

const txtTitleAnim = document.querySelector("h1");
new Typewriter(txtTitleAnim, {
  // loop: true,
  deleteSpeed: 60,
})
  .changeDelay(60)
  .typeString("Bonjour moi c'est Pathana")
  .pauseFor(300)
  .typeString("<strong>, Dev Full-Stack</strong> !")
  .pauseFor(1000)
  .deleteChars(13)
  .typeString("<strong><span style='color: #ff6910'> HTML</span> </strong> !")
  .pauseFor(1000)
  .deleteChars(7)
  .typeString("<strong><span style='color: #2965f1'> CSS</span> </strong> !")
  .pauseFor(1000)
  .deleteChars(6)
  .typeString(
    "<strong><span style='color: #f0db4f'> JAVASCRIPT</span> </strong> !"
  )
  .start();

// Mouse-effect

const mousesEffect = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mousesEffect.forEach((mouse) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
  });
});
