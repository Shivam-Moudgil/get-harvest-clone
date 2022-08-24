let now=new Date
var dd = String(now.getDate()).padStart(2, '0');
var mm = String(now.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = now.getFullYear();
let dayArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satuarday"];
let monthArr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
let curMonth=monthArr[parseInt(mm-1)]
let day=now.getDay()
let x=document.getElementById("dd");

x.innerText=`${dayArr[day]}, ${dd} ${curMonth}`