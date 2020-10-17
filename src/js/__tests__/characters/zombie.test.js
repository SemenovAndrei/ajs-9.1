import Zombie from '../../characters/zombie';

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
    new Zombie(name);
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
  const result = new Zombie(name);
  expect(() => {
    result.damage(points);
  }).toThrow();
});

test.each([
  ['Alex', 0, {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Alex',
    type: 'zombie',
  }],
  ['Semen', 50, {
    attack: 40,
    defence: 10,
    health: 55,
    level: 1,
    name: 'Semen',
    type: 'zombie',
  }],
  ['noob', 500, {
    attack: 40,
    defence: 10,
    health: -350,
    level: 1,
    name: 'noob',
    type: 'zombie',
  }],
])('%p %p', (name, points, expected) => {
  const result = new Zombie(name);
  result.damage(points);
  expect(result).toEqual(expected);
});

test('урон по персонажу с отрицательным количеством здоровья', () => {
  const result = new Zombie('Alex');
  result.damage(500);
  result.damage(500);
  expect(result.health).toBe(-350);
});

test.each([
  ['Alex', -40],
  ['Alex', 0],
])('%p %p', (name, health) => {
  const result = new Zombie(name);
  result.health = health;
  expect(() => {
    result.levelUp();
  }).toThrow();
});

test.each([
  ['Alex', 1, {
    attack: 48,
    defence: 12,
    health: 100,
    level: 2,
    name: 'Alex',
    type: 'zombie',
  }],
  ['Semen', 3, {
    attack: 70,
    defence: 17,
    health: 100,
    level: 4,
    name: 'Semen',
    type: 'zombie',
  }],
  ['noob', 5, {
    attack: 101,
    defence: 24,
    health: 100,
    level: 6,
    name: 'noob',
    type: 'zombie',
  }],
])('%p %p', (name, cnt, expected) => {
  const result = new Zombie(name);
  for (let i = 0; i < cnt; i += 1) {
    result.levelUp();
  }
  expect(result).toEqual(expected);
});
