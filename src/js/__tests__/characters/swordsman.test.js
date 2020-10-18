import Swordsman from '../../characters/swordsman';

test.each([
  [1],
  [true],
  [null],
  [undefined],
  [[]],
  [{}],
  ['a'],
  ['a '],
  [' a  a'],
  ['aaaa '],
  ['aaaaaaaaaaa'],
])('%p', (name) => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Swordsman(name);
  }).toThrow();
});

test.each([
  ['Alex', -40],
  ['Alex', '40'],
  ['Alex', NaN],
  ['Alex', true],
  ['Alex', null],
  ['Alex', undefined],
])('%p %p', (name, points) => {
  const result = new Swordsman(name);
  expect(() => {
    result.damage(points);
  }).toThrow();
});

test.each([
  ['Alex', 0, {
    _attack: 40,
    _defence: 10,
    _range: 1,
    _stoned: false,
    rangedMod: false,
    health: 100,
    level: 1,
    name: 'Alex',
    type: 'swordsman',
  }],
  ['Semen', 50, {
    _attack: 40,
    _defence: 10,
    _range: 1,
    _stoned: false,
    rangedMod: false,
    health: 55,
    level: 1,
    name: 'Semen',
    type: 'swordsman',
  }],
  ['noob', 500, {
    _attack: 40,
    _defence: 10,
    _range: 1,
    _stoned: false,
    rangedMod: false,
    health: -350,
    level: 1,
    name: 'noob',
    type: 'swordsman',
  }],
])('%p %p', (name, points, expected) => {
  const result = new Swordsman(name);
  result.damage(points);
  expect(result).toEqual(expected);
});

test('урон по персонажу с отрицательным количеством здоровья', () => {
  const result = new Swordsman('Alex');
  result.damage(500);
  result.damage(500);
  expect(result.health).toBe(-350);
});

test.each([
  ['Alex', -40],
  ['Alex', 0],
])('%p %p', (name, health) => {
  const result = new Swordsman(name);
  result.health = health;
  expect(() => {
    result.levelUp();
  }).toThrow();
});

test.each([
  ['Alex', 1, {
    _attack: 48,
    _defence: 12,
    _range: 1,
    _stoned: false,
    rangedMod: false,
    health: 100,
    level: 2,
    name: 'Alex',
    type: 'swordsman',
  }],
  ['Semen', 3, {
    _attack: 70,
    _defence: 17,
    _range: 1,
    _stoned: false,
    rangedMod: false,
    health: 100,
    level: 4,
    name: 'Semen',
    type: 'swordsman',
  }],
  ['noob', 5, {
    _attack: 101,
    _defence: 24,
    _range: 1,
    _stoned: false,
    rangedMod: false,
    health: 100,
    level: 6,
    name: 'noob',
    type: 'swordsman',
  }],
])('%p %p', (name, cnt, expected) => {
  const result = new Swordsman(name);
  for (let i = 0; i < cnt; i += 1) {
    result.levelUp();
  }
  expect(result).toEqual(expected);
});
