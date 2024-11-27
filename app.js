var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Web Jr')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrolladora Frontend Jr')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('Desarrolladora Full Stack Jr')
    .pauseFor(2500)
    .start();