import StonedCharacters from './stonedCharacters';

/**
 * @class
* Создает персонажа с классом Magician
*
* @extends StonedCharacters
*/
class Magician extends StonedCharacters {
  constructor(name) {
    super(name);

    this.attack = 10;
    this.defence = 40;
    this.type = 'magician';
  }
}

export default Magician;
