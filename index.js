let count=0;
let value=document.querySelector("#text");
let bt=document.querySelectorAll(".btn");

bt.forEach(element => {
    element.addEventListener('click',function(e){
        const cl=e.currentTarget.classList;
        if(cl.contains('dec')){
            count--;
        }
        else if(cl.contains('inc')){
            count++;
        }
        else if(cl.contains('reset')){
            count=0;
        }
        value.textContent=count;
        if(count<0){
            value.style.color="red";
        }
        if(count==0){
            value.style.color="black";
        }
        if(count>0){
            value.style.color="green";
        }
    });
});