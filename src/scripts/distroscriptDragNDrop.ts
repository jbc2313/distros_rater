
function allowdrop(e: Event) {
    if(e instanceof DragEvent)
        e.preventDefault();
}

function dragstarter(e: Event) {
    if(e instanceof DragEvent) {
        if(e.target instanceof HTMLElement) {
            if(e.dataTransfer != null) {
                e.dataTransfer.setData("text/plain", e.target.id);
                e.dataTransfer.effectAllowed = "move";
                e.dataTransfer.dropEffect = "move";
            }
        }
    }
};


function drop(e: Event) {
    console.log("DROP EVENT");
    if(e instanceof DragEvent) {
        if(e.dataTransfer) {
            e.preventDefault();
            const data = e.dataTransfer.getData("text/plain");
            console.log(`DROP DATA = ${data}`);
            //if(e.target instanceof HTMLElement)
            //e.target.appendChild(document.getElementById(data));
        }
    }

}


