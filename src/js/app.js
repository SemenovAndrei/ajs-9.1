import Daemon from './characters/daemon';

const character = new Daemon('Alex');

character.stoned = true;
character.rangedMod = true;
character.range = 2;
// character.damage(500);
console.log(character.attack);

character.levelUp();
console.log(character.attack);
console.log(character);
