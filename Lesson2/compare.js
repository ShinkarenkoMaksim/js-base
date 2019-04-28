var a, b;
a = Math.round(Math.random() * 200 - 100);
b = Math.round(Math.random() * 200 - 100);
if (a >= 0 && b >= 0) 
	alert(Math.abs(a - b));
else if (a < 0 && b < 0)
	alert(a * b);
else
	alert(a + b);

a = Math.round(Math.random() * 15);
switch (a) {
	case(0) :
		alert(a++);
	case(1) :
		alert(a++);
	case(2) :
		alert(a++);
	case(3) :
		alert(a++);
	case(4):
		alert(a++);
	case(5) :
		alert(a++);
	case(6) :
		alert(a++);
	case(7) :
		alert(a++);
	case(8):
		alert(a++);
	case(9) :
		alert(a++);
	case(10) :
		alert(a++);
	case(11) :
		alert(a++);
	case(12) :
		alert(a++);
	case(13) :
		alert(a++);
	case(14) :
		alert(a++);
	case(15) :
		alert(a++);
}