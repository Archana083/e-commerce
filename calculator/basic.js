let String="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
button.addEventListener('click', (e)=>{
if(e.target.innerHTML == '=')
{
String = eval(String);
document.querySelector('input').value = String;
}
else if(e.target.innerHTML == 'C')
{
String ="" ;
document.querySelector('input').value = String;
}
else
{


console.log(e.target);
String = String + e.target.innerHTML;
document.querySelector('input').value = String;
}
})
})