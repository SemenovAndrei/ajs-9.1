import Bowman from '../../characters/bowman';

describe('create new Bowman', () => {
  test.each([
    ['Alex', {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Alex',
      type: 'bowman',
    }],
    ['Semen', {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Semen',
      type: 'bowman',
    }],
    ['noob', {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'noob',
      type: 'bowman',
    }],
  ])('%p', (name, expected) => {
    const result = new Bowman(name);
    expect(result).toEqual(expected);
  });
});
