var flag = true;//��¼��û�л���λ�ã�û����Ϊtrue
for (var i=0;i<newArr.length-1;i++) {//һ����Ҫ�Ƚϵ�����
	for(var j=0;j<newArr.length-i-1;j++) {//ÿ�αȽϵĴ���
		//count++;//�Ƚϴ���
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