//из RGB в HTML
function colorFromRGBToHTML(rgb) {
    let red = normalize(rgb.r);
    let green = normalize(rgb.g);
    let blue = normalize(rgb.b);
 
    return '#' + pad(red.toString(16)) + pad(green.toString(16)) + pad(blue.toString(16)); 
 }
 
 function pad(string) {
     return string.length > 1 ? string.toUpperCase() : "0" + string.toUpperCase();
 }
 
 function normalize(color) {
     return (color < 1.0 && color > 0.0) ? Math.floor(color * 255) : Math.max(0,Math.floor(color));
 }

/////////////////////////////

function getRandomColorRGB() {
    let temp = function () { return Math.floor(Math.random() * 256) };
    return color(temp(), temp(), temp())
}

function getRandomColorHTML() {
    let letters = '0123456789ABCDEF';
    let color1 = '#';
    for (var i = 0; i < 6; i++) {
        color1 += letters[Math.floor(Math.random() * 16)];
    }
    return color1;
}

/////////////////////////////////////

// коэф для микса двух цветов. Опирается на первый цвет
function calcKoef(koef1, koef2) {
    let all = koef1 + koef2
    return koef1 / all
}
function mixTwoColor(color1, color2, koef) {
    let r = color1.r * koef + color2.r * (1 - koef)
    let g = color1.g * koef + color2.g * (1 - koef)
    let b = color1.b * koef + color2.b * (1 - koef)
    return color(r, g, b)
}