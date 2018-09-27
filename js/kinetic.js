// //在页面加载时进行绘图 
// window.onload = function() {
//     //创建Kinetic舞台，绑定我们添加的<div>容器 
//     var stage = new Kinetic.Stage({
//         container: "container", //<div>的id 
//         width: 600, //创建的舞台宽度 
//         height: 400 //创建的舞台高度 
//     });

//     //创建Kinetic用户层
//     var layer = new Kinetic.Layer();
//     //创建一个Kinetic矩形对象 
//     var rect = new Kinetic.Rect({
//         x: 200, //矩形左上角x坐标 
//         y: 150, //矩形左上角y坐标 
//         width: 200, //矩形的宽度 
//         height: 100, //矩形的高度 
//         fill: "red", //矩形的填充色 
//         stroke: "black", //矩形边缘线的颜色
//         strokeWidth: 4 //矩形边缘线的宽度
//     });
//     //向用户层中添加上面的矩形 
//     layer.add(rect);
//     //将上面的用户层添加到舞台上 
//     stage.add(layer);
//     stage.draw();
// };


// window.onload = function() {
//     //创建舞台
//     var stage = new Kinetic.Stage({
//         container: "container",
//         width: 600,
//         height: 400
//     });

//     var layer = new Kinetic.Layer();
//     //创建config参数
//     var config = {
//         //绘图方法，画一个矩形
//         drawFunc: function() {
//             var context = this.getContext();
//             context.rect(200, 150, 200, 100);
//             this.fill();
//             this.stroke();
//         },
//         //填充色
//         fill: "green",
//         //边缘线颜色
//         stroke: "black",
//         //边缘线宽度
//         strokeWidth: 4
//     };
//     //创建Shape对象
//     var rectShape = new Kinetic.Shape(config);
//     //把Shape对象添加到层里
//     layer.add(rectShape);
//     //将层添加到舞台中
//     stage.add(layer);
// };


// window.onload = function () {
//     var stage = new Kinetic.Stage({
//         container: "container",
//         width: 600,
//         height: 400
//     });

//     var layer = new Kinetic.Layer();

//     //创建一个要加进组中的圆
//     var circle = new Kinetic.Circle({
//         x: 200,
//         y: 100,
//         radius: 50,
//         fill: "red"
//     });

//     //创建一个要加进组中的矩形
//     var rect = new Kinetic.Rect({
//         x: 300,
//         y: 200,
//         width: 100,
//         height: 100,
//         fill: "blue"
//     });

//     //创建group对象
//     var group = new Kinetic.Group();
//     //把多个图形对象添加到group里
//     group.add(circle);
//     group.add(rect);
//     //把group对象添加到层里
//     layer.add(group);
//     //将层添加到舞台中
//     stage.add(layer);
// };


// window.onload = function () {
//     var stage = new Kinetic.Stage({
//         container: "container",
//         width: 600,
//         height: 400
//     });

//     var layer = new Kinetic.Layer();
//     //创建第一个矩形对象的config参数
//     var config1 = {
//         x: 100,
//         y: 150,
//         width: 100,
//         height: 100,
//         //填充色
//         fill: "blue"
//     };

//     //创建第一个矩形对象
//     var rect1 = new Kinetic.Rect(config1);
//     //创建第二个矩形对象的config参数
//     var config2 = {
//         x: 400,
//         y: 150,
//         width: 100,
//         height: 100,
//         //填充色
//         fill: "red"
//     };

//     //创建第二个矩形对象
//     var rect2 = new Kinetic.Rect(config2);

//     //修改第二个矩形对象的颜色
//     rect2.setFill("green");
//     layer.add(rect1);
//     layer.add(rect2);
//     stage.add(layer);
// };


