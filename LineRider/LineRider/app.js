var canvas;
var ctx;
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1280, 720);
    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(400, 400, 100, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();
    var shape;
    for (var i = 0; i < shape_array.length; i++) {
        shape = shape_array[i];
        shape.draw();
        shape.x = shape.x + 1;
    }
}
var shape_array = Array();
var cCircle = /** @class */ (function () {
    function cCircle(x, y, radius, lineWidth, color) {
        var _this = this;
        if (lineWidth === void 0) { lineWidth = 2; }
        if (color === void 0) { color = "red"; }
        this.x = 0;
        this.y = 0;
        this.radius = 10;
        this.lineWidth = 2;
        this.color = "red";
        this.draw = function () {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = _this.color;
            ctx.lineWidth = _this.lineWidth;
            ctx.arc(_this.x, _this.y, _this.radius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.restore();
        };
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = lineWidth;
    }
    return cCircle;
}());
window.onload = function () {
    canvas = document.getElementById('cnvs');
    ctx = canvas.getContext("2d");
    shape_array.push(new cCircle(500, 500, 50));
    shape_array.push(new cCircle(50, 100, 150, 5, "green"));
    shape_array.push(new cCircle(50, 100, 70, 1, "white"));
    gameLoop();
};
//# sourceMappingURL=app.js.map