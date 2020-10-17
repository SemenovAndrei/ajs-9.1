import Bowman from './bowman';
import Daemon from './daemon';
import Magician from './magician';
import Swordsman from './swordsman';
import Undead from './undead';
import Zombie from './zombie';

const bowman = new Bowman('bowman1');
const daemon = new Daemon('daemon1');
const magician = new Magician('magician1');
const swordsman = new Swordsman('swordsman1');
const undead = new Undead('undead1');
const zombie = new Zombie('zombie1');

/**
 * Список персонажей
 */
const charactersList = [
  bowman,
  daemon,
  magician,
  swordsman,
  undead,
  zombie,
];

export default charactersList;
