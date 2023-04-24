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
    if(e instanceof DragEvent) {
        if(e.dataTransfer) {
            //const data = e.dataTransfer.getData("text/plain");    
            e.preventDefault();
        }
    }

}


