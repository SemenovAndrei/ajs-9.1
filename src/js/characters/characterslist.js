import Bowman from './bowman';
import Daemon from './daemon';
import Magician from './magician';
import Swordsman from './swordsman';
import Undead from './undead';
import Zombie from './zombie';

const bowman = new Bowman('bowman');
const daemon = new Daemon('daemon');
const magician = new Magician('magician');
const swordsman = new Swordsman('swordsman');
const undead = new Undead('undead');
const zombie = new Zombie('zombie');

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
