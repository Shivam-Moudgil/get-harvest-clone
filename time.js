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
let str=x.innerText;
localStorage.setItem("trackTimeFor",JSON.stringify(str))




function trackTime(){
    let obj={
        projectCode:"0000",
        name: "project name",
        client:"Example Client",
        task:"Pagination",
        descrip:"someting"
    }
    localStorage.setItem("proInfo",JSON.stringify(obj))
    
    // let str=JSON.parse(localStorage.getItem("trackTimeFor"))
    
    // let div=document.getElementById("trackProjectDetail")

    // let h3=document.createElement("h3")
    // h3.innerText=`New time entry for ${str}`;

    // let form=document.createElement("form")
    // let ip1=document.createElement("input")
    // form.append(ip1)
    // div.append(h3,form)

    let div=document.getElementById("timedProject")
    div.innerHTML=null;
    let data=JSON.parse(localStorage.getItem("proInfo"))||[]
    
    let {projectCode,name,client,task,descrip} =data;

let outerDiv=document.createElement("div")

outerDiv.setAttribute("class","appendedProject")

    let div1=document.createElement("div")
    

    let h2=document.createElement("h2")
    h2.innerText=`[${projectCode}] ${name} (${client})`

    let tsk=document.createElement("h4")
    tsk.innerText=task;

    let desc=document.createElement("p")
    desc.innerText=descrip
    div1.append(h2,tsk,desc);
    

    let div2=document.createElement("div")
    div2.setAttribute("class","rightSideOfProject")
    let showTime=document.createElement("h2")
    showTime.innerText="0:00"
    

    let divForButton=document.createElement("div")
    let startBtn=document.createElement("button")
    startBtn.innerText="Start"

    let edit_delete=document.createElement("button")
    edit_delete.innerText="Delete"

    divForButton.append(startBtn)

    div2.append(showTime,divForButton,edit_delete)
    outerDiv.append(div1,div2)
    
    div.append(outerDiv)
}

