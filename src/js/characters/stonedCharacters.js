import Character from './character';

/**
 * @class
* Создает персонажа с классом StonedCharacters
*
* @extends Character
*/
class StonedCharacters extends Character {
  constructor(name) {
    super(name);

    this.type = 'stonedCharacters';
    this.stoned = false;
    this.range = 1;
  }

  /**
   * Устанавливает значение свойству stoned
   *
   * Принимает аргументом boolean
   *
   * @throws {error}
   */
  set stoned(value) {
    if (typeof value !== 'boolean') {
      throw new Error('stoned должно быть boolean');
    }
    this._stoned = value;
  }

  /**
   * Возвращает значение свойства stoned
   */
  get stoned() {
    return this._stoned;
  }

  /**
   * Устанавливает значение свойству range
   *
   * Принимает аргументом {number} >= 1
   *
   * @throws {error}
   */
  set range(value) {
    if (typeof value !== 'number' || Number.isNaN(value) || value < 1) {
      throw new Error(`некорректное значение расстояния - ${value}`);
    }
    this._range = Math.trunc(value);
  }

  /**
   * Возвращает значение свойства range
   */
  get range() {
    return this._range;
  }

  /**
   * Устанавливает значение свойству attack
   *
   * Принимает аргументом {number} >= 0
   *
   * @throws {error}
   */
  set attack(value) {
    if (typeof value !== 'number' || Number.isNaN(value) || value < 0) {
      throw new Error(`некорректное значение атаки - ${value}`);
    }

    this._attack = value;
  }

  /**
   * Возвращает значение свойства attack
   *
   * Рассчитывает значение по формуле, учитывая свойства
   *
   * range - stoned - rangeMod
   */
  get attack() {
    let attack = this._attack;
    attack -= attack * (this.range * 0.1 - 0.1);
    if (this.stoned) {
      attack -= Math.log2(this.range) * 5;
    }
    return attack > 1 ? Math.trunc(attack) : 0;
  }

  /**
   * Устанавливает значение свойству defence
   *
   * Принимает аргументом {number} >= 0
   *
   * @throws {error}
   */
  set defence(value) {
    if (typeof value !== 'number' || Number.isNaN(value) || value < 0) {
      throw new Error(`некорректное значение защиты - ${value}`);
    }

    this._defence = value;
  }

  /**
   * Возвращает значение свойства defence
   */
  get defence() {
    return this._defence;
  }

  /**
   * На 1 повышает поле level.
   *
   * На 20% повышает показатели _attack и _defence.
   *
   * Приводит показатель health к значению 100.
   *
   * Здоровье персонажа должно быть больше 0.
   *
   * @throws {error} 'нельзя повысить левел умершего'
   */
  levelUp() {
    if (this.health <= 0) {
      throw new Error('нельзя повысить левел умершего');
    }

    this.level += 1;
    this._attack = Math.round(this._attack * 1.2);
    this._defence = Math.round(this._defence * 1.2);
    this.health = 100;
  }
}

export default StonedCharacters;
