var text;
const link = document.getElementById('link')
function url_generator(){
text='';
var a=document.getElementById('URL').value;
var b=document.getElementById('source').value;
var c=document.getElementById('team').value;
text+=a+'#src='+b+'&team='+c;
if(pattern[a]!=".+\.com")
{
	alert("Hello! I am an alert box!!");
}
link.value=text;
event.preventDefault();
}
document.getElementById('press').addEventListener('click',url_generator);
function Copy(){

link.select();
document.execCommand("Copy");
alert("Copied URL:"+link.value);
}
