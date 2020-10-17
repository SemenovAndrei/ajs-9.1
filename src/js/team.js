/* eslint-disable no-unused-vars */

import charactersList from './characters/characterslist';

/**
 * Класс хранит данные о персонажах команды в поле типа Set
 */
class Team {
  /**
   * Создает поле типа Set
   */
  constructor() {
    this.members = new Set();
  }

  /**
   * Добавляет персонажа в команду
   *
   * @param {object} character - объект персонажа
   *
   * @throws {error} выбрасывает ошибку - 'Персонаж уже добавлен'
   */
  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже добавлен');
    }
    this.members.add(character);
  }

  /**
   * Добавляет всех переданных персонажей в команду
   *
   * @param {object} characters - персонажи
   */
  addAll(characters) {
    this.members = new Set([...this.members, ...characters]);
  }

  /**
   * Создает массив из поля типа Set
   */
  toArray() {
    return Array.from(this.members);
  }
}

export default Team;
