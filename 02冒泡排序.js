var flag = true;//记录有没有换过位置，没有则为true
for (var i=0;i<newArr.length-1;i++) {//一共需要比较的轮数
	for(var j=0;j<newArr.length-i-1;j++) {//每次比较的次数
		//count++;//比较次数
		flag = false
		if (newArr[j]>newArr[j+1]) {
			var temp = newArr[j+1];
			newArr[j+1] = newArr[j];
			newArr[j] = temp;//change location
		}
	}
	if (flag==true) {
		break;
	}
}