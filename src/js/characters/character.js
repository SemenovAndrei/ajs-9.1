
/** Class базовый персонаж */
class Character {
/**
* создает базового персонажа
*
* @param {string} name - имя персонажа,
* должно быть строкой с длиной 2-10 символов
*
* Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)
*
* Имя не должно содержать подряд более трёх цифр,
* а также начинаться и заканчиваться цифрами, символами подчёркивания или тире
*
* @throws {error}
*/
  constructor(name) {
    if (typeof name !== 'string') {
      throw new Error('name должно быть строкой');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('длина имени должна быть 2-10 символов');
    }
    if (/[^a-z\d-_]/i.test(name)) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
    if (/^[\d_-]|\d{3}|[\d_-]$/.test(name)) {
      throw new Error('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире');
    }

    this.name = name;
    this.attack = 0;
    this.defence = 0;
    this.level = 1;
    this.health = 100;
    this.stoned = false;
    this.range = 1;
    this.rangedMod = false;
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
    this._stoned = value || false;
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
    this._range = Math.trunc(value) || 1;
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
    if (this.rangedMod) {
      attack -= attack * (this.range * 0.1 - 0.1);
    }
    if (this.stoned) {
      attack -= Math.log2(this.range) * 5;
    }
    return Math.trunc(attack);
  }

  /**
   * Устанавливает значение свойству defence
   *
   * Принимает аргументом {number} >= 0
   *
   * @throws {error}
   */
  set defence(value) {
    if (value && (typeof value !== 'number' || Number.isNaN(value) || value < 0)) {
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
   * рассчитывает урон по персонажу.
   *
   * здоровье персонажа должно быть >= 0
   *
   * @param {number} points - должно быть числом >= 0
   *
   */
  damage(points) {
    if (typeof points !== 'number' || Number.isNaN(points) || points < 0) {
      throw new Error(`некорректное значение урона - ${points}`);
    }

    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }

  /**
   * На 1 повышает поле level.
   *
   * На 20% повышает показатели attack и defence.
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

export default Character;
