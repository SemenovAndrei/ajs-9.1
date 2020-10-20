import Swordsman from '../../characters/swordsman';

describe('create new Swordsman', () => {
  test.each([
    ['Alex', {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Alex',
      type: 'swordsman',
    }],
    ['Semen', {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Semen',
      type: 'swordsman',
    }],
    ['noob', {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'noob',
      type: 'swordsman',
    }],
  ])('%p', (name, expected) => {
    const result = new Swordsman(name);
    expect(result).toEqual(expected);
  });
});
