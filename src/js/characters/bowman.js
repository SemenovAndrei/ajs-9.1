import Character from './character';

/**
 * @class
* Создает персонажа с классом Bowman
*
* @extends Character
*/
class Bowman extends Character {
  constructor(name) {
    super(name);

    this.type = 'bowman';
    this.attack = 25;
    this.defence = 25;
  }
}

export default Bowman;
