

 const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function digitalclock(){

let h = new Date().getHours();
 let m = new Date().getMinutes();
  let s = new Date().getSeconds();

 if(h >=12){ 
     h = ((h - 12) == 0) ? 12: (h-12); 
   }else{ 
      h = h; 
   }
