
window.onload = function () {
    //需求分析
    //1 根据图片数量动态生成小圆点 
    //2 点击小圆点,点亮小圆点(干掉所有人,留下我一个),切换到相应图片
    //3 点击左右箭头,切换前后图片
    //4 可以自动轮播(下一张)
    //5 鼠标移入slider容器,停止轮播
    //6 鼠标移出slider容器,开始轮播


    //步骤：
    //1.生成对应的span(根据图片数量动态生成小圆点)。而且点亮第一个span((干掉所有人,留下我一个))。
    //2.第一张图片放在left=0; 其他图片放在(右侧)left = imgWidth+”px”;
    //3.为每一个span绑定onclick事件后，判断点击的是哪一个按钮
    //4.如果是向左的给定一种程序，向右的一种程序。其他的一种程序
    //5.加上定时器


    //获取相关信息
    var slider = document.getElementById("slider");//外层容器
    var imgWidth = slider.children[0].offsetWidth;//一张图片的宽度
    var liArr = document.getElementsByTagName("li");//所有的图片的集合
    var prev = document.getElementById("prev");//前一张按钮
    var ctrl = prev.parentNode;//所有span的父节点
    //1.生成对应的span。而且点亮第一个span。
    for(var i=0;i<liArr.length;i++){
        //生成新的span
        var newSpan = document.createElement("span");
        //这个内容是看不到的,但是便于获取span的索引
        newSpan.innerHTML = i;
        //因为我们的span事有类名的！！！
        newSpan.className = "slider-ctrl-con";
        //每生成一个span就把他放到prev的前面，这样，就是123456的顺序了
        //添加元素：   父节点.insertBefore(新节点，放在谁前面);
        ctrl.insertBefore(newSpan,prev);
    }
    var spanArr = document.getElementsByTagName("span");
    //点亮第一个
    spanArr[0].className += " current";

    //2.第一张图片放在left=0; 其他图片放在left = imgWidth+”px”;
        //i从1开始，故意调整第一张图片
    for(var i=1;i<liArr.length;i++){
        liArr[i].style.left = imgWidth+"px";
    }

    //3.为每一个span绑定onclick事件后，判断点击的是哪一个按钮
    //记录当前被点击的是哪个span
    var num = 0;
    for(var k in spanArr){//k是索引
        spanArr[k].onclick = function () {
            //4.如果是向左的给定一种程序，向右的一种程序。其他的一种程序
            if(this.className == "prev"){
                //1.移动当前到右边。2.判断是否小于0。3.指定下一张位置。4.移动下一张到当前位置。
                //原来num:4    现在要看3
                animate(liArr[num],{left: imgWidth});
                num = --num < 0? liArr.length-1: num;
                liArr[num].style.left = -imgWidth+"px";
                animate(liArr[num],{left: 0});
                //点亮按钮
                square();
            }else if(this.className == "next") {
                //为我们定义好了向右切换图片的方法，直接调用就可以了！！！
                autoPlay();
            }else{
                //如果要想写程序，先要获取当前被点击的盒子的索引值
                var index = this.innerHTML;//现在要看index = 4,原来是num = 0
                //判断点击的盒子和当前的盒子，谁在前谁在后
                if(index > num){
                    animate(liArr[num],{left:-imgWidth});
                    liArr[index].style.left = imgWidth+"px";
                    animate(liArr[index],{left: 0});
                    //我们完成程序以后，把当前的索引值改为被点击的索引值
                    num = index;
                    //点亮按钮
                    square();
                }
                if(index < num){//原来num=4,现在要看index = 0
                    animate(liArr[num],{left:imgWidth});
                    liArr[index].style.left = -imgWidth+"px";
                    animate(liArr[index],{left: 0});
                    //我们完成程序以后，把当前的索引值改为被点击的索引值
                    num = index;
                    //点亮按钮
                    square();
                }
                //代码提取两个判断语句中都有的内容可以提取出来，是必然会执行的程序
                //animate(liArr[index],{left: 0});
                //num = index;
                //点亮按钮
                //square();
            }
        }
    }
    //5.加上定时器
    var timer = null;
    timer = setInterval(autoPlay,2000);

    //6.清除定时器
    slider.onmouseover = function () {
        clearInterval(timer);
    }
    slider.onmouseout = function () {
        timer = setInterval(autoPlay,2000);
    }

    //定义一个函数（调用定时器和向右侧切换图片的按钮）（代码抽取）
    function autoPlay(){
        //当前的图片在盒子正中心，其他的图片在最右边。
        //切换图片的时候当前图片向左移动，另一张图片向中心移动。
        //1.移动当前到左边。2.判断是否超出图片张数。3.指定下一张位置。4.移动下一张到当前位置。
        animate(liArr[num],{left:-imgWidth});
        //num++;
        //if(num>liArr.length-1){
        //    num=0;
        //}
        num = ++num >liArr.length-1? 0: num;
        liArr[num].style.left = imgWidth+"px";
        animate(liArr[num],{left: 0});
        //点亮按钮
        square();
    }

    //点亮小span
    function square(){
        //排他思想。（干掉所有人，剩下我一个）
        for(var i=0;i<spanArr.length-2;i++){
            spanArr[i].className = "slider-ctrl-con";
        }
        spanArr[num].className += " current";
    }
}