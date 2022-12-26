const elements = document.getElementsByClassName("wrapperblock show");
while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
}