
const pageDialogue = document.getElementById("pageDialogue");
const closeDialog = document.getElementById("closeDialog");
const dialogSubmit = document.getElementById("dialogSubmit");

const sbox = document.getElementById("sbox");
const abox = document.getElementById("abox");
const bbox = document.getElementById("bbox");
const cbox = document.getElementById("cbox");
const fbox = document.getElementById("fbox");

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
    console.log(`Distro Chosen: ${distroChosen.value}`);
    //place user chosen info in the table here

    distroRank = document.getElementById("DistroRank");
    if(distroRank instanceof HTMLInputElement)
    console.log(`Rank Chosen: ${distroRank.value}`);
    //place user chosen info in the table here

    if(pageDialogue instanceof HTMLDialogElement)
    pageDialogue.close(); 
    
});



