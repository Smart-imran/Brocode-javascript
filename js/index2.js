 /*  let a = window.prompt("Enter a");
  a =Number(a);
  let b = window.prompt("Enter b");
  b =Number(b);  
  let c= Math.sqrt(Math.pow(a,2) + Math.pow(b,2))
  console.log("The number result is :", c); */

  let a;
  let b;
  let c;
   document.getElementById("btnSubmit").onclick = function(){
     a=document.getElementById("textA").value;
     a= Number(a);
     b=document.getElementById("textB").value;
     b= Number(b);
     c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
     document.getElementById("sideC").innerHTML ="Side C :" +c;



   }