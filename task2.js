let anime = {
    bleach : "366",
    naruto : "820",
    attackOnTitan : "86"
}

function checkProperty(nameProperty, obj){
    return nameProperty in obj;
}

console.log(checkProperty('bleach2', anime));