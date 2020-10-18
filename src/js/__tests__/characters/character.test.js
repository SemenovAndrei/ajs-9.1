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
    ['a111a'],
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
      _attack: 0,
      _defence: 0,
      _range: 1,
      _stoned: false,
      rangedMod: false,
      health: 100,
      level: 1,
      name: 'Alex',
    }],
    ['Semen', 50, {
      _attack: 0,
      _defence: 0,
      _range: 1,
      _stoned: false,
      rangedMod: false,
      health: 50,
      level: 1,
      name: 'Semen',
    }],
    ['noob', 500, {
      _attack: 0,
      _defence: 0,
      _range: 1,
      _stoned: false,
      rangedMod: false,
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
      _attack: 0,
      _defence: 0,
      _range: 1,
      _stoned: false,
      rangedMod: false,
      health: 100,
      level: 2,
      name: 'Alex',
    }],
    ['Semen', 3, {
      _attack: 0,
      _defence: 0,
      _range: 1,
      _stoned: false,
      rangedMod: false,
      health: 100,
      level: 4,
      name: 'Semen',
    }],
    ['noob', 5, {
      _attack: 0,
      _defence: 0,
      _range: 1,
      _stoned: false,
      rangedMod: false,
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

describe('stoned !incorrect', () => {
  test.each([
    [0],
    [[]],
    [{}],
    [123],
    [NaN],
    [null],
    [undefined],
    ['Alex'],
  ])('%p', (stoned) => {
    const result = new Character('name');
    expect(() => {
      result.stoned = stoned;
    }).toThrow();
  });
});

describe('range !incorrect', () => {
  test.each([
    [0],
    [[]],
    [{}],
    [-1],
    [NaN],
    [null],
    [undefined],
    ['Alex'],
  ])('%p', (range) => {
    const result = new Character('name');
    expect(() => {
      result.range = range;
    }).toThrow();
  });
});

test('range = value || 1', () => {
  const result = new Character('Alex');
  expect(result.range).toBe(1);
});

test('range = 4', () => {
  const result = new Character('Alex');
  result.range = 4;
  expect(result.range).toBe(4);
});

describe('attack !incorrect', () => {
  test.each([
    [-1],
    [[]],
    [{}],
    [NaN],
    [null],
    [false],
    [undefined],
    ['Alex'],
  ])('%p', (attack) => {
    const result = new Character('name');
    expect(() => {
      result.attack = attack;
    }).toThrow();
  });
});

describe('defence !incorrect', () => {
  test.each([
    [-1],
    [[]],
    [{}],
    [NaN],
    [null],
    [false],
    [undefined],
    ['Alex'],
  ])('%p', (defence) => {
    const result = new Character('name');
    expect(() => {
      result.defence = defence;
    }).toThrow();
  });
});

describe('rangedMod = false', () => {
  describe('stoned = false', () => {
    test.each([
      ['Alex', 1, 10],
      ['Semen', 2, 10],
      ['noob', 5, 10],
    ])('%p %p', (name, range, expected) => {
      const result = new Character(name);
      result.attack = 10;
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
      const result = new Character(name);
      result.attack = 10;
      result.rangedMod = true;
      result.stoned = true;
      result.range = range;
      expect(result.attack).toEqual(expected);
    });
  });
});

describe('rangedMod = true', () => {
  describe('stoned = false', () => {
    test.each([
      ['Alex', 1, 10],
      ['Semen', 2, 9],
      ['noob', 5, 6],
    ])('%p %p', (name, range, expected) => {
      const result = new Character(name);
      result.attack = 10;
      result.rangedMod = true;
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
      const result = new Character(name);
      result.attack = 10;
      result.rangedMod = true;
      result.stoned = true;
      result.range = range;
      expect(result.attack).toEqual(expected);
    });
  });
});
