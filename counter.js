
let display=document.getElementById("count");
let count=0;
display.innerHTML=count;
function lower()
{
	if(count<=0)
	{
		count=0;
	}
	else
	{
		count-=1;
		
	}
	display.innerHTML=count;
	
}
function add()
{
	count+=1;
	display.innerHTML=count;

}