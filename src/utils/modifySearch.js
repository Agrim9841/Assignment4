export let searchItem = "";

export function updateSearchItem(newValue){
    searchItem = newValue
}

export let showAvailable = false;

export function toggleShowAvailable(){
    showAvailable = !showAvailable;
}