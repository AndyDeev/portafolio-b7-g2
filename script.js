//alert("Hola");

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Andrea Ojeda')
  .pauseFor(300)
  .deleteChars(12)
  .typeString('<strong>Desarrolladora Web</strong> ')
  .typeString('<strong>FRONTEND <span style="color: #28A745;">JR</span> !</strong>')
  .pauseFor(1000)
  .start();
