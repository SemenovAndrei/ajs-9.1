import ErrorRepository from '../errorrepsitory';
import errorsList from '../errorslist';

test.each([
  [1, 'Main Error'],
  [10, 'Common Error'],
  [100, 'Event Error'],
  [1000, 'Simple Error'],
  [111, 'Unknown error'],
  ['1', 'Main Error'],
  ['10', 'Common Error'],
  ['100', 'Event Error'],
  ['1000', 'Simple Error'],
  ['111', 'Unknown error'],
  ['', 'Unknown error'],
  [null, 'Unknown error'],
  [undefined, 'Unknown error'],
])('%p %p', (number, expected) => {
  const repository = new ErrorRepository(Object.entries(errorsList));
  expect(repository.translate(number)).toBe(expected);
});
