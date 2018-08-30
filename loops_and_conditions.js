var x = 5;
var y = 8;
var i =0;
var linebreak = "<br />";

for(i=0; i<x; i++)
{
	if(y>x)
	{
		document.write(y);
		document.write(" is greater");
		document.write(linebreak);
	}
	else
	{
		document.write(x);
		document.write( "is greater");
		document.write(linebreak);
	}
	y--;
}

mul = x*y;
div = x/y;

document.write("multiplication = ");
document.write(mul);
document.write(linebreak);

document.write("division = ");
document.write(div);
document.write(linebreak);
