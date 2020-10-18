import Bowman from './bowman';
import Daemon from './daemon';
import Magician from './magician';
import Swordsman from './swordsman';
import Undead from './undead';
import Zombie from './zombie';

const bowman = new Bowman('bowmanA');
const daemon = new Daemon('daemonA');
const magician = new Magician('magicianA');
const swordsman = new Swordsman('swordsmanA');
const undead = new Undead('undeadA');
const zombie = new Zombie('zombieA');

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
