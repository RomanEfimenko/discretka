function isNumber () { 
	return (use("input").value-0);
};

function nInput () {
	return this.isNumber();
};

function use (id) {
	return document.getElementById(id);
};

function ButtonUse() {
	if(Information.key==1) Button1(nInput());
	if(Information.key==2) Button2(nInput());
	if(Information.key==3) Button3(nInput());
	if(Information.key==4) Button4(nInput());
	if(Information.key==5) Button5(use("input").value);
	if(Information.key==6) Button6(nInput());

};
//----------------------------------------------------------------------------------------------//

function Button1(n) {
	if(n<0||n>170) {
		use("input").value = "Число не може бути менше 0 і більше 170";
		return;
	}
	var f = ButtonJob.getFactorial(n);
	use("input").value = n+"! = "+f;
};

function Button2(n) {
	if(n<=0) {
		use("input").value = "Напишіть ціле число більше від нуля";
		return;
	}
	var otvet;
	ButtonJob.getStringKatalanna(n);
	otvet = ButtonJob.result;
	use("input").value = "Число Каталанна №"+n+" = "+ButtonJob.getNumberKatalanna(n)+";";
	var x = Math.round(((screen.width)/2)-(429/2));
	var y = Math.round(-100+((screen.height)/2)-(355/2));
	var TablePosition = "left="+x+",top="+y;
	var TableKatalanna = window.open('Katalanna.html', 'Числа Каталанна', TablePosition+',width=429,height=355,menubar=no,toolbar=no,location=no,status=no,resizable=no,scrollbars=no');
	TableKatalanna.onload = function() { 
		TableKatalanna.document.getElementById("textKatalanna").innerHTML = otvet;
	}   
}

function Button3(n) {
	if(n<=0) {
		use("input").value = "Напишіть ціле число більше від нуля";
		return;
	}
	if(n==1){
		use("input").value = "0";
	}
	if(n==2){
		use("input").value = "0, 1";
	}
	var otvet;
	ButtonJob.getFibonachi(n, "number");
	use("input").value = "Число Фібоначчі №"+n+" = "+ButtonJob.result+";";
	ButtonJob.getFibonachi(n, "string");
	otvet = ButtonJob.result;
	var x = Math.round(((screen.width)/2)-(429/2));
	var y = Math.round(-100+((screen.height)/2)-(355/2));
	var TablePosition = "left="+x+",top="+y;
	var TableFibonachi = window.open('Fibonachi.html', 'Числа Фібоначчі', TablePosition+',width=429,height=355,menubar=no,toolbar=no,location=no,status=no,resizable=no,scrollbars=no');
	TableFibonachi.onload = function() { 
		TableFibonachi.document.getElementById("textFibonachi").innerHTML = otvet;
	}
}

function Button4(n) {
	if(n<1) {
		use("input").value = "Число не натуральне";
		return;
	}
	if(isNaN(n)) return;
	ButtonJob.getProstotaNumbera(n);
	var r = ButtonJob.result;
	use("input").value = n+" це "+r;
};

function Button5(demoText) {
	var txt1;
	var txt2;
	var flag;
	flag = true;
	txt1="";
	txt2="";
	for(var i = 0; i < demoText.length; i++) {
		if(flag==true)
			if(demoText.charAt(i)==",") {
				flag = false;
				i = i + 1; }
				else txt1+=demoText.charAt(i);
		if(flag==false) txt2+=demoText.charAt(i);
	};
	var num1; var num2;
	num1 = (txt1-0);
	num2 = (txt2-0);
	if(!((typeof(num1)=="number")&&(typeof(num1)=="number"))) {
		use("input").value = "Помилка вводу";
		return;
	}
	use("input").value = "НСД = "+ButtonJob.NSD(num1,num2)+"; НСК = "+ButtonJob.NSK(num1,num2)+";";
};

function Button6(n) {
	if(n<1) {
		use("input").value = "Число не натуральне";
		return;
	}
	if(isNaN(n)) return;
	ButtonJob.getDoskonalostNumbera(n);
	var r = ButtonJob.result;
	use("input").value = n+" це "+r;
};

//----------------------------------------------------------------------------------------------//
