import Character from '../../characters/character';

describe('create new Character(name) name !correct', () => {
  test.each([
    [1],
    [true],
    [null],
    [undefined],
    [[]],
    [{}],
    ['a'],
    ['1aa'],
    ['-aa'],
    ['_aa'],
    ['aa1'],
    ['aa_'],
    ['aa-'],
    ['a1111a'],
    ['a '],
    [' a  a'],
    ['aaaa '],
    ['aaaaaaaaaaa'],
  ])('%p', (name) => {
    expect(() => {
    // eslint-disable-next-line no-new
      new Character(name);
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
    const result = new Character(name);
    expect(() => {
      result.damage(points);
    }).toThrow();
  });
});

describe('test damage(points)', () => {
  test.each([
    ['Alex', 0, {
      attack: 0,
      defence: 0,
      health: 100,
      level: 1,
      name: 'Alex',
    }],
    ['Semen', 50, {
      attack: 0,
      defence: 0,
      health: 50,
      level: 1,
      name: 'Semen',
    }],
    ['noob', 500, {
      attack: 0,
      defence: 0,
      health: -400,
      level: 1,
      name: 'noob',
    }],
  ])('%p %p', (name, points, expected) => {
    const result = new Character(name);
    result.damage(points);
    expect(result).toEqual(expected);
  });
});

test('урон по персонажу с отрицательным количеством здоровья', () => {
  const result = new Character('Alex');
  result.damage(500);
  result.damage(500);
  expect(result.health).toBe(-400);
});

describe('levelUp() health !correct', () => {
  test.each([
    ['Alex', -40],
    ['Alex', 0],
  ])('%p %p', (name, health) => {
    const result = new Character(name);
    result.health = health;
    expect(() => {
      result.levelUp();
    }).toThrow();
  });
});

describe('levelUp()', () => {
  test.each([
    ['Alex', 1, {
      attack: 0,
      defence: 0,
      health: 100,
      level: 2,
      name: 'Alex',
    }],
    ['Semen', 3, {
      attack: 0,
      defence: 0,
      health: 100,
      level: 4,
      name: 'Semen',
    }],
    ['noob', 5, {
      attack: 0,
      defence: 0,
      health: 100,
      level: 6,
      name: 'noob',
    }],
  ])('%p %p', (name, cnt, expected) => {
    const result = new Character(name);
    for (let i = 0; i < cnt; i += 1) {
      result.levelUp();
    }
    expect(result).toEqual(expected);
  });
});
