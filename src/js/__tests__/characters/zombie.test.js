import Zombie from '../../characters/zombie';

describe('create new Zombie', () => {
  test.each([
    ['Alex', {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Alex',
      type: 'zombie',
    }],
    ['Semen', {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Semen',
      type: 'zombie',
    }],
    ['noob', {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'noob',
      type: 'zombie',
    }],
  ])('%p', (name, expected) => {
    const result = new Zombie(name);
    expect(result).toEqual(expected);
  });
});
