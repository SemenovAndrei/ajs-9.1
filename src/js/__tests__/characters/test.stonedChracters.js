import StonedCharacters from '../../characters/stonedCharacters';

describe('create new StonedCharacters', () => {
  test.each([
    ['Alex', {
      _attack: 0,
      _defence: 0,
      _range: 1,
      _stoned: false,
      health: 100,
      level: 1,
      name: 'Alex',
      type: 'stonedCharacters',
    }],
    ['Semen', {
      _attack: 0,
      _defence: 0,
      _range: 1,
      _stoned: false,
      health: 100,
      level: 1,
      name: 'Semen',
      type: 'stonedCharacters',
    }],
    ['noob', {
      _attack: 0,
      _defence: 0,
      _range: 1,
      _stoned: false,
      health: 100,
      level: 1,
      name: 'noob',
      type: 'stonedCharacters',
    }],
  ])('%p', (name, expected) => {
    const result = new StonedCharacters(name);
    expect(result).toEqual(expected);
  });
});

describe('levelUp() health !correct', () => {
  test.each([
    ['Alex', -40],
    ['Alex', 0],
  ])('%p %p', (name, health) => {
    const result = new StonedCharacters(name);
    result.health = health;
    expect(() => {
      result.levelUp();
    }).toThrow();
  });
});

describe('levelUp() attack = 100 defence = 100', () => {
  describe('stoned false', () => {
    test.each([
      ['Alex', 1, {
        _attack: 120,
        _defence: 120,
        _range: 1,
        _stoned: false,
        health: 100,
        level: 2,
        name: 'Alex',
        type: 'stonedCharacters',
      }],
      ['Semen', 3, {
        _attack: 173,
        _defence: 173,
        _range: 1,
        _stoned: false,
        health: 100,
        level: 4,
        name: 'Semen',
        type: 'stonedCharacters',
      }],
      ['noob', 5, {
        _attack: 250,
        _defence: 250,
        _range: 1,
        _stoned: false,
        health: 100,
        level: 6,
        name: 'noob',
        type: 'stonedCharacters',
      }],
    ])('%p %p', (name, cnt, expected) => {
      const result = new StonedCharacters(name);
      result.attack = 100;
      result.defence = 100;
      for (let i = 0; i < cnt; i += 1) {
        result.levelUp();
      }
      expect(result).toEqual(expected);
    });
  });

  describe('stoned true', () => {
    test.each([
      ['Alex', 1, {
        _attack: 120,
        _defence: 120,
        _range: 1,
        _stoned: true,
        health: 100,
        level: 2,
        name: 'Alex',
        type: 'stonedCharacters',
      }],
      ['Semen', 3, {
        _attack: 173,
        _defence: 173,
        _range: 1,
        _stoned: true,
        health: 100,
        level: 4,
        name: 'Semen',
        type: 'stonedCharacters',
      }],
      ['noob', 5, {
        _attack: 250,
        _defence: 250,
        _range: 1,
        _stoned: true,
        health: 100,
        level: 6,
        name: 'noob',
        type: 'stonedCharacters',
      }],
    ])('%p %p', (name, cnt, expected) => {
      const result = new StonedCharacters(name);
      result.attack = 100;
      result.defence = 100;
      result.stoned = true;
      for (let i = 0; i < cnt; i += 1) {
        result.levelUp();
      }
      expect(result).toEqual(expected);
    });
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
    const result = new StonedCharacters('name');
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
    const result = new StonedCharacters('name');
    expect(() => {
      result.range = range;
    }).toThrow();
  });
});

describe('range value', () => {
  test.each([
    ['Alex', 1, 1],
    ['Semen', 2, 2],
    ['noob', 5, 5],
  ])('%p %p', (name, range, expected) => {
    const result = new StonedCharacters(name);
    result.range = range;
    expect(result.range).toEqual(expected);
  });
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
    const result = new StonedCharacters('name');
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
    const result = new StonedCharacters('name');
    expect(() => {
      result.defence = defence;
    }).toThrow();
  });
});

describe('range = true', () => {
  describe('stoned = false', () => {
    test.each([
      ['Alex', 1, 10],
      ['Semen', 2, 9],
      ['noob', 5, 6],
    ])('%p %p', (name, range, expected) => {
      const result = new StonedCharacters(name);
      result.attack = 10;
      result.range = range;
      expect(result.attack).toEqual(expected);
    });
  });

  describe('stoned = true', () => {
    test.each([
      ['Alex', 1, 10],
      ['Semen', 2, 4],
      ['noob', 5, 0],
    ])('%p %p', (name, range, expected) => {
      const result = new StonedCharacters(name);
      result.stoned = true;
      result.range = range;
      result.attack = 10;
      expect(result.attack).toEqual(expected);
    });
  });
});

describe('range = true', () => {
  describe('stoned = false', () => {
    test.each([
      ['Alex', 1, 10],
      ['Semen', 2, 10],
      ['noob', 5, 10],
    ])('%p %p', (name, range, expected) => {
      const result = new StonedCharacters(name);
      result.defence = 10;
      result.range = range;
      expect(result.defence).toEqual(expected);
    });
  });

  describe('stoned = true', () => {
    test.each([
      ['Alex', 1, 10],
      ['Semen', 2, 10],
      ['noob', 5, 10],
    ])('%p %p', (name, range, expected) => {
      const result = new StonedCharacters(name);
      result.stoned = true;
      result.range = range;
      result.defence = 10;
      expect(result.defence).toEqual(expected);
    });
  });
});
