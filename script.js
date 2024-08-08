document.addEventListener('DOMContentLoaded', (event) => { let input = document.getElementById('inputbox');
   console.log(input, "input box");
   let buttons =document.querySelectorAll('button');
    let string = "";
    let arr = Array.from(buttons);
    console.log(arr,"arr");
    arr.forEach(button=>{
      console.log(arr,"arr");
      console.log(button, "button");
       button.addEventListener('click',(e) =>
       {
         if(e.target.innerHTML== '='){
            string=eval(string);
            input.value=string;
         }
            else
            {
               string+= e.target.innerHTML;
               input.value=string; 
            }
       })
    })})
