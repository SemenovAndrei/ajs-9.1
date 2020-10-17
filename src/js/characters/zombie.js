import Character from './character';

/**
 * @class
* Создает персонажа с классом Zombie
*
* @extends Character
*/
class Zombie extends Character {
  constructor(name) {
    super(name);

    this.type = 'zombie';
    this.attack = 40;
    this.defence = 10;
  }
}

export default Zombie;
