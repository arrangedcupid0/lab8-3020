function fib(n)
{
	console.log(fibRec(n, 0, 1));
}

function fibRec(n, a, b)
{
	if(n == 0)
	{
		return 0;
	}
	if(n == 1)
	{
		return b;
	}
	return fibRec(n - 1, b, b + a);
}

function testThisBS()
{
	fib(5);
	fib(4);
	fib(23);
	fib(19);
	fib(39);
}

testThisBS();
