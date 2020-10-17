/**
 * Хранилище ошибок
 */
class ErrorRepository {
  /**
   * Создает хранилище типа Map
   */
  constructor(obj) {
    this.errors = new Map(obj);
  }

  /**
   *Принимает цифровой код ошибки
   *
   * Возвращает описание ошибки
   *
   * @param {number} code - цифровой код ошибки
   */
  translate(code) {
    if (!this.errors.has(String(code))) {
      return 'Unknown error';
    }
    return this.errors.get(String(code));
  }
}

export default ErrorRepository;
