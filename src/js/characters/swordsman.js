import Character from './character';

/**
 * @class
* Создает персонажа с классом Swordsman
*
* @extends Character
*/
class Swordsman extends Character {
  constructor(name) {
    super(name);

    this.type = 'swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}

export default Swordsman;
