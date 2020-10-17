import Character from './character';

/**
 * @class
* Создает персонажа с классом Daemon
*
* @extends Character
*/
class Daemon extends Character {
  constructor(name) {
    super(name);

    this.type = 'daemon';
    this.attack = 10;
    this.defence = 40;
  }
}

export default Daemon;
