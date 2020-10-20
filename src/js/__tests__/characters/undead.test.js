import Undead from '../../characters/undead';

describe('create new Undead', () => {
  test.each([
    ['Alex', {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Alex',
      type: 'undead',
    }],
    ['Semen', {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Semen',
      type: 'undead',
    }],
    ['noob', {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'noob',
      type: 'undead',
    }],
  ])('%p', (name, expected) => {
    const result = new Undead(name);
    expect(result).toEqual(expected);
  });
});
