import StonedCharacters from './stonedCharacters';

/**
 * @class
* Создает персонажа с классом Daemon
*
* @extends StonedCharacters
*/
class Daemon extends StonedCharacters {
  constructor(name) {
    super(name);

    this.attack = 10;
    this.defence = 40;
    this.type = 'daemon';
  }
}

export default Daemon;
