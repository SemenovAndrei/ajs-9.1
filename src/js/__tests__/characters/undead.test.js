import Undead from '../../characters/undead';

describe('create new Undead(name) name !correct', () => {
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
      new Undead(name);
    }).toThrow();
  });
});

describe('damage(points) points !correct', () => {
  test.each([
    ['Alex', -40],
    ['Alex', '40'],
    ['Alex', NaN],
    ['Alex', true],
    ['Alex', null],
    ['Alex', undefined],
  ])('%p %p', (name, points) => {
    const result = new Undead(name);
    expect(() => {
      result.damage(points);
    }).toThrow();
  });
});

describe('test damage(points)', () => {
  test.each([
    ['Alex', 0, {
      _attack: 25,
      _defence: 25,
      _range: 1,
      _stoned: false,
      rangedMod: false,
      health: 100,
      level: 1,
      name: 'Alex',
      type: 'undead',
    }],
    ['Semen', 50, {
      _attack: 25,
      _defence: 25,
      _range: 1,
      _stoned: false,
      rangedMod: false,
      health: 62.5,
      level: 1,
      name: 'Semen',
      type: 'undead',
    }],
    ['noob', 500, {
      _attack: 25,
      _defence: 25,
      _range: 1,
      _stoned: false,
      rangedMod: false,
      health: -275,
      level: 1,
      name: 'noob',
      type: 'undead',
    }],
  ])('%p %p', (name, points, expected) => {
    const result = new Undead(name);
    result.damage(points);
    expect(result).toEqual(expected);
  });
});

test('урон по персонажу с отрицательным количеством здоровья', () => {
  const result = new Undead('Alex');
  result.damage(500);
  result.damage(500);
  expect(result.health).toBe(-275);
});

describe('levelUp() health !correct', () => {
  test.each([
    ['Alex', -40],
    ['Alex', 0],
  ])('%p %p', (name, health) => {
    const result = new Undead(name);
    result.health = health;
    expect(() => {
      result.levelUp();
    }).toThrow();
  });
});

describe('levelUp()', () => {
  test.each([
    ['Alex', 1, {
      _attack: 30,
      _defence: 30,
      _range: 1,
      _stoned: false,
      rangedMod: false,
      health: 100,
      level: 2,
      name: 'Alex',
      type: 'undead',
    }],
    ['Semen', 3, {
      _attack: 43,
      _defence: 43,
      _range: 1,
      _stoned: false,
      rangedMod: false,
      health: 100,
      level: 4,
      name: 'Semen',
      type: 'undead',
    }],
    ['noob', 5, {
      _attack: 62,
      _defence: 62,
      _range: 1,
      _stoned: false,
      rangedMod: false,
      health: 100,
      level: 6,
      name: 'noob',
      type: 'undead',
    }],
  ])('%p %p', (name, cnt, expected) => {
    const result = new Undead(name);
    for (let i = 0; i < cnt; i += 1) {
      result.levelUp();
    }
    expect(result).toEqual(expected);
  });
});
