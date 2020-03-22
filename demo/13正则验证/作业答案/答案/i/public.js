function rand(min,max){
	//该方法返回一个min和max之间的随机数:200-600
	return Math.floor(Math.random()*(max-min+1)+min);
	
}
function $id(id){
	//该方法根据传入的id返回该id对应的标签
	return document.getElementById(id);
}

function windowWidth(){
	return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;

}

function getElements(className){
	//传入类名,返回指定类名的节点的集合,兼容ie678
	var result = [];
	var all = document.getElementsByTagName('*');
	for(var i=0;i<all.length;i++){
		if(all[i].className==className){
			result.push(all[i])
		}
	}
	return result;
}


function getStyle(dom,attr){
	//获取指定节点的指定属性
	if(dom.currentStyle){
		return dom.currentStyle[attr]
	}else{
		return getComputedStyle(dom,false)[attr]
	}
}

function getColor(){
	//获取一个#123ABC
	var str = "#";
	for(var i=0;i<6;i++){
		//生成一个0-15之间的随机数,然后转成16进制
		str = str+rand(0,15).toString(16);
	}
	return str;
}