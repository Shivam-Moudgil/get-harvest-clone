/*
1.   <link rel="stylesheet" href="./post_nav.css"></link>    -link to all page have navba

------------------------
2.  #nav_Time{
    background-color:#fb7d33;
}----------------------------
  add to the css of the perticucar page only change id--(#nav_Time,#nav_Expensess,#nav_Projects,#nav_Reports)
3.
----------------------------------------
import {post_nav} from "./post_nav.js"
document.querySelector("#navbar").innerHTML=post_nav();
----------------------------------------



*/
let post_nav = () => {
  return `    <div id="sub_nav">
    <div class="path2">
     <a href="./time.html"><h4  class="nav_ele" id="nav_Time">Time</h4></a>
      <a href="./expenses.html">  <h4  class="nav_ele" id="nav_Expenses">Expenses</h4></a>
       <a href="./project.html"> <h4  class="nav_ele" id="nav_Projects">Projects</h4></a>
        <a href="">  <h4  class="nav_ele" id="nav_Reports">Reports</h4></a>
        <a href="./manage.html">  <h4  class="nav_ele" id="nav_Reports">Manage</h4></a>
    
  
   
  
    </div>
    <div  class="path">
     <select>
<option>Profile</option>
<option id="logout" >Logout</option>
        </select>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" id="profilpic">
        <h4  class="nav_ele4"></h4>
       
    </div>
</div>`;
};
export {post_nav};