//图像填充
/* function draw(image) {
    var stage = new Kinetic.Stage({
        container: "container",
        width: 600,
        height: 400
    });
    var layer = new Kinetic.Layer();
    //创建第一个矩形config参数
    var config1 = {
        x: 50,
        y: 100,
        width: 180,
        height: 180,
        //填充图像
        fill: {
            image: image,
            offset: {
                x: 0,
                y: 0
            }
        }
    };
    var rect1 = new Kinetic.Rect(config1);
    //创建第二个矩形config参数
    var config2 = {
        x: 350,
        y: 100,
        width: 180,
        height: 180,
        //填充图像，并将填充图像向右下移动50个像素
        fill: {
            image: image,
            offset: {
                x: 0,
                y: 0
            }
        }
    };
    var rect2 = new Kinetic.Rect(config2);
    //将填充图像向左上移动50个像素
    rect2.setFill({
        // image : image,
        offset: {
            x: -50,
            y: -50
        }
    });
    layer.add(rect1);
    layer.add(rect2);
    stage.add(layer);
}
window.onload = function () {
    var image = new Image();
    image.onload = function () {
        draw(image);
    };
    image.src = "../img/微信截图_20180904110949.jpg";
}; */


//实例
/**
 * 利用canvas画图像
 */
/* function draw(image) {
    //创建Kinetic舞台，绑定我们添加的<div>容器 
    var stage = new Kinetic.Stage({
        container: "container",
        width: 600,
        height: 400
    });
    //创建Kinetic用户层
    var layer = new Kinetic.Layer();
    //创建第一个矩形config参数
    var config1 = {
        x: 50,
        y: 100,
        width: 180,
        height: 180,
        //填充图像
        fill: {
            image: image,
            offset: {
                x: 0,
                y: 0
            }
        }
    };
    var rect1 = new Kinetic.Rect(config1);
    // //创建第二个矩形config参数
    // var config2 = {
    //     x: 350,
    //     y: 100,
    //     width: 180,
    //     height: 180,
    //     //填充图像，并将填充图像向右下移动50个像素
    //     fill: {
    //         image: image,
    //         offset: {
    //             x: 0,
    //             y: 0
    //         }
    //     }
    // };
    // var rect2 = new Kinetic.Rect(config2);
    // //将填充图像向左上移动50个像素
    // rect2.setFill({
    //     // image : image,
    //     offset: {
    //         x: -50,
    //         y: -50
    //     }
    // });
    layer.add(rect1);
    // layer.add(rect2);
    stage.add(layer);
}
window.onload = function () {
    var image = new Image();
    image.onload = function () {
        draw(image);
    };
    image.src = "../img/微信截图_20180904110949.jpg";
}; */


// function draw(image) {
//     //创建Kinetic舞台，绑定到添加的<div>容器 
//     var stage = new Kinetic.Stage({
//         container: "container",
//         width: 600,
//         height: 400
//     });
//     //创建Kinetic用户层
//     var layer = new Kinetic.Layer();
//     //创建第一个矩形config参数
//     var config1 = {
//         x: 80,
//         y: 80,
//         width: 450,
//         height: 300,
//         //填充图像
//         fill: {
//             image: image,
//             //offset图像开始填充的位置偏移量
//             offset: {
//                 x: 0,
//                 y: 0
//             }
//         }
//     };
//     var rect1 = new Kinetic.Rect(config1);
//     // rect1.setFill({
//     //     image : image2,
//     //     offset: {
//     //         x: -50,
//     //         y: -50
//     //     }
//     // });
//     layer.add(rect1);
//     stage.add(layer);
// }
// window.onload = function () {
//     var image = new Image();
//     image.onload = function () {
//         draw(image);
//     };
//     image.src = "../img/gnw-sch-bg.jpg";
//     // image.src = "../img/微信截图_20180904110949.jpg";
    
//     // draw(image1,image2);

//     // image1.onload = function() {
//     //     var c=document.getElementById("canvas");
//     //     var ctx=c.getContext("2d");
//     //     ctx.drawImage(image1,10,10);
//     // } 
// };