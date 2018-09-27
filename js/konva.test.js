// // var velocity = 50;

// // var anim = new Konva.Animation(function(frame) {
// //   var dist = velocity * (frame.timeDiff / 1000);
// //   node.move(dist, 0);
// // }, layer);

// // anim.start();

// //定义模拟数据数字
// var numTest1 = 8888;

// //定时更新数字值
// function tick() {
//   //模拟数据更新
//   numTest1 += 1;

//   //定时刷新数字副舞台
//   var width = window.innerWidth;
//   var height = window.innerHeight;

//   var numTextStage = new Konva.Stage({
//       container: 'container',
//       // width: width,
//       // height: height
//       width: 400,
//       height: 280
//   });

//   var numTextLayer = new Konva.Layer();
//   numTextStage.add(numTextLayer);

//   var simpleText1 = new Konva.Text({
//       x: 43,
//       y: 25,
//       text: numTest1 >= 9999 ? 9999 : numTest1 + '',
//       fontSize: 34,
//       // fontFamily: 'sch_location_font',
//       // fill: '#ffffff'
//       fill: 'red'
//   });
//   numTextLayer.add(simpleText1);
  
//   // //悬停更改鼠标样式
//   // simpleText1.on('mouseover', function () {
//   //     document.body.style.cursor = 'pointer';
//   // });
//   // simpleText1.on('mouseout', function () {
//   //     document.body.style.cursor = 'default';
//   // });
//   // simpleText1.on('click', function () {
//   //     window.open("https://www.baidu.com");
//   // });

// }
// // setInterval(tick, 1000);
// tick();


// FONT LOADING DETECTION CODE:
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
ctx.font = 'normal 20px Kavivanar';

var isFontLoaded = false;
var TEXT_TEXT = 'Some test text;';
var initialMeasure = ctx.measureText(TEXT_TEXT);
var initialWidth = initialMeasure.width;

// here is how the function works
// different fontFamily may have different width of symbols
// when font is not loaded a browser will use startard font as a fallback
// probably Arial
// when font is loaded measureText will return another width
function whenFontIsLoaded(callback, attemptCount) {
    if (attemptCount === undefined) {
        attemptCount = 0;
    }
    if (attemptCount >= 20) {
        callback();
        return;
    }
    if (isFontLoaded) {
        callback();
        return;
    }
    const metrics = ctx.measureText(TEXT_TEXT);
    const width = metrics.width;
    if (width !== initialWidth) {
        isFontLoaded = true;
        callback();
    } else {
        setTimeout(function () {
            whenFontIsLoaded(callback, attemptCount + 1);
        }, 1000);
    }
}

// NOW build our stage

var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
});

var layer = new Konva.Layer();
stage.add(layer);
var text = new Konva.Text({
    x: 50,
    y: 50,
    fontSize: 40,
    text: 'A text with custom font.',
    width: 250
});

layer.add(text);
layer.draw();

// whenFontIsLoaded(function () {
//     // set font style when font is loaded
//     // so Konva will recalculate text wrapping if it has limited width
//     text.fontFamily('Kavivanar');
//     layer.draw();
// })