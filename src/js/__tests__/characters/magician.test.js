import Magician from '../../characters/magician';

describe('create new Magician', () => {
  test.each([
    ['Alex', {
      _attack: 10,
      _defence: 40,
      _range: 1,
      _stoned: false,
      health: 100,
      level: 1,
      name: 'Alex',
      type: 'magician',
    }],
    ['Semen', {
      _attack: 10,
      _defence: 40,
      _range: 1,
      _stoned: false,
      health: 100,
      level: 1,
      name: 'Semen',
      type: 'magician',
    }],
    ['noob', {
      _attack: 10,
      _defence: 40,
      _range: 1,
      _stoned: false,
      health: 100,
      level: 1,
      name: 'noob',
      type: 'magician',
    }],
  ])('%p', (name, expected) => {
    const result = new Magician(name);
    expect(result).toEqual(expected);
  });
});

// прибавление здоровья после получения урона
test('урон по персонажу Magician 6 уровня', () => {
  const result = new Magician('Alex');
  for (let i = 0; i < 5; i += 1) {
    result.levelUp();
  }
  result.damage(5000);
  expect(Math.round(result.health)).toBe(150);
});
