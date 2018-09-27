    /**
     * 测试定义模拟数据显示数字值
     */

    //缺省数据 接口返回的数据 当numTest1 2 3 为空时 转换成0
    var numTest1 = 8;
    var numTest2 = 8;
    var numTest3 = 6;

    var numTest4 = 2;
    var numTest5 = 2;
    var numTest6 = 2;
    var numTest7 = 2;

    //模拟接口传数据过来传输最近的进入场馆的人员信息
    //数据 所需内容为 姓名 进入场馆 进入时间
    //A1 篮球馆  A2 图书馆 A3 活动室
    //随机模拟数据
    function getRandomTime() {
        var rndTime = "";
        var mm=Math.floor(Math.random() * 23+1);
        var nn=Math.floor(Math.random() * 60);
        rndTime += (mm<10?'0'+mm:mm)+':'+(nn<10?'0'+nn:nn);
        return rndTime;
    }
    function getRandomName() {
        var nameTags=['张*','王*','李*','宋*','刘*','蔡*','范*','洪*','林*'];
        var nameEnds=['强','豪','东','明','杰','雨','飞','龙','军','文','鹏','岩','晏','通','辉'];
        var rndName = "";
        var ll=nameTags[Math.floor(Math.random()*9)];
        var ee=nameEnds[Math.floor(Math.random()*15)];
        rndName += ll+ee;
        return rndName;
    }
    function getRandomPlace() {
        var placeTags=['篮球馆','图书馆','活动室'];
        var rndPlace = "";
        var ss=placeTags[Math.floor(Math.random()*3)];
        rndPlace += ss;
        return rndPlace;
    }
    function getRandomArray(){
        var rndArray=[];
        rndArray=[{time:getRandomTime(),name:getRandomName(),place:getRandomPlace()},
            {time:getRandomTime(),name:getRandomName(),place:getRandomPlace()},
            {time:getRandomTime(),name:getRandomName(),place:getRandomPlace()},
            {time:getRandomTime(),name:getRandomName(),place:getRandomPlace()},
            {time:getRandomTime(),name:getRandomName(),place:getRandomPlace()}]; 
        return rndArray;
    }
    // console.log(getRandomArray());
    // console.log(getRandomArray()[0]);
    // console.log(JSON.stringify(getRandomArray()));


    //先加载主舞台
    var width = window.innerWidth;
    var height = window.innerHeight;
    var stage = new Konva.Stage({
        container: 'demo1',
        width: 1366,
        height: 768
    });
    stage.scale({
        x: width/1366,
        y: height/768
    });
    var layer = new Konva.Layer();
    stage.add(layer);

    /**
     * 学校背景图层设置图层大小 background
     */
    var backgroundImg = new Konva.Image({
        width: 1366,//图层左右宽度
        height: 768
    });
    //学校背景图层左右移动设置
    var backgroundGroup = new Konva.Group({
        x: 0, //图层左右距离设置
        y: 0,
        // draggable: true //可移动编辑
    });
    layer.add(backgroundGroup);
    backgroundGroup.add(backgroundImg);
    //加载校园背景图
    var imageObj = new Image();
    imageObj.onload = function () {
        backgroundImg.image(imageObj);
        layer.draw();
    };
    imageObj.src = '../img/背景.png';


    /**
     * 1.篮球馆场地图层设置图层大小 basketballGym
     */
    var basketballGymImg = new Konva.Image({
        width: 138,
        height: 100
    });
    //追加鼠标悬浮事件
    basketballGymImg.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    basketballGymImg.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    basketballGymImg.on('click', function () {
        window.open("https://www.baidu.com");
    });
    //篮球馆场地图层左右移动设置
    var basketballGymGroup = new Konva.Group({
        x: 370, //图层左右距离设置
        y: 240,
        //draggable: true//可移动编辑
    });
    layer.add(basketballGymGroup);
    basketballGymGroup.add(basketballGymImg);
    //加载篮球馆背景图片
    var basketballGymImage = new Image();
    basketballGymImage.onload = function () {
        basketballGymImg.image(basketballGymImage);
        layer.draw();
    };
    basketballGymImage.src = '../img/篮球馆.png';
    //a.篮球馆标签信息
    //文字标签框
    var basketballGymLableImg = new Konva.Image({
        width: 50,
        height: 20
    });
    //追加鼠标悬浮事件
    basketballGymLableImg.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    basketballGymLableImg.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    basketballGymLableImg.on('click', function () {
        window.open("https://www.baidu.com");
    });
    var basketballGymLableGroup = new Konva.Group({
        x: 415, //图层左右距离设置
        y: 237,
    });
    layer.add(basketballGymLableGroup);
    basketballGymLableGroup.add(basketballGymLableImg);

    var basketballGymLableImage = new Image();
    basketballGymLableImage.onload = function () {
        basketballGymLableImg.image(basketballGymLableImage);
        layer.draw();
    };
    basketballGymLableImage.src = '../img/篮球馆1.png';
    //标签文字
    var basketballGymLableText = new Konva.Text({
        x: 419,
        y: 240,
        text: '篮球馆',
        fontSize: 14,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(basketballGymLableText);
    //追加鼠标悬浮事件
    basketballGymLableText.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    basketballGymLableText.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    basketballGymLableText.on('click', function () {
        window.open("https://www.baidu.com");
    });
    //篮球logo
    var basketballGymLogoImg = new Konva.Image({
        width: 22,
        height: 22
    });
    //追加鼠标悬浮事件
    basketballGymLogoImg.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    basketballGymLogoImg.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    basketballGymLogoImg.on('click', function () {
        window.open("https://www.baidu.com");
    });
    var basketballGymLogoGroup = new Konva.Group({
        x: 427, //图层左右距离设置
        y: 265,
    });
    layer.add(basketballGymLogoGroup);
    basketballGymLogoGroup.add(basketballGymLogoImg);
    //添加图片路径
    var basketballGymLogoImage = new Image();
    basketballGymLogoImage.onload = function () {
        basketballGymLogoImg.image(basketballGymLogoImage);
        layer.draw();
    };
    basketballGymLogoImage.src = '../img/篮球.png';
    
    //添加数字
    var basketNumText = new Konva.Text({
        x: 413,
        y: 293,
        text: numTest1 >= 9999 ? 9999 : numTest1 + '',
        fontSize: 28,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(basketNumText);
    //判断是几位数字 调整数字样式距离
    var str1=numTest1 >= 9999 ? '9999' : numTest1 + '';
    if(str1.length==1){
        basketNumText.x(433);
        layer.add(basketNumText);
    }else if(str1.length==2){
        basketNumText.x(427);
        layer.add(basketNumText);
    }else if(str1.length==3){
        basketNumText.x(420);
        layer.add(basketNumText);
    }else if(str1.length==4){
        basketNumText.x(414);
        layer.add(basketNumText);
    }
    //悬停更改鼠标样式
    basketNumText.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    basketNumText.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    basketNumText.on('click', function () {
        window.open("https://www.baidu.com");
    });
    //添加下角标人数文字
    var basketFootMarkText = new Konva.Text({
        x: 466,
        y: 308,
        text: '人次',
        fontSize: 10,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(basketFootMarkText);
    //判断是几位数字 调整下角文字样式距离
    if(str1.length==1){
        basketFootMarkText.x(446);
        layer.add(basketFootMarkText);
    }else if(str1.length==2){
        basketFootMarkText.x(453);
        layer.add(basketFootMarkText);
    }else if(str1.length==3){
        basketFootMarkText.x(459);
        layer.add(basketFootMarkText);
    }else if(str1.length==4){
        basketFootMarkText.x(466);
        layer.add(basketFootMarkText);
    }
    //悬停更改鼠标样式
    basketFootMarkText.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    basketFootMarkText.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    basketFootMarkText.on('click', function () {
        window.open("https://www.baidu.com");
    });
    //添加篮球馆数据的+号
    var basketPlusSignText = new Konva.Text({
        x: 465,
        y: 290,
        text: '',
        fontSize: 16,
        // fontFamily: 'sch_location_font',
        fontFamily: 'Microsoft YaHei',
        fill: '#ffffff'
    });
    layer.add(basketPlusSignText);
    //悬停更改鼠标样式
    basketPlusSignText.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    basketPlusSignText.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    basketPlusSignText.on('click', function () {
        window.open("https://www.baidu.com");
    });


    /**
     * 2.图书馆图层设置图层大小 library
     */
    var libraryImg = new Konva.Image({
        width: 138,
        height: 100
    });
    //追加鼠标悬浮事件
    libraryImg.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    libraryImg.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    libraryImg.on('click', function () {
        window.open("https://www.baidu.com");
    });
    var libraryGroup = new Konva.Group({
        x: 838, //图层左右距离设置
        y: 229,
    });
    layer.add(libraryGroup);
    libraryGroup.add(libraryImg);
    //加载对应场所2图书馆背景
    var libraryImage = new Image();
    libraryImage.onload = function () {
        libraryImg.image(libraryImage);
        layer.draw();
    };
    libraryImage.src = '../img/图书馆.png';
    //a.图书馆标签信息
    //文字标签框
    var libraryLableImg = new Konva.Image({
        width: 50,
        height: 20
    });
    //追加鼠标悬浮事件
    libraryLableImg.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    libraryLableImg.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    libraryLableImg.on('click', function () {
        window.open("https://www.baidu.com");
    });
    var libraryLableGroup = new Konva.Group({
        x: 881, //图层左右距离设置
        y: 226,
    });
    layer.add(libraryLableGroup);
    libraryLableGroup.add(libraryLableImg);

    var libraryLableImage = new Image();
    libraryLableImage.onload = function () {
        libraryLableImg.image(libraryLableImage);
        layer.draw();
    };
    libraryLableImage.src = '../img/图书馆1.png';
    //标签文字
    var libraryLableText = new Konva.Text({
        x: 885,
        y: 230,
        text: '图书馆',
        fontSize: 14,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(libraryLableText);
    //追加鼠标悬浮事件
    libraryLableText.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    libraryLableText.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    libraryLableText.on('click', function () {
        window.open("https://www.baidu.com");
    });
    //图书馆logo
    var libraryLogoImg = new Konva.Image({
        width: 24,
        height: 27
    });
    //追加鼠标悬浮事件
    libraryLogoImg.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    libraryLogoImg.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    libraryLogoImg.on('click', function () {
        window.open("https://www.baidu.com");
    });
    var libraryLogoGroup = new Konva.Group({
        x: 894.65, //图层左右距离设置
        y: 253,
    });
    layer.add(libraryLogoGroup);
    libraryLogoGroup.add(libraryLogoImg);
    //添加图片路径
    var libraryLogoImage = new Image();
    libraryLogoImage.onload = function () {
        libraryLogoImg.image(libraryLogoImage);
        layer.draw();
    };
    libraryLogoImage.src = '../img/图书.png';
    //添加数字
    var libraryNumText = new Konva.Text({
        x: 880,
        y: 283,
        text: numTest2 >= 9999 ? 9999 : numTest2 + '',
        fontSize: 28,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(libraryNumText);
    //判断是几位数字 调整数字样式距离
    var str2=numTest2 >= 9999 ? '9999' : numTest2 + '';
    if(str2.length==1){
        libraryNumText.x(902);
        layer.add(libraryNumText);
    }else if(str2.length==2){
        libraryNumText.x(895);
        layer.add(libraryNumText);
    }else if(str2.length==3){
        libraryNumText.x(888);
        layer.add(libraryNumText);
    }else if(str2.length==4){
        libraryNumText.x(880);
        layer.add(libraryNumText);
    }
    //悬停更改鼠标样式
    libraryNumText.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    libraryNumText.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    libraryNumText.on('click', function () {
        window.open("https://www.baidu.com");
    });
    //添加下角标人数文字
    var libraryFootMarkText = new Konva.Text({
        x: 932,
        y: 298,
        text: '人次',
        fontSize: 10,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(libraryFootMarkText);
    //判断是几位数字 调整下角文字样式距离
    if(str2.length==1){
        libraryFootMarkText.x(915);
        layer.add(libraryFootMarkText);
    }else if(str2.length==2){
        libraryFootMarkText.x(921);
        layer.add(libraryFootMarkText);
    }else if(str2.length==3){
        libraryFootMarkText.x(927);
        layer.add(libraryFootMarkText);
    }else if(str2.length==4){
        libraryFootMarkText.x(932);
        layer.add(libraryFootMarkText);
    }
    //悬停更改鼠标样式
    libraryFootMarkText.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    libraryFootMarkText.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    libraryFootMarkText.on('click', function () {
        window.open("https://www.baidu.com");
    });
    //添加图书馆数据的+号
    var libraryPlusSignText = new Konva.Text({
        x: 932,
        y: 280,
        text: '',
        fontSize: 16,
        // fontFamily: 'sch_location_font',
        fontFamily: 'Microsoft YaHei',
        fill: '#ffffff'
    });
    layer.add(libraryPlusSignText);
    //悬停更改鼠标样式
    libraryPlusSignText.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    libraryPlusSignText.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    libraryPlusSignText.on('click', function () {
        window.open("https://www.baidu.com");
    });


    /**
     * 3.活动室图层设置图层大小 activityRoom
     */
    var activityRoomImg = new Konva.Image({
        width: 138,
        height: 100
    });
    //追加鼠标悬浮事件
    activityRoomImg.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    activityRoomImg.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    activityRoomImg.on('click', function () {
        window.open("https://www.baidu.com");
    });
    var activityRoomGroup = new Konva.Group({
        x:1027, //图层左右距离设置
        y: 413,
    });
    layer.add(activityRoomGroup);
    activityRoomGroup.add(activityRoomImg);
    //加载对应场所3活动室背景图片
    var activityRoomImage = new Image();
    activityRoomImage.onload = function () {
        activityRoomImg.image(activityRoomImage);
        layer.draw();
    };
    activityRoomImage.src = '../img/活动室.png';
    //a.活动室标签信息
    //文字标签框
    var activityRoomLableImg = new Konva.Image({
        width: 50,
        height: 20
    });
    //追加鼠标悬浮事件
    activityRoomLableImg.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    activityRoomLableImg.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    activityRoomLableImg.on('click', function () {
        window.open("https://www.baidu.com");
    });
    var activityRoomLableGroup = new Konva.Group({
        x: 1071, //图层左右距离设置
        y: 410,
    });
    layer.add(activityRoomLableGroup);
    activityRoomLableGroup.add(activityRoomLableImg);

    var activityRoomLableImage = new Image();
    activityRoomLableImage.onload = function () {
        activityRoomLableImg.image(activityRoomLableImage);
        layer.draw();
    };
    activityRoomLableImage.src = '../img/活动室1.png';
    //标签文字
    var activityRoomLableText = new Konva.Text({
        x: 1075,
        y: 413,
        text: '活动室',
        fontSize: 14,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(activityRoomLableText);
    //追加鼠标悬浮事件
    activityRoomLableText.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    activityRoomLableText.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    activityRoomLableText.on('click', function () {
        window.open("https://www.baidu.com");
    });
    //活动室logo
    var activityRoomLogoImg = new Konva.Image({
        width: 26,
        height: 27
    });
    //追加鼠标悬浮事件
    activityRoomLogoImg.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    activityRoomLogoImg.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    activityRoomLogoImg.on('click', function () {
        window.open("https://www.baidu.com");
    });
    var activityRoomLogoGroup = new Konva.Group({
        x: 1084, //图层左右距离设置
        y: 438,
    });
    layer.add(activityRoomLogoGroup);
    activityRoomLogoGroup.add(activityRoomLogoImg);
    //添加图片路径
    var activityRoomLogoImage = new Image();
    activityRoomLogoImage.onload = function () {
        activityRoomLogoImg.image(activityRoomLogoImage);
        layer.draw();
    };
    activityRoomLogoImage.src = '../img/活动.png';
    //添加数字
    var activityRoomNumText = new Konva.Text({
        x: 1070,
        y: 468,
        text: numTest3 >= 9999 ? 9999 : numTest3 + '',
        fontSize: 28,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(activityRoomNumText);
    //判断是几位数字 调整数字样式距离
    var str3=numTest3 >= 9999 ? '9999' : numTest3 + '';
    if(str3.length==1){
        activityRoomNumText.x(1091);
        layer.add(activityRoomNumText);
    }else if(str3.length==2){
        activityRoomNumText.x(1084);
        layer.add(activityRoomNumText);
    }else if(str3.length==3){
        activityRoomNumText.x(1078);
        layer.add(activityRoomNumText);
    }else if(str3.length==4){
        activityRoomNumText.x(1070);
        layer.add(activityRoomNumText);
    }
    //悬停更改鼠标样式
    activityRoomNumText.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    activityRoomNumText.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    activityRoomNumText.on('click', function () {
        window.open("https://www.baidu.com");
    });
    //添加下角标人数文字
    var activityRoomFootMarkText = new Konva.Text({
        x: 1122,
        y: 483,
        text: '人次',
        fontSize: 10,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(activityRoomFootMarkText);
    //判断是几位数字 调整下角文字样式距离
    if(str3.length==1){
        activityRoomFootMarkText.x(1103);
        layer.add(activityRoomFootMarkText);
    }else if(str3.length==2){
        activityRoomFootMarkText.x(1110);
        layer.add(activityRoomFootMarkText);
    }else if(str3.length==3){
        activityRoomFootMarkText.x(1117);
        layer.add(activityRoomFootMarkText);
    }else if(str3.length==4){
        activityRoomFootMarkText.x(1122);
        layer.add(activityRoomFootMarkText);
    }
    //悬停更改鼠标样式
    activityRoomFootMarkText.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    activityRoomFootMarkText.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    activityRoomFootMarkText.on('click', function () {
        window.open("https://www.baidu.com");
    });
    //添加活动室数据的+号
    var activityRoomPlusSignText = new Konva.Text({
        x: 1122,
        y: 466,
        text: '',
        fontSize: 16,
        // fontFamily: 'sch_location_font',
        fontFamily: 'Microsoft YaHei',
        fill: '#ffffff'
    });
    layer.add(activityRoomPlusSignText);
    //悬停更改鼠标样式
    activityRoomPlusSignText.on('mouseover', function () {
        document.body.style.cursor = 'pointer';
    });
    activityRoomPlusSignText.on('mouseout', function () {
        document.body.style.cursor = 'default';
    });
    activityRoomPlusSignText.on('click', function () {
        window.open("https://www.baidu.com");
    });


    /**
     * R-1.访问总人次图层设置图层大小 accessTotalNumber
     */
    var accessTotalNumberImg = new Konva.Image({
        width: 168,
        height: 98
    });
    var accessTotalNumberGroup = new Konva.Group({
        x:1188, //图层左右距离设置
        y: 12,
    });
    layer.add(accessTotalNumberGroup);
    accessTotalNumberGroup.add(accessTotalNumberImg);
    //加载对应背景图片
    var accessTotalNumberImage = new Image();
    accessTotalNumberImage.onload = function () {
        accessTotalNumberImg.image(accessTotalNumberImage);
        layer.draw();
    };
    accessTotalNumberImage.src = '../img/显示框.png';
    //添加访问总人次文字
    var accessTotalNumberText = new Konva.Text({
        x: 1236,
        y: 14,
        text: '访问总人次',
        fontSize: 14,
        fontFamily: 'sch_location_font',
        fill: '#ffffff',
        opacity: 0.6
    });
    layer.add(accessTotalNumberText);
    //添加数字
    var accessTotalNumber = new Konva.Text({
        x: 1200,
        y: 48,
        text: numTest4 >= 9999999 ? 9999999 : numTest4 + '',
        fontSize: 42,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(accessTotalNumber);
    //判断是几位数字 调整数字样式距离
    var str4=numTest4 >= 9999999 ? '9999999' : numTest4 + '';
    if(str4.length==1){
        accessTotalNumber.x(1264);
        layer.add(accessTotalNumber);
    }else if(str4.length==2){
        accessTotalNumber.x(1253);
        layer.add(accessTotalNumber);
    }else if(str4.length==3){
        accessTotalNumber.x(1244);
        layer.add(accessTotalNumber);
    }else if(str4.length==4){
        accessTotalNumber.x(1233);
        layer.add(accessTotalNumber);
    }else if(str4.length==5){
        accessTotalNumber.x(1224);
        layer.add(accessTotalNumber);
    }else if(str4.length==6){
        accessTotalNumber.x(1214);
        layer.add(accessTotalNumber);
    }else if(str4.length==7){
        accessTotalNumber.x(1200);
        layer.add(accessTotalNumber);
    }
    //添加访问总人次数据的+号
    var accessTotalNumberPlusSignText = new Konva.Text({
        x: 1337,
        y: 47,
        text: '',
        fontSize: 18,
        // fontFamily: 'sch_location_font',
        fontFamily: 'Microsoft YaHei',
        fill: '#ffffff'
    });
    layer.add(accessTotalNumberPlusSignText);

    /**
     * R-2.活动室总人次图层设置图层大小 activityRoomTotalNumber
     */
    var activityRoomTotalNumberImg = new Konva.Image({
        width: 168,
        height: 98
    });
    var activityRoomTotalNumberGroup = new Konva.Group({
        x:1188, //图层左右距离设置
        y: 119,
    });
    layer.add(activityRoomTotalNumberGroup);
    activityRoomTotalNumberGroup.add(activityRoomTotalNumberImg);
    //加载对应背景图片
    var activityRoomTotalNumberImage = new Image();
    activityRoomTotalNumberImage.onload = function () {
        activityRoomTotalNumberImg.image(activityRoomTotalNumberImage);
        layer.draw();
    };
    activityRoomTotalNumberImage.src = '../img/显示框.png';
    //添加活动室总人次文字
    var activityRoomTotalNumberText = new Konva.Text({
        x: 1230,
        y: 122,
        text: '活动室总人次',
        fontSize: 14,
        fontFamily: 'sch_location_font',
        fill: '#ffffff',
        opacity: 0.6
    });
    layer.add(activityRoomTotalNumberText);
    //添加数字
    var activityRoomTotalNumber = new Konva.Text({
        x: 1201,
        y: 157 ,
        text: numTest5 >= 9999999 ? 9999999 : numTest5 + '',
        fontSize: 42,
        fontFamily: 'sch_location_font',
        fill: '#ff4880'
    });
    layer.add(activityRoomTotalNumber);
    //判断是几位数字 调整数字样式距离
    var str5=numTest5 >= 9999999 ? '9999999' : numTest5 + '';
    if(str5.length==1){
        activityRoomTotalNumber.x(1264);
        layer.add(activityRoomTotalNumber);
    }else if(str5.length==2){
        activityRoomTotalNumber.x(1253);
        layer.add(activityRoomTotalNumber);
    }else if(str5.length==3){
        activityRoomTotalNumber.x(1244);
        layer.add(activityRoomTotalNumber);
    }else if(str5.length==4){
        activityRoomTotalNumber.x(1233);
        layer.add(activityRoomTotalNumber);
    }else if(str5.length==5){
        activityRoomTotalNumber.x(1224);
        layer.add(activityRoomTotalNumber);
    }else if(str5.length==6){
        activityRoomTotalNumber.x(1214);
        layer.add(activityRoomTotalNumber);
    }else if(str5.length==7){
        activityRoomTotalNumber.x(1200);
        layer.add(activityRoomTotalNumber);
    }
    //添加活动室总人次数据的+号
    var activityRoomTotalNumberPlusSignText = new Konva.Text({
        x: 1337,
        y: 155,
        text: '',
        fontSize: 18,
        // fontFamily: 'sch_location_font',
        fontFamily: 'Microsoft YaHei',
        fill: '#ff4880',
        fontStyle: 'bold'
    });
    layer.add(activityRoomTotalNumberPlusSignText);


    /**
     * R-3.图书馆总人次图层设置图层大小 libraryTotalNumber
     */
    var libraryTotalNumberImg = new Konva.Image({
        width: 168,
        height: 98
    });
    var libraryTotalNumberGroup = new Konva.Group({
        x:1188, //图层左右距离设置
        y: 225,
    });
    layer.add(libraryTotalNumberGroup);
    libraryTotalNumberGroup.add(libraryTotalNumberImg);
    //加载对应背景图片
    var libraryTotalNumberImage = new Image();
    libraryTotalNumberImage.onload = function () {
        libraryTotalNumberImg.image(libraryTotalNumberImage);
        layer.draw();
    };
    libraryTotalNumberImage.src = '../img/显示框.png';
    //添加图书馆总人次文字
    var libraryTotalNumberText = new Konva.Text({
        x: 1230,
        y: 227,
        text: '图书馆总人次',
        fontSize: 14,
        fontFamily: 'sch_location_font',
        fill: '#ffffff',
        opacity: 0.6
    });
    layer.add(libraryTotalNumberText);
    //添加数字
    var libraryTotalNumber = new Konva.Text({
        x: 1201,
        y: 262,
        text: numTest6 >= 9999999 ? 9999999 : numTest6 + '',
        fontSize: 42,
        fontFamily: 'sch_location_font',
        fill: '#8670ff'
    });
    layer.add(libraryTotalNumber);
    //判断是几位数字 调整数字样式距离
    var str6=numTest6 >= 9999999 ? '9999999' : numTest6 + '';
    if(str6.length==1){
        libraryTotalNumber.x(1264);
        layer.add(libraryTotalNumber);
    }else if(str6.length==2){
        libraryTotalNumber.x(1253);
        layer.add(libraryTotalNumber);
    }else if(str6.length==3){
        libraryTotalNumber.x(1244);
        layer.add(libraryTotalNumber);
    }else if(str6.length==4){
        libraryTotalNumber.x(1233);
        layer.add(libraryTotalNumber);
    }else if(str6.length==5){
        libraryTotalNumber.x(1224);
        layer.add(libraryTotalNumber);
    }else if(str6.length==6){
        libraryTotalNumber.x(1214);
        layer.add(libraryTotalNumber);
    }else if(str6.length==7){
        libraryTotalNumber.x(1200);
        layer.add(libraryTotalNumber);
    }
    //添加图书馆总人次数据的+号
    var libraryTotalNumberPlusSignText = new Konva.Text({
        x: 1337,
        y: 260,
        text: '',
        fontSize: 18,
        // fontFamily: 'sch_location_font',
        fontFamily: 'Microsoft YaHei',
        fill: '#8670ff',
        fontStyle: 'bold'
    });
    layer.add(libraryTotalNumberPlusSignText);


    /**
     * R-4.篮球馆总人次图层设置图层大小 basketballGymTotalNumber
     */
    var basketballGymTotalNumberImg = new Konva.Image({
        width: 168,
        height: 98
    });
    var basketballGymTotalNumberGroup = new Konva.Group({
        x:1188, //图层左右距离设置
        y: 332,
    });
    layer.add(basketballGymTotalNumberGroup);
    basketballGymTotalNumberGroup.add(basketballGymTotalNumberImg);
    //加载对应背景图片
    var basketballGymTotalNumberImage = new Image();
    basketballGymTotalNumberImage.onload = function () {
        basketballGymTotalNumberImg.image(basketballGymTotalNumberImage);
        layer.draw();
    };
    basketballGymTotalNumberImage.src = '../img/显示框.png';
    //添加访问总人次文字
    var basketballGymTotalNumberText = new Konva.Text({
        x: 1230,
        y: 334,
        text: '篮球馆总人次',
        fontSize: 14,
        fontFamily: 'sch_location_font',
        fill: '#ffffff',
        opacity: 0.6
    });
    layer.add(basketballGymTotalNumberText);
    //添加数字
    var basketballGymTotalNumber = new Konva.Text({
        x: 1201,
        y: 371,
        text: numTest7 >= 9999999 ? 9999999 : numTest7 + '',
        fontSize: 42,
        fontFamily: 'sch_location_font',
        fill: '#009ef9'
    });
    layer.add(basketballGymTotalNumber);
    //判断是几位数字 调整数字样式距离
    var str7=numTest7 >= 9999999 ? '9999999' : numTest7 + '';
    if(str7.length==1){
        basketballGymTotalNumber.x(1264);
        layer.add(basketballGymTotalNumber);
    }else if(str7.length==2){
        basketballGymTotalNumber.x(1253);
        layer.add(basketballGymTotalNumber);
    }else if(str7.length==3){
        basketballGymTotalNumber.x(1244);
        layer.add(basketballGymTotalNumber);
    }else if(str7.length==4){
        basketballGymTotalNumber.x(1233);
        layer.add(basketballGymTotalNumber);
    }else if(str7.length==5){
        basketballGymTotalNumber.x(1224);
        layer.add(basketballGymTotalNumber);
    }else if(str7.length==6){
        basketballGymTotalNumber.x(1214);
        layer.add(basketballGymTotalNumber);
    }else if(str7.length==7){
        basketballGymTotalNumber.x(1200);
        layer.add(basketballGymTotalNumber);
    }
    //添加篮球馆总人次数据的+号
    var basketballGymTotalNumberPlusSignText = new Konva.Text({
        x: 1337,
        y: 369,
        text: '',
        fontSize: 18,
        // fontFamily: 'sch_location_font',
        fontFamily: 'Microsoft YaHei',
        fill: '#009ef9',
        fontStyle: 'bold'
    });
    layer.add(basketballGymTotalNumberPlusSignText);
    

    /**
     * R-5.实时动态图层设置图层大小 dynamicInformation
     */
    var dynamicInformationImg = new Konva.Image({
        width: 168,
        height: 317
    });
    var dynamicInformationGroup = new Konva.Group({
        x:1188, //图层左右距离设置
        y: 439,
    });
    layer.add(dynamicInformationGroup);
    dynamicInformationGroup.add(dynamicInformationImg);
    //加载对应背景图片
    var dynamicInformationImage = new Image();
    dynamicInformationImage.onload = function () {
        dynamicInformationImg.image(dynamicInformationImage);
        layer.draw();
    };
    dynamicInformationImage.src = '../img/显示框_实时动态.png';
    //添加访问总人次文字
    var dynamicInformationText = new Konva.Text({
        x: 1244,
        y: 441,
        text: '实时动态',
        fontSize: 14,
        fontFamily: 'sch_location_font',
        fill: '#ffffff',
        opacity: 0.6
    });
    layer.add(dynamicInformationText);

    //C-1 添加动态文字内容第1条
    //时间
    var dynamicInformationTip1_1 = new Konva.Text({
        x: 1304,
        y: 470,
        text: getRandomArray()[0]['time'],
        fontSize: 18,
        fontFamily: 'sch_location_font',
        fill: '#f6f6f7'
    });
    layer.add(dynamicInformationTip1_1);
    //姓名
    var dynamicInformationTip1_2 = new Konva.Text({
        x: 1208,
        y: 494,
        text: getRandomArray()[0]['name']+'进入',
        fontSize: 18,
        // fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(dynamicInformationTip1_2);
    //地点
    var _ran1 = getRandomArray()[0]['place'];
    var dynamicInformationTip1_3 = new Konva.Text({
        x: 1288,
        y: 494,
        text: _ran1,
        fontSize: 18,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(dynamicInformationTip1_3);
    //设置颜色
    if(_ran1=='篮球馆'){
        dynamicInformationTip1_3.fill('#009ef9');
        layer.add(dynamicInformationTip1_3);
    }else if(_ran1=='图书馆'){
        dynamicInformationTip1_3.fill('#8670ff');
        layer.add(dynamicInformationTip1_3);
    }else if(_ran1=='活动室'){
        dynamicInformationTip1_3.fill('#ff4880');
        layer.add(dynamicInformationTip1_3);
    }

    //C-2 添加动态文字内容第2条
    //时间
    var dynamicInformationTip2_1 = new Konva.Text({
        x: 1304,
        y: 530,
        text: getRandomArray()[1]['time'],
        fontSize: 18,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(dynamicInformationTip2_1);
    //姓名
    var dynamicInformationTip2_2 = new Konva.Text({
        x: 1208,
        y: 553,
        text: getRandomArray()[1]['name']+'进入',
        fontSize: 18,
        // fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(dynamicInformationTip2_2);
    //地点
    var _ran2 = getRandomArray()[1]['place'];
    var dynamicInformationTip2_3 = new Konva.Text({
        x: 1288,
        y: 553,
        text: _ran2,
        fontSize: 18,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(dynamicInformationTip2_3);
    //设置颜色
    if(_ran2=='篮球馆'){
        dynamicInformationTip2_3.fill('#009ef9');
        layer.add(dynamicInformationTip2_3);
    }else if(_ran2=='图书馆'){
        dynamicInformationTip2_3.fill('#8670ff');
        layer.add(dynamicInformationTip2_3);
    }else if(_ran2=='活动室'){
        dynamicInformationTip2_3.fill('#ff4880');
        layer.add(dynamicInformationTip2_3);
    }

    //C-3 添加动态文字内容第3条
    //时间
    var dynamicInformationTip3_1 = new Konva.Text({
        x: 1304,
        y: 586,
        text: getRandomArray()[2]['time'],
        fontSize: 18,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(dynamicInformationTip3_1);
    //姓名
    var dynamicInformationTip3_2 = new Konva.Text({
        x: 1208,
        y: 610,
        text: getRandomArray()[2]['name']+'进入',
        fontSize: 18,
        // fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(dynamicInformationTip3_2);
    //地点
    var _ran3 = getRandomArray()[2]['place'];
    var dynamicInformationTip3_3 = new Konva.Text({
        x: 1288,
        y: 610,
        text: _ran3,
        fontSize: 18,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(dynamicInformationTip3_3);
    //设置颜色
    if(_ran3=='篮球馆'){
        dynamicInformationTip3_3.fill('#009ef9');
        layer.add(dynamicInformationTip3_3);
    }else if(_ran3=='图书馆'){
        dynamicInformationTip3_3.fill('#8670ff');
        layer.add(dynamicInformationTip3_3);
    }else if(_ran3=='活动室'){
        dynamicInformationTip3_3.fill('#ff4880');
        layer.add(dynamicInformationTip3_3);
    }

    //C-4 添加动态文字内容第4条
    //时间
    var dynamicInformationTip4_1 = new Konva.Text({
        x: 1304,
        y: 645,
        text: getRandomArray()[3]['time'],
        fontSize: 18,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(dynamicInformationTip4_1);
    //姓名
    var dynamicInformationTip4_2 = new Konva.Text({
        x: 1208,
        y: 668,
        text: getRandomArray()[3]['name']+'进入',
        fontSize: 18,
        // fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(dynamicInformationTip4_2);
    //地点
    var _ran4 = getRandomArray()[3]['place'];
    var dynamicInformationTip4_3 = new Konva.Text({
        x: 1288,
        y: 668,
        text: _ran4,
        fontSize: 18,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(dynamicInformationTip4_3);
    //设置颜色
    if(_ran4=='篮球馆'){
        dynamicInformationTip4_3.fill('#009ef9');
        layer.add(dynamicInformationTip4_3);
    }else if(_ran4=='图书馆'){
        dynamicInformationTip4_3.fill('#8670ff');
        layer.add(dynamicInformationTip4_3);
    }else if(_ran4=='活动室'){
        dynamicInformationTip4_3.fill('#ff4880');
        layer.add(dynamicInformationTip4_3);
    }

    //C-5 添加动态文字内容第5条
    //时间
    var dynamicInformationTip5_1 = new Konva.Text({
        x: 1304,
        y: 702,
        text: getRandomArray()[4]['time'],
        fontSize: 18,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(dynamicInformationTip5_1);
    //姓名
    var dynamicInformationTip5_2 = new Konva.Text({
        x: 1208,
        y: 726,
        text: getRandomArray()[4]['name']+'进入',
        fontSize: 18,
        // fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(dynamicInformationTip5_2);
    //地点
    var _ran5 = getRandomArray()[4]['place'];
    var dynamicInformationTip5_3 = new Konva.Text({
        x: 1288,
        y: 726,
        text: _ran5,
        fontSize: 18,
        fontFamily: 'sch_location_font',
        fill: '#ffffff'
    });
    layer.add(dynamicInformationTip5_3);
    //设置颜色
    if(_ran5=='篮球馆'){
        dynamicInformationTip5_3.fill('#009ef9');
        layer.add(dynamicInformationTip5_3);
    }else if(_ran5=='图书馆'){
        dynamicInformationTip5_3.fill('#8670ff');
        layer.add(dynamicInformationTip5_3);
    }else if(_ran5=='活动室'){
        dynamicInformationTip5_3.fill('#ff4880');
        layer.add(dynamicInformationTip5_3);
    }


    //定时更新页面数据的数字值
    function tick() {

        /**
         * 测试模拟数据更新
         */
        numTest1 += 11;
        numTest2 += 7;
        numTest3 += 9;

        numTest4 += 98723;
        numTest5 += 95784;
        numTest6 += 14354;
        numTest7 += 13242;
        
        //定时刷新数字 numTest1
        basketNumText.text(numTest1 >= 9999 ? 9999 : numTest1 + '');
        layer.add(basketNumText);
        layer.draw();
        //判断是否需要+号
        if (numTest1 >= 9999) {
            basketPlusSignText.text('+');
            layer.add(basketPlusSignText);
            layer.draw();
        }
        //调整数字和下角文字距离样式
        var numStr1=numTest1 >= 9999 ? '9999' : numTest1 + '';
        if(numStr1.length==1){
            basketNumText.x(433);
            layer.add(basketNumText);
            layer.draw();
        }else if(numStr1.length==2){
            basketNumText.x(427);
            layer.add(basketNumText);
            layer.draw();
        }else if(numStr1.length==3){
            basketNumText.x(420);
            layer.add(basketNumText);
            layer.draw();
        }else if(numStr1.length==4){
            basketNumText.x(414);
            layer.add(basketNumText);
            layer.draw();
        }
        if(numStr1.length==1){
            basketFootMarkText.x(446);
            layer.add(basketFootMarkText);
            layer.draw();
        }else if(numStr1.length==2){
            basketFootMarkText.x(453);
            layer.add(basketFootMarkText);
            layer.draw();
        }else if(numStr1.length==3){
            basketFootMarkText.x(459);
            layer.add(basketFootMarkText);
            layer.draw();
        }else if(numStr1.length==4){
            basketFootMarkText.x(466);
            layer.add(basketFootMarkText);
            layer.draw();
        }

        //定时刷新数字 numTest2
         libraryNumText.text(numTest2 >= 9999 ? 9999 : numTest2 + '');
         layer.add(libraryNumText);
         layer.draw();
         //判断是否需要+号
        if (numTest2 >= 9999) {
            libraryPlusSignText.text('+');
            layer.add(libraryPlusSignText);
            layer.draw();
        }
        //调整数字和下角文字距离样式
        var numStr2 = numTest2 >= 9999 ? '9999' : numTest2 + '';
        if (numStr2.length == 1) {
            libraryNumText.x(902);
            layer.add(libraryNumText);
            layer.draw();
        } else if (numStr2.length == 2) {
            libraryNumText.x(895);
            layer.add(libraryNumText);
            layer.draw();
        } else if (numStr2.length == 3) {
            libraryNumText.x(888);
            layer.add(libraryNumText);
            layer.draw();
        } else if (numStr2.length == 4) {
            libraryNumText.x(880);
            layer.add(libraryNumText);
            layer.draw();
        }
        if (numStr2.length == 1) {
            libraryFootMarkText.x(915);
            layer.add(libraryFootMarkText);
            layer.draw();
        } else if (numStr2.length == 2) {
            libraryFootMarkText.x(921);
            layer.add(libraryFootMarkText);
            layer.draw();
        } else if (numStr2.length == 3) {
            libraryFootMarkText.x(927);
            layer.add(libraryFootMarkText);
            layer.draw();
        } else if (numStr2.length == 4) {
            libraryFootMarkText.x(932);
            layer.add(libraryFootMarkText);
            layer.draw();
        }

         //定时刷新数字 numTest3
         activityRoomNumText.text(numTest3 >= 9999 ? 9999 : numTest3 + '');
         layer.add(activityRoomNumText);
         layer.draw();
         //判断是否需要+号
         if (numTest3 >= 9999) {
            activityRoomPlusSignText.text('+');
             layer.add(activityRoomPlusSignText);
             layer.draw();
         }
         //调整数字和下角文字距离样式
        var numStr3 = numTest3 >= 9999 ? '9999' : numTest3 + '';
        if (numStr3.length == 1) {
            activityRoomNumText.x(1091);
            layer.add(activityRoomNumText);
            layer.draw();
        } else if (numStr3.length == 2) {
            activityRoomNumText.x(1084);
            layer.add(activityRoomNumText);
            layer.draw();
        } else if (numStr3.length == 3) {
            activityRoomNumText.x(1078);
            layer.add(activityRoomNumText);
            layer.draw();
        } else if (numStr3.length == 4) {
            activityRoomNumText.x(1070);
            layer.add(activityRoomNumText);
            layer.draw();
        }
        if(numStr3.length==1){
            activityRoomFootMarkText.x(1103);
            layer.add(activityRoomFootMarkText);
            layer.draw();
        }else if(numStr3.length==2){
            activityRoomFootMarkText.x(1110);
            layer.add(activityRoomFootMarkText);
            layer.draw();
        }else if(numStr3.length==3){
            activityRoomFootMarkText.x(1117);
            layer.add(activityRoomFootMarkText);
            layer.draw();
        }else if(numStr3.length==4){
            activityRoomFootMarkText.x(1122);
            layer.add(activityRoomFootMarkText);
            layer.draw();
        }

        //定时刷新数字 numTest4
        accessTotalNumber.text(numTest4 >= 9999999 ? 9999999 : numTest4 + '');
        layer.add(accessTotalNumber);
        layer.draw();
        //判断是否需要+号
        if (numTest4 >= 9999999) {
            accessTotalNumberPlusSignText.text('+');
            layer.add(accessTotalNumberPlusSignText);
            layer.draw();
        }
        //调整数字距离样式
        var numStr4 = numTest4 >= 9999999 ? '9999999' : numTest4 + '';
        if (numStr4.length == 1) {
            accessTotalNumber.x(1264);
            layer.add(accessTotalNumber);
            layer.draw();
        } else if (numStr4.length == 2) {
            accessTotalNumber.x(1253);
            layer.add(accessTotalNumber);
            layer.draw();
        } else if (numStr4.length == 3) {
            accessTotalNumber.x(1244);
            layer.add(accessTotalNumber);
            layer.draw();
        } else if (numStr4.length == 4) {
            accessTotalNumber.x(1233);
            layer.add(accessTotalNumber);
            layer.draw();
        } else if (numStr4.length == 5) {
            accessTotalNumber.x(1224);
            layer.add(accessTotalNumber);
            layer.draw();
        } else if (numStr4.length == 6) {
            accessTotalNumber.x(1214);
            layer.add(accessTotalNumber);
            layer.draw();
        } else if (numStr4.length == 7) {
            accessTotalNumber.x(1200);
            layer.add(accessTotalNumber);
            layer.draw();
        }

        //定时刷新数字 numTest5
        activityRoomTotalNumber.text(numTest5 >= 9999999 ? 9999999 : numTest5 + '');
        layer.add(activityRoomTotalNumber);
        layer.draw();
        //判断是否需要+号
        if (numTest5 >= 9999999) {
            activityRoomTotalNumberPlusSignText.text('+');
            layer.add(activityRoomTotalNumberPlusSignText);
            layer.draw();
        }
        //调整数字距离样式
        var numStr5 = numTest5 >= 9999999 ? '9999999' : numTest5 + '';
        if (numStr5.length == 1) {
            activityRoomTotalNumber.x(1264);
            layer.add(activityRoomTotalNumber);
            layer.draw();
        } else if (numStr5.length == 2) {
            activityRoomTotalNumber.x(1253);
            layer.add(activityRoomTotalNumber);
            layer.draw();
        } else if (numStr5.length == 3) {
            activityRoomTotalNumber.x(1244);
            layer.add(activityRoomTotalNumber);
            layer.draw();
        } else if (numStr5.length == 4) {
            activityRoomTotalNumber.x(1233);
            layer.add(activityRoomTotalNumber);
            layer.draw();
        } else if (numStr5.length == 5) {
            activityRoomTotalNumber.x(1224);
            layer.add(activityRoomTotalNumber);
            layer.draw();
        } else if (numStr5.length == 6) {
            activityRoomTotalNumber.x(1214);
            layer.add(activityRoomTotalNumber);
            layer.draw();
        } else if (numStr5.length == 7) {
            activityRoomTotalNumber.x(1200);
            layer.add(activityRoomTotalNumber);
            layer.draw();
        }

        //定时刷新数字 numTest6
        libraryTotalNumber.text(numTest6 >= 9999999 ? 9999999 : numTest6 + '');
        layer.add(libraryTotalNumber);
        layer.draw();
        //判断是否需要+号
        if (numTest6 >= 9999999) {
            libraryTotalNumberPlusSignText.text('+');
            layer.add(libraryTotalNumberPlusSignText);
            layer.draw();
        }
        //调整数字距离样式
        var numStr6 = numTest6 >= 9999999 ? '9999999' : numTest6 + '';
        if (numStr6.length == 1) {
            libraryTotalNumber.x(1264);
            layer.add(libraryTotalNumber);
            layer.draw();
        } else if (numStr6.length == 2) {
            libraryTotalNumber.x(1253);
            layer.add(libraryTotalNumber);
            layer.draw();
        } else if (numStr6.length == 3) {
            libraryTotalNumber.x(1244);
            layer.add(libraryTotalNumber);
            layer.draw();
        } else if (numStr6.length == 4) {
            libraryTotalNumber.x(1233);
            layer.add(libraryTotalNumber);
            layer.draw();
        } else if (numStr6.length == 5) {
            libraryTotalNumber.x(1224);
            layer.add(libraryTotalNumber);
            layer.draw();
        } else if (numStr6.length == 6) {
            libraryTotalNumber.x(1214);
            layer.add(libraryTotalNumber);
            layer.draw();
        } else if (numStr6.length == 7) {
            libraryTotalNumber.x(1200);
            layer.add(libraryTotalNumber);
            layer.draw();
        }

        //定时刷新数字 numTest7
        basketballGymTotalNumber.text(numTest7 >= 9999999 ? 9999999 : numTest7 + '');
        layer.add(basketballGymTotalNumber);
        layer.draw();
        //判断是否需要+号
        if (numTest7 >= 9999999) {
            basketballGymTotalNumberPlusSignText.text('+');
            layer.add(basketballGymTotalNumberPlusSignText);
            layer.draw();
        }
        //调整数字距离样式
        var numStr7 = numTest7 >= 9999999 ? '9999999' : numTest7 + '';
        if(numStr7.length==1){
            basketballGymTotalNumber.x(1264);
            layer.add(basketballGymTotalNumber);
            layer.draw();
        }else if(numStr7.length==2){
            basketballGymTotalNumber.x(1253);
            layer.add(basketballGymTotalNumber);
            layer.draw();
        }else if(numStr7.length==3){
            basketballGymTotalNumber.x(1244);
            layer.add(basketballGymTotalNumber);
            layer.draw();
        }else if(numStr7.length==4){
            basketballGymTotalNumber.x(1233);
            layer.add(basketballGymTotalNumber);
            layer.draw();
        }else if(numStr7.length==5){
            basketballGymTotalNumber.x(1224);
            layer.add(basketballGymTotalNumber);
            layer.draw();
        }else if(numStr7.length==6){
            basketballGymTotalNumber.x(1214);
            layer.add(basketballGymTotalNumber);
            layer.draw();
        }else if(numStr7.length==7){
            basketballGymTotalNumber.x(1200);
            layer.add(basketballGymTotalNumber);
            layer.draw();
        }

        //时间
        // var date = new Date();
        // var aaa = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
        // console.log(date.getHours()+':'+date.getMinutes()+':'+aaa);

        // console.log(getRandomArray());

        var ran1 = getRandomArray()[0];

        dynamicInformationTip1_1.text(ran1['time']);
        layer.add(dynamicInformationTip1_1);
        layer.draw();

        dynamicInformationTip1_2.text(ran1['name']+'进入');
        layer.add(dynamicInformationTip1_2);
        layer.draw();

        dynamicInformationTip1_3.text(ran1['place']);
        layer.add(dynamicInformationTip1_2);
        layer.draw();

        if (ran1['place'] == '篮球馆') {
            dynamicInformationTip1_3.fill('#009ef9');
            layer.add(dynamicInformationTip1_3);
        } else if (ran1['place'] == '图书馆') {
            dynamicInformationTip1_3.fill('#8670ff');
            layer.add(dynamicInformationTip1_3);
        } else if (ran1['place'] == '活动室') {
            dynamicInformationTip1_3.fill('#ff4880');
            layer.add(dynamicInformationTip1_3);
        }

        var ran2 = getRandomArray()[1];

        dynamicInformationTip2_1.text(ran2['time']);
        layer.add(dynamicInformationTip2_1);
        layer.draw();

        dynamicInformationTip2_2.text(ran2['name']+'进入');
        layer.add(dynamicInformationTip2_2);
        layer.draw();

        dynamicInformationTip2_3.text(ran2['place']);
        layer.add(dynamicInformationTip2_3);
        layer.draw();

        //设置颜色
        if (ran2['place'] == '篮球馆') {
            dynamicInformationTip2_3.fill('#009ef9');
            layer.add(dynamicInformationTip2_3);
        } else if (ran2['place'] == '图书馆') {
            dynamicInformationTip2_3.fill('#8670ff');
            layer.add(dynamicInformationTip2_3);
        } else if (ran2['place'] == '活动室') {
            dynamicInformationTip2_3.fill('#ff4880');
            layer.add(dynamicInformationTip2_3);
        }


        var ran3 = getRandomArray()[2];

        dynamicInformationTip3_1.text(ran3['time']);
        layer.add(dynamicInformationTip3_1);
        layer.draw();

        dynamicInformationTip3_2.text(ran3['name']+'进入');
        layer.add(dynamicInformationTip3_2);
        layer.draw();

        dynamicInformationTip3_3.text(ran3['place']);
        layer.add(dynamicInformationTip3_3);
        layer.draw();
        //设置颜色
        if (ran3['place'] == '篮球馆') {
            dynamicInformationTip3_3.fill('#009ef9');
            layer.add(dynamicInformationTip3_3);
        } else if (ran3['place'] == '图书馆') {
            dynamicInformationTip3_3.fill('#8670ff');
            layer.add(dynamicInformationTip3_3);
        } else if (ran3['place'] == '活动室') {
            dynamicInformationTip3_3.fill('#ff4880');
            layer.add(dynamicInformationTip3_3);
        }


        var ran4 = getRandomArray()[3];

        dynamicInformationTip4_1.text(ran4['time']);
        layer.add(dynamicInformationTip4_1);
        layer.draw();

        dynamicInformationTip4_2.text(ran4['name']+'进入');
        layer.add(dynamicInformationTip4_2);
        layer.draw();

        dynamicInformationTip4_3.text(ran4['place']);
        layer.add(dynamicInformationTip4_3);
        layer.draw();
        //设置颜色
        if (ran4['place'] == '篮球馆') {
            dynamicInformationTip4_3.fill('#009ef9');
            layer.add(dynamicInformationTip4_3);
        } else if (ran4['place'] == '图书馆') {
            dynamicInformationTip4_3.fill('#8670ff');
            layer.add(dynamicInformationTip4_3);
        } else if (ran4['place'] == '活动室') {
            dynamicInformationTip4_3.fill('#ff4880');
            layer.add(dynamicInformationTip4_3);
        }


        var ran5 = getRandomArray()[4];

        dynamicInformationTip5_1.text(ran5['time']);
        layer.add(dynamicInformationTip5_1);
        layer.draw();

        dynamicInformationTip5_2.text(ran5['name']+'进入');
        layer.add(dynamicInformationTip5_2);
        layer.draw();

        dynamicInformationTip5_3.text(ran5['place']);
        layer.add(dynamicInformationTip5_3);
        layer.draw();

        //设置颜色
        if (ran5['place'] == '篮球馆') {
            dynamicInformationTip5_3.fill('#009ef9');
            layer.add(dynamicInformationTip5_3);
        } else if (ran5['place'] == '图书馆') {
            dynamicInformationTip5_3.fill('#8670ff');
            layer.add(dynamicInformationTip5_3);
        } else if (ran5['place'] == '活动室') {
            dynamicInformationTip5_3.fill('#ff4880');
            layer.add(dynamicInformationTip5_3);
        }
    }
    setInterval(tick, 1000);//模拟刷新数据
    tick();


    // 设置自适应样式
    // 监听窗口变化及获取窗口大小
    window.onresize = function () {
        var width = window.innerWidth;
        var height = window.innerHeight;
        stage.scale({
            x: width/1366,
            y: height/768
        });
    }