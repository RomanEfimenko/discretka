var Information;

Information = {};

	Information.key = 1;

	Information.buttonInfo = ["Порахувати","Вивести","Вивести","Перевірити","Знайти НСД і НСК","Вивести"];

	Information.ClickHelp = function(n) {
		switch(n) {
			case 1: alert("Введіть натуральне число\n(n)"); break;
			case 2: alert("Введіть ту кількість чисел,\nяку ви бажаєте отримати:\n(n)"); break;
			case 3: alert("Введіть ту кількість чисел,\nяку ви бажаєте отримати:\n(n)"); break;
			case 4: alert("Введіть натуральне число\n(n)"); break;
			case 5: alert("Введіть 2 числа через кому\n(n, m)"); break;
			case 6: alert("Введіть натуральне число\n(n)"); break;
	}	}

	Information.newBackgroundColorButtons = function(n) {
		for(var i = 1; i < 7; i++) {
			var name = 'b'+i;
			document.getElementById(name).style.backgroundColor = "paleturquoise";
		};
			var name = 'b'+n;
			document.getElementById(name).style.backgroundColor = "mediumturquoise";
			document.getElementById("button").value = this.buttonInfo[n-1];
	};

	Information.setActive = function(n) {
		this.key = n;
		this.newBackgroundColorButtons(n);
		document.getElementById("input").value = "";
		this.ClickHelp(n);
	};