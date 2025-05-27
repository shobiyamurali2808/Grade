var id=parseInt(prompt("Enter Your Id"));
var studentname=(prompt("Enter the Name"));
var mark1=parseInt(prompt("Tamil"));
var mark2=parseInt(prompt("English"));
var mark3=parseInt(prompt("Maths"));
var mark4=parseInt(prompt("Science"));
var mark5=parseInt(prompt("Social Science"));
var total=mark1+mark2+mark3+mark4+mark5;
var percentage=(total*100/500);
document.write("total ="+total+"<br>");
document.write("percentage ="+percentage);
if(percentage>90)
{
    alert("Grade A")
}
else if((percentage<90)&&(percentage>80))
{
alert("Grade B")
}
else if((percentage<80)&&(percentage>70))
{
alert("Grade C")
}
else if((percentage<70)&&(percentage>60))
    {
    alert("Grade D")
    }
    else if((percentage<60)&&(percentage>50))
        {
        alert("Grade E")
        }
else{
    alert("Fail")
}