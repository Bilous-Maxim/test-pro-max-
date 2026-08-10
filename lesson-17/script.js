let heroName = 'Артур Сміливий';
let heroLevel = 5;
let heroClass = 'Воїн';
let hasWeapon = true;

console.log('=== КАРТКА ГЕРОЯ ===');
console.log("Ім'я:", heroName);
console.log('Рівень:', heroLevel);
console.log('Клас:', heroClass);
console.log('Має зброю:', hasWeapon);

let health = 100;
let dragonDamage = 45;
let healPotion = 30;
let armorBonus = 20;

document.getElementById('health').innerHTML = "Початкове здоров'я: " + health;

health = health - dragonDamage;

document.getElementById('dragon').innerHTML = 'Після бою з драконом: ' + health;

health = health + healPotion;

document.getElementById('potion').innerHTML = 'Після вживання зілля: ' + health;

health = health + armorBonus;

document.getElementById('armor').innerHTML = 'Після одягання броні: ' + health;

document.getElementById('final').innerHTML = "Фінальне здоров'я: " + health;
