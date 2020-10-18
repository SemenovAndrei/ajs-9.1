import Daemon from '../../characters/daemon';

describe('create new Daemon(name) name !correct', () => {
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
      new Daemon(name);
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
    const result = new Daemon(name);
    expect(() => {
      result.damage(points);
    }).toThrow();
  });
});

describe('test damage(points)', () => {
  test.each([
    ['Alex', 0, {
      _attack: 10,
      _defence: 40,
      _range: 1,
      _stoned: false,
      rangedMod: true,
      health: 100,
      level: 1,
      name: 'Alex',
      type: 'daemon',
    }],
    ['Semen', 50, {
      _attack: 10,
      _defence: 40,
      _range: 1,
      _stoned: false,
      rangedMod: true,
      health: 70,
      level: 1,
      name: 'Semen',
      type: 'daemon',
    }],
    ['noob', 500, {
      _attack: 10,
      _defence: 40,
      _range: 1,
      _stoned: false,
      rangedMod: true,
      health: -200,
      level: 1,
      name: 'noob',
      type: 'daemon',
    }],
  ])('%p %p', (name, points, expected) => {
    const result = new Daemon(name);
    result.damage(points);
    expect(result).toEqual(expected);
  });
});

test('урон по персонажу с отрицательным количеством здоровья', () => {
  const result = new Daemon('Alex');
  result.damage(500);
  result.damage(500);
  expect(result.health).toBe(-200);
});

describe('levelUp() health !correct', () => {
  test.each([
    ['Alex', -40],
    ['Alex', 0],
  ])('%p %p', (name, health) => {
    const result = new Daemon(name);
    result.health = health;
    expect(() => {
      result.levelUp();
    }).toThrow();
  });
});

describe('levelUp()', () => {
  test.each([
    ['Alex', 1, {
      _attack: 12,
      _defence: 48,
      _range: 1,
      _stoned: false,
      rangedMod: true,
      health: 100,
      level: 2,
      name: 'Alex',
      type: 'daemon',
    }],
    ['Semen', 3, {
      _attack: 17,
      _defence: 70,
      _range: 1,
      _stoned: false,
      rangedMod: true,
      health: 100,
      level: 4,
      name: 'Semen',
      type: 'daemon',
    }],
    ['noob', 5, {
      _attack: 24,
      _defence: 101,
      _range: 1,
      _stoned: false,
      rangedMod: true,
      health: 100,
      level: 6,
      name: 'noob',
      type: 'daemon',
    }],
  ])('%p %p', (name, cnt, expected) => {
    const result = new Daemon(name);
    for (let i = 0; i < cnt; i += 1) {
      result.levelUp();
    }
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

describe('rangedMod = true', () => {
  describe('stoned = false', () => {
    test.each([
      ['Alex', 1, 10],
      ['Semen', 2, 9],
      ['noob', 5, 6],
    ])('%p %p', (name, range, expected) => {
      const result = new Daemon(name);
      result.range = range;
      expect(result.attack).toEqual(expected);
    });
  });

  describe('stoned = true', () => {
    test.each([
      ['Alex', 1, 10],
      ['Semen', 2, 4],
      ['noob', 5, -5],
    ])('%p %p', (name, range, expected) => {
      const result = new Daemon(name);
      result.stoned = true;
      result.range = range;
      expect(result.attack).toEqual(expected);
    });
  });
});
