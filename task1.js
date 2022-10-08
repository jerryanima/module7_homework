function listAnime(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log('name: ' + key + ', quantity: ' + obj[key])
        }
    }
}

let anime = {
    bleach : "366",
    naruto : "820",
    attackOnTitan : "86"
}

listAnime(anime);