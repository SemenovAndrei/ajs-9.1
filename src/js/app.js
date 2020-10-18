import Daemon from './characters/daemon';

const character = new Daemon('Alex');

character.stoned = true;
character.range = 2;
console.log(character);
