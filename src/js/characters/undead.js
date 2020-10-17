import Character from './character';

/**
 * @class
* Создает персонажа с классом Undead
*
* @extends Character
*/
class Undead extends Character {
  constructor(name) {
    super(name);

    this.type = 'undead';
    this.attack = 25;
    this.defence = 25;
  }
}

export default Undead;
