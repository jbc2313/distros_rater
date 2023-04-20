
const pageDialogue = document.getElementById("pageDialogue");


const rateButton = document.getElementById("RateButton");
if(rateButton != null){
    rateButton.addEventListener("click", (ev)=>{
        if(ev.target instanceof HTMLButtonElement) 
        console.log(ev.target.innerHTML);
        if(pageDialogue instanceof HTMLDialogElement)
        pageDialogue.showModal(); 
    });
}

