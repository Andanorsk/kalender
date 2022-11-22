var myname ="Odd Erik"

var settning = "started"
console.log(settning);

function odderik(el){
    // el.innerHTML = 'FUCK YOU!';
    
    // el.style.backgroundColor = "";
    imageNummer=el.innerHTML;
    el.innerHTML=" ";
    console.log(imageNummer);
    if(imageNummer==1){
        console.log("IF ok");
        el.className="kalendervindu gift"; 
    }
}