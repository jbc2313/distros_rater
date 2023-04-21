
const pageDialogue = document.getElementById("pageDialogue");
const closeDialog = document.getElementById("closeDialog");
const dialogSubmit = document.getElementById("dialogSubmit");
let distroChosen;
let distroRank;

const rateButton = document.getElementById("RateButton");
if(rateButton != null){
    rateButton.addEventListener("click", (ev)=>{
        if(ev.target instanceof HTMLButtonElement) 
        //console.log(ev.target.innerHTML);
        if(pageDialogue instanceof HTMLDialogElement)
        pageDialogue.showModal(); 
    });
}

dialogSubmit?.addEventListener('click', (event)=>{ 
    event.preventDefault();
    distroChosen = document.getElementById("DistroInput");
    if(distroChosen instanceof HTMLInputElement) 
    console.log(distroChosen.value);
    //place user chosen info in the table here

    distroRank = document.getElementById("DistroRank");
    if(distroRank instanceof HTMLInputElement)
    console.log(distroRank.value);
    //place user chosen info in the table here

    if(pageDialogue instanceof HTMLDialogElement)
    pageDialogue.close(); 
    
});



