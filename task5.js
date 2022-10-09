class Electronics{
    constructor(elecName){
        this.elecName = elecName
        this.onOff = false
    }

    checkOnOff(){
        const check = (this.onOff == true) ? `${this.elecName} включено` : `${this.elecName} выключено`
        console.log(check);
    }

    on(){
        this.onOff = true
    }

    off(){
        this.onOff = false
    }

    power(power){
        console.log(`потребляемую мощность = ${power}`)
    }
}

class PC extends Electronics{
    constructor(elecName, processor, memory, graphics){
        super(elecName = elecName),
        this.processor = processor,
        this.memory = memory,
        this.graphics = graphics    
    }

    openGame(nameGame){
        let listGame = ['Cyberpunk 2077', 'The Witcher 3: Wild Hunt'];
        const checkListGame = (listGame.indexOf(nameGame) >= 0 ? `Игра ${nameGame} открывается. Хорошой игры!` : `${nameGame} данной игры нет в вашей библиотеки. Купим?`)
        console.log(checkListGame)
    }
} 

class Lumos extends Electronics {
    constructor (elecName, typeLamp) {
        super(elecName = elecName),
        this.typeLamp = typeLamp
    }
}


const computer = new PC('Lenoto Legion', 'AMD Ryzen 9','32 Гб', 'GTX 3080 6GB');
const lamp = new Lumos('Настольная лампа', 'Светодиодная');
computer.on();
lamp.checkOnOff();
lamp.power('200')
computer.openGame('Cyberpunk 2077')
console.log(computer);