import Character from './character';

/**
 * @class
* Создает персонажа с классом Magician
*
* @extends Character
*/
class Magician extends Character {
  constructor(name) {
    super(name);

    this.type = 'magician';
    this.attack = 10;
    this.defence = 40;
  }
}

export default Magician;
