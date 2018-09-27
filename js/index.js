//创建画布
var objGo = go.GraphObject.make;
var myDiagram = objGo(go.Diagram, "myDiagramDiv",
    {
        //模型图的中心位置所在坐标
        initialContentAlignment: go.Spot.Center,
        
        //允许用户操作图表的时候使用Ctrl-Z撤销和Ctrl-Y重做快捷键
        "undoManager.isEnabled": true,
        
        //不运行用户改变图表的规模
        allowZoom: false,

        //画布上面是否出现网格
        "grid.visible": true,

        //允许在画布上面双击的时候创建节点
        "clickCreatingTool.archetypeNodeData": { text: "Node" },

        //允许使用ctrl+c、ctrl+v复制粘贴
        "commandHandler.copiesTree": true,  

        //允许使用delete键删除节点
        "commandHandler.deletesTree": true, 

        // dragging for both move and copy
        "draggingTool.dragsTree": true,  
    });

    var myModel = objGo(go.Model);//创建Model对象
        // model中的数据每一个js对象都代表着一个相应的模型图中的元素
        myModel.nodeDataArray = [
            { key: "工厂" },
            { key: "车间" },
            { key: "工人" },
            { key: "岗位" },
        ];
        myDiagram.model = myModel; //将模型数据绑定到画布图上


 // 定义一个简单的节点模板
 myDiagram.nodeTemplate =
 objGo(go.Node, "Horizontal",//横向布局的面板
     // 节点淡蓝色背景
     { background: "#44CCFF" },
     objGo(go.Shape,
         "RoundedRectangle", //定义形状，这是圆角矩形
         { /* Shape的参数。宽高颜色等等*/figure: "Club", width: 40, height: 60, margin: 4, fill: 'red' },
         // 绑定 Shape.figure属性为Node.data.fig的值，Model对象可以通过Node.data.fig 获取和设置Shape.figure（修改形状）
         new go.Binding("figure", "fig"), new go.Binding('fill', 'fill2')),
     objGo(go.TextBlock,
         "Default Text",  // 默认文本
         // 设置字体大小颜色以及边距
         { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
         //绑定TextBlock.text 属性为Node.data.name的值，Model对象可以通过Node.data.name获取和设置TextBlock.text
         new go.Binding("text", "name"))
 );

var myModel = objGo(go.Model);//创建Model对象
// model中的数据每一个js对象都代表着一个相应的模型图中的元素
myModel.nodeDataArray = [
 { name: "工厂", fig: 'YinYang', fill2: 'blue' },
 { name: "车间", fig: 'Peace', fill2: 'red' },
 { name: "工人", fig: 'NotAllowed', fill2: 'green' },
 { name: "岗位", fig: 'Fragile', fill2: 'yellow' },
];
myDiagram.model = myModel; //将模型数据绑定到画布图上

var myModel = objGo(go.GraphLinksModel);
        myModel.nodeDataArray =
            [
                { key: "aaa" ,name: "工厂" },
                { key: "bbb" ,name: "车间"},
                { key: "ccc" ,name: "车间" }
            ];
        myModel.linkDataArray =
            [
                { from: "aaa", to: "bbb" },
                { from: "bbb", to: "ccc" }
            ];
        myDiagram.model = myModel;
