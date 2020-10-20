
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
    if (/[^\w-]/.test(name)) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
    if (/^[\d_-]|\d{4}|[\d_-]$/.test(name)) {
      throw new Error('Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире');
    }

    this.name = name;
    this.attack = 0;
    this.defence = 0;
    this.level = 1;
    this.health = 100;
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
    this.attack = Math.round(this.attack * 1.2);
    this.defence = Math.round(this.defence * 1.2);
    this.health = 100;
  }
}

export default Character;
