function Electronics(elecName){
    this.elecName = elecName
    this.onOff = false
}

function PC(elecName, processor, memory, graphics){
    this.elecName = elecName,
    this.processor = processor,
    this.memory = memory,
    this.graphics = graphics    
}

function Lumos(elecName, typeLamp){
    this.elecName = elecName,
    this.typeLamp = typeLamp
}

Electronics.prototype.checkOnOff = function(){
    const check = (this.onOff == true) ? `${this.elecName} включено` : `${this.elecName} выключено`
    console.log(check);
}

Electronics.prototype.on = function(){
    this.onOff = true
}

Electronics.prototype.off = function(){
    this.onOff = false
}

Electronics.prototype.power = function(power){
    console.log(`потребляемую мощность = ${power}`)
}

PC.prototype = new Electronics()
Lumos.prototype = new Electronics()

PC.prototype.openGame = function(nameGame){
    let listGame = ['Cyberpunk 2077', 'The Witcher 3: Wild Hunt'];
    const checkListGame = (listGame.indexOf(nameGame) >= 0 ? `Игра ${nameGame} открывается. Хорошой игры!` : `${nameGame} данной игры нет в вашей библиотеки. Купим?`)
    console.log(checkListGame)
}

const computer = new PC('Lenoto Legion', 'AMD Ryzen 9','32 Гб', 'GTX 3080 6GB');
const lamp = new Lumos('Настольная лампа', 'Светодиодная');
computer.on();
lamp.checkOnOff();
lamp.power('200')
computer.openGame('The Witcher 2')
console.log(lamp);