// # 1

class Character {
    #level
    #health
    #exp
    constructor(name, health, level, exp) {
        this.name = name;
        this.#level = level;
        this.#health = health;
        this.#exp = exp;
    }
    get health() {
        return this.#health
    }
    get level() {
        return this.#level
    }
    get exp() {
        return this.#exp
    }
    set health(newHP) {
        this.#health = newHP
    }
    gainExperience(amount) {
        this.#exp += amount;
    }
    levelUp() {
        this.#level++;
        this.#health = 100
    }
    status() {
        return this.name, this.#level, this.#health, this.#exp
    }
}

// #2

class Player extends Character {
    #weapon
    #damage
    #armor
    #defense
    #health
    #level
    #exp
    constructor(name, health, level, exp, playerType, weapon, damage, armor, defense) {
        super(name, health, level, exp);
        this.playerType = playerType;
        this.#weapon = weapon;
        this.#damage = damage;
        this.#armor = armor;
        this.#defense = defense;
    }
    get weapon() {
        return this.#weapon
    }
    get damage() {
        return this.#damage
    }
    get Armor() {
        return this.#armor
    }
    get defense() {
        return this.#defense
    }
    
    status() {
        return `name: ${this.name} \nhealth: ${this.health} \nlevel: ${this.level} \nexp: ${this.exp}\nplayerType: ${this.playerType}\nweapon: ${this.#weapon}\ndamage: ${this.#damage}\narmor: ${this.#armor}\ndefense: ${this.#defense} `
    }
    attack() {
        return `${this.name} uses ${this.#weapon}, dealing ${this.#damage} damage`
    }
    defend(damage) {
        let defDamage = damage - this.#defense;
        let leftOverHP = this.health - defDamage;
        if ((damage - this.#defense) < 0) {
            console.log(damage - this.#defense)
            defDamage = 1
        }
        if (leftOverHP > 0) {
            this.health = leftOverHP;
            return `${this.name}'s HP is dropped to ${leftOverHP}`;
        } else {
            return false

        }

    }

} // player class

let Mira = new Player("Mira", 100, 3, 800, "Mage", "Staff", 18, "robe", 3)
// console.log(Mira.defend(100))

// #3

class Enemy {
    #type
    #health
    #damage
    constructor(type, health, damage) {
        this.#health = health
        this.#type = type
        this.#damage = damage
    }
    get type() {
        return this.#type
    }
    get damage() {
        return this.#damage
    }
    get health() {
        return this.#health
    }
    attack() {
        return `${this.#type} attacks for ${this.#damage} damage`
    }
    takeDamage(damage) {
        if ((this.health - damage) > 0) {
            return `${this.#type}'s hp is dropped to ${this.#health -= damage}`
        } else if (this.health - damage <= 0) {
            return false
        }
    }
} // enemy class

function battle(player, enemy) {
    let flag = true
    while (flag) {
        console.log(player.attack())
        if (enemy.takeDamage(player.damage) != false) {
        console.log(enemy.takeDamage(player.damage))
        }else if (enemy.takeDamage(player.damage) === false) {
            console.log(`${enemy.type}'s hp is dropped to 0`)
            flag = false;
            return `${enemy.type} has been defeated`
        }
        console.log(enemy.attack())
        if (player.defend(enemy.damage) != false) {
        console.log(player.defend(enemy.damage))
        } else if (player.defend(enemy.damage) === false) {
            console.log(`${player.name}'s HP is dropped to 0`)
            flag = false;
            return `${player.name} lost to ${enemy.type}`
        }
    }
} // battle function



let Assasin = new Enemy("Assasin", 50, 12)
let goliath = new Enemy("Goliath", 1000, 50)
console.log(battle(Mira, Assasin))
