var ButtonJob;

ButtonJob = {};

	ButtonJob.result = "";
	
	ButtonJob.getNumberisString = function(n) {
		return (n-0);
	};

	ButtonJob.getFactorial = function(n) {
		if(n==0) return 1;
  		return (n != 1) ? n * this.getFactorial(n - 1) : 1;
	};

	ButtonJob.getNumberKatalanna = function(n) {
		return this.getFactorial(2*n)/(this.getFactorial(n+1)*this.getFactorial(n));
	};
	
	ButtonJob.getStringKatalanna = function(n) { // result
		if(n == 1) { this.result = "1"; return; };
			this.result = "";
			this.result = "1, ";
 			for(var i = 1; i < n; i++) {
 		this.result+=this.getNumberKatalanna(i);
 		this.result+=", ";
 		};
	};

	ButtonJob.getFibonachi = function(n, varik) { //result
		var fibonacci = [0, 1];
		this.result = "0, 1";
		for (var i = 2; i < n; i ++) {
  		fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
  		this.result += ", ";
  		this.result += fibonacci[i];
 		};
		if(varik=="number") this.result = fibonacci[n-1];
	};

	ButtonJob.getProstotaNumbera = function(n) {
		if((n%2==0)&&(n!=2)) this.result = "складне число";
			else if (n==2) this.result = "просте число"; else {
				var k=Math.round(Math.sqrt(n));
     			var flag = false;
             
			    for(var i = 2; i < k+1; i++)
			       if(n%i==0)
			       {
			          this.result = "складне число";
			 	      flag = true;
			          break;
			       }
			    if (flag == false)
			    this.result = "просте число";
			}
	};

	ButtonJob.NSD = function(x,y) {
		if(x==y)
			return x;
		if(x<y)
			return this.NSD(x,y-x);
		if(x>y)
			return this.NSD(x-y,y);
	};

	ButtonJob.NSK = function(x,y) {
		return Math.abs(x*y)/this.NSD(x,y);
	};

	ButtonJob.getDoskonalostNumbera = function(n) {
		var sum = 0;
		for(var i = 1; i < n; i++) {
			if(n % i == 0)
				sum += i;
		}
		if(i==sum) this.result = "досконале число"; else this.result = "не досконале число";
	}

	ButtonJob.Test = function() {
		str = this.getFibonachi(10, "number");
		alert(str);
	};




///----------------------------------------------------------------------///








