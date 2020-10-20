import Daemon from '../../characters/daemon';

describe('create new Daemon', () => {
  test.each([
    ['Alex', {
      _attack: 10,
      _defence: 40,
      _range: 1,
      _stoned: false,
      health: 100,
      level: 1,
      name: 'Alex',
      type: 'daemon',
    }],
    ['Semen', {
      _attack: 10,
      _defence: 40,
      _range: 1,
      _stoned: false,
      health: 100,
      level: 1,
      name: 'Semen',
      type: 'daemon',
    }],
    ['noob', {
      _attack: 10,
      _defence: 40,
      _range: 1,
      _stoned: false,
      health: 100,
      level: 1,
      name: 'noob',
      type: 'daemon',
    }],
  ])('%p', (name, expected) => {
    const result = new Daemon(name);
    expect(result).toEqual(expected);
  });
});

// прибавление здоровья после получения урона
test('урон по персонажу Daemon 6 уровня', () => {
  const result = new Daemon('Alex');
  for (let i = 0; i < 5; i += 1) {
    result.levelUp();
  }
  result.damage(5000);
  expect(Math.round(result.health)).toBe(150);
});
