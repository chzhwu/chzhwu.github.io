/**
 * Created by lenovo on 2017/9/16.
 */
//匿名函数自调用把局部变量设置为全局变量，阻止全局变量污染
(function (window) {
//2.构造一个蛇对象;(定位，固定位置，默认要向右移动)
//a. 初始化蛇;(放到map中)
//b. 删除蛇的方法;(最好不对外)
//c. 移动蛇的方法;(最好不对外)(只移动一个位置)


    //2.构造一个蛇对象;(定位，固定位置，默认要向右移动)
    function Snake(width,height,direction){//1.宽高;    2.身体(I.位置 II.颜色)  3.方向;
        this.width = width || 20;
        this.height = height || 20;
        //2.身体(I.位置 II.颜色); (身体整体可以数组做，单个元素为对象)
        this.body = [
            {top: 2,left: 4,color: "red"},//头
            {top: 2,left: 3,color: "orange"},//身体
            {top: 2,left: 2,color: "orange"} //身体
        ];
        this.direction = direction || "right";
    }

    //a. 初始化蛇;(放到map中)(得用3个div初始化一条蛇)
    //定义一个数组，把每一个元素都放入数组中，将来用于删除
    var arr = [];
    Snake.prototype.init = function (map) {//放到map中
        //bug: 只能有一条蛇，所以生成之前先删除;(删除一个数组);
        removeSnake(map);
        //(得用3个div初始化一条蛇) 所以用for循环遍历body;
        for(var i=0;i<this.body.length;i++){
            //创建div设置body里面的属性和值;
            var newDiv = document.createElement("div");
            //这只属性(宽高，位置(固定)，背景色，定位)
            newDiv.style.width = this.width+"px";//带单位
            newDiv.style.height = this.height+"px";//带单位
            newDiv.style.position = "absolute";
            //根据身体的不同设置不同为位置和颜色;
            newDiv.style.top = this.body[i].top*this.height+"px";
            newDiv.style.left = this.body[i].left*this.width+"px";
            newDiv.style.background = this.body[i].color;//this中的body中的color属性对应蛇身体的颜色;

            //放入map中;
            map.appendChild(newDiv);
            //每个div，蛇身体的一部分，都放入数组，将来删除;
            arr.push(newDiv);
        }
    }

    //b. 删除蛇的方法;(最好不对外)
    function removeSnake(map){//从map里面删除指定div；
        //I: 从map中删除div;   II:从数组中删除元素;   III: 先map后arr;
        //根据数组中的元素，删除map中的蛇身体;
        for(var i=0;i<arr.length;i++){
            //I: 从map中删除div;
            map.removeChild(arr[i]);
            ////II:从数组中删除元素;
            //arr.shift();//删除数组中的第一项
            //i--;//为了删除所有，可以保证i一直是0；或者反向遍历;
        }
        //II:从数组中删除元素;
        arr = [];
    }


    //c. 移动蛇的方法;(只移动一个位置)
    //蛇移动原理：删除旧蛇画新蛇;(I.让身体的后面关节设置为前面的坐标   II.头按照方向+1/-1)
    Snake.prototype.move = function (map,food) {
        //删除旧蛇画新蛇;
        removeSnake(map);

        //(I.让身体的后面关节设置为前面的坐标   II.头按照方向+1/-1)
        //a.从后往前遍历(不出出现层叠)  b.把前面的赋值给后面   c.不管第一个;
        for(var i=this.body.length-1;i>=1;i--){//a和c原理
            //b.把前面的赋值给后面
            this.body[i].top = this.body[i-1].top;
            this.body[i].left = this.body[i-1].left;
        }
        //II.头按照方向+1/-1(改变头的坐标)
        //判断this.direction的方向;如果向右left值变大;如果是像下top值变大;
        switch (this.direction){
            case "right":
                this.body[0].left += 1;
                break;
            case "left":
                this.body[0].left -= 1;
                break;
            case "top":
                this.body[0].top -= 1;
                break;
            case "bottom":
                this.body[0].top += 1;
                break;
        }

        //吃食物！
        //头坐标和食物坐标相等;(1.重新生成一个食物   2.让身体增加一节最后一个的参数)
        var headx = this.body[0].left*this.width;//top/left是数值要乘以宽高
        var heady = this.body[0].top*this.height;//top/left是数值要乘以宽高
        var last = this.body[this.body.length-1];
        //判断：头坐标和食物坐标相等
        if(headx == food.left && heady == food.top){
            //1.重新生成一个食物   2.让身体增加一节最后一个的参数
            food.init(map);
            //生成一个关节
            var obj = {
                top: last.top,
                left: last.left,
                color: last.color
            };
            this.body.push(obj);
        }


        //实例对象调用初始化方法;
        this.init(map);
    }


    //把局部变量暴露给全局
    window.Snake = Snake;//全局范围内，有一个名字叫做Snake的构造函数;

})(window);

