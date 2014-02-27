function draw() {
    var canvas = document.getElementById("game");

    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "#87CEEB";
        ctx.fillRect (0, 0, 800, 600);

        var sprite = new Image();
        sprite.src = "assets/duckhunt.png";
        sprite.onload = function spliceSprite() {

            ctx.drawImage(sprite, 0, 270, 80, 130, 40, 150, 240, 390);
            ctx.drawImage(sprite, 0, 700, 800, 200, 0, 400, 800, 200);
            ctx.drawImage(sprite, 0, 0, 60, 60, 300, 425, 200, 200);
            ctx.drawImage(sprite, 0, 150, 40, 40, 300, 150, 70, 70);
            ctx.drawImage(sprite, 35, 115, 40, 40, 430, 330, 80, 80);
            ctx.drawImage(sprite, 170, 150, 40, 40, 500, 150, 80, 80);
            ctx.drawImage(sprite, 335, 115, 38, 40, 600, 50, 76, 80);
            ctx.drawImage(sprite, 265, 190, 30, 40, 670, 300, 60, 80);

        }

    }
}

  
