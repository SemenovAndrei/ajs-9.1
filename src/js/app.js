import Daemon from './characters/daemon';

const character = new Daemon('Alex');

character.stoned = true;
character.attack = 10;
character.range = 2;
console.log(character);
