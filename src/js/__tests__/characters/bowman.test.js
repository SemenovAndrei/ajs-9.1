import Bowman from '../../characters/bowman';

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
    new Bowman(name);
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
  const result = new Bowman(name);
  expect(() => {
    result.damage(points);
  }).toThrow();
});

test.each([
  ['Alex', 0, {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Alex',
    type: 'bowman',
  }],
  ['Semen', 50, {
    attack: 25,
    defence: 25,
    health: 62.5,
    level: 1,
    name: 'Semen',
    type: 'bowman',
  }],
  ['noob', 500, {
    attack: 25,
    defence: 25,
    health: -275,
    level: 1,
    name: 'noob',
    type: 'bowman',
  }],
])('%p %p', (name, points, expected) => {
  const result = new Bowman(name);
  result.damage(points);
  expect(result).toEqual(expected);
});

test('урон по персонажу с отрицательным количеством здоровья', () => {
  const result = new Bowman('Alex');
  result.damage(500);
  result.damage(500);
  expect(result.health).toBe(-275);
});

test.each([
  ['Alex', -40],
  ['Alex', 0],
])('%p %p', (name, health) => {
  const result = new Bowman(name);
  result.health = health;
  expect(() => {
    result.levelUp();
  }).toThrow();
});

test.each([
  ['Alex', 1, {
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
    name: 'Alex',
    type: 'bowman',
  }],
  ['Semen', 3, {
    attack: 43,
    defence: 43,
    health: 100,
    level: 4,
    name: 'Semen',
    type: 'bowman',
  }],
  ['noob', 5, {
    attack: 62,
    defence: 62,
    health: 100,
    level: 6,
    name: 'noob',
    type: 'bowman',
  }],
])('%p %p', (name, cnt, expected) => {
  const result = new Bowman(name);
  for (let i = 0; i < cnt; i += 1) {
    result.levelUp();
  }
  expect(result).toEqual(expected);
});
