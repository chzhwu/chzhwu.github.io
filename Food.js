/**
 * Created by lenovo on 2017/9/16.
 */
//匿名函数自调用把局部变量设置为全局变量，阻止全局变量污染
(function(window){
    //1.构造一个食物对象;(定位，随机位置，页面中只有一个)
    //a. 初始化食物;(放到map中)
    //b. 删除食物的方法;(最好不对外)

    //1.构造一个食物对象;(定位，随机位置，页面中只有一个)
    //创建一个食物对象构造函数，暴露给全局
    function Food(width,height,top,left,background){
     //1.宽高;   2.位置;   3.颜色
        //传递的参数设置为实例对象中的一个属性;(默认给定义个初始化值)
        this.width = width || 20;
        this.height = height || 20;
        this.top = top || 0;
        this.left = left || 0;
        this.background = background || "green";
    }

    //a. 初始化食物;(放到map中)(在这里面创建DOM对象，根据实例化食物对象里面的数据初始化食物)
      var newDiv = null;
    Food.prototype.init= function(map){
   //创建好的DOM对象放入到参数(map)中;
        //bug: 页面中不应该有多个食物，每次只能有一个;
        //先删除，然后在生成一个新的;
        removeFood(map);
        //创建DOM对象，绑定属性，随机位置，放入map;
         newDiv = document.createElement("div");
         newDiv.style.width = this.width + "px";
         newDiv.style.height = this.height +"px";
         newDiv.style.background = this.background;
    
        //加定位，和圆角;
        newDiv.style.position ="absolute";

        //随机位置(必须是width高的整数倍)
        this.top = parseInt(Math.random()*(map.offsetHeight-this.height)/this.height)*this.height;
        this.left = parseInt(Math.random()*(map.offsetWidth-this.width)/this.width)*this.width;
        newDiv.style.top = this.top +"px";
        newDiv.style.left = this.left + "px";

        //添加
         map.appendChild(newDiv);
}



    //b. 删除食物的方法;(最好不对外)
      function removeFood(map){
        //从map中把newDiv删除;(newDiv是局部变量,把他变成总体匿名函数范围内的全局变量)
        //console.log(newDiv);//第一次是null
       if(newDiv !=null){
           map.removeChild(newDiv);
       }
      }
    //把局部变量暴露给全局
    window.Food = Food;//全局范围内，有一个名字叫做Food的构造函数;
})(window);