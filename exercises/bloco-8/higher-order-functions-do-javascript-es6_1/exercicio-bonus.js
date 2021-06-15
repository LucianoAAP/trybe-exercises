const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragon = () => Math.floor(Math.random() * (dragon.strength - 15 + 1) ) + 15;
const danoWarrior = () => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength + 1) ) + warrior.strength;
const danoEManaMage = () => {
  let mageAttack = {};
  if (mage.mana < 15) {
    mageAttack.dmg = 'Não possui mana suficiente';
    mageAttack.manaSpent = 0;
  } else {
    mageAttack.dmg = Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence + 1) ) + mage.intelligence;
    mageAttack.manaSpent = 15; 
  }
  return mageAttack;
}

const gameActions = {
  turnoWarrior: (danoWarrior) => {
    const dmgWarrior = danoWarrior();
    dragon.healthPoints -= dmgWarrior;
    warrior.damage = dmgWarrior;
  },
  turnoMage: (danoEManaMage) => {
    const dMMage = danoEManaMage();
    if (typeof dMMage.dmg === 'number') {
      dragon.healthPoints -= dMMage.dmg;
    }
    mage.damage = dMMage.dmg;
    mage.mana -= dMMage.manaSpent;
  },
  turnoDragon: (danoDragon) => {
    const dmgDragon = danoDragon();
    warrior.healthPoints -= dmgDragon;
    mage.healthPoints -= dmgDragon;
    dragon.damage = dmgDragon;
  },
  results: () => battleMembers,
};

gameActions.turnoWarrior(danoWarrior);
gameActions.turnoMage(danoEManaMage);
gameActions.turnoDragon(danoDragon);
console.log(gameActions.results());