import charactersList from '../characters/characterslist';
import charactersList1 from '../characters/characterslist1';
import Team from '../team';

test('однократное добавление персонажа', () => {
  const team = new Team();
  team.add(charactersList[0]);
  expect(team.members.size).toBe(1);
});

test('2-кратное добавление персонажа', () => {
  const team = new Team();
  team.add(charactersList[0]);
  expect(() => {
    team.add(charactersList[0]);
  }).toThrow('Персонаж уже добавлен');
});

test('однократное добавление списка персонажей', () => {
  const team = new Team();
  team.addAll(charactersList);
  expect(team.members.size).toBe(6);
});

test('2-кратное добавление списка персонажей', () => {
  const team = new Team();
  team.addAll(charactersList);
  team.addAll(charactersList);
  expect(team.members.size).toBe(6);
});

test('isArray ?', () => {
  const team = new Team();
  team.addAll(charactersList);
  expect(Array.isArray(team.toArray())).toBe(true);
});

// + второй список персонажей

test('однократное добавление персонажа', () => {
  const team = new Team();
  team.add(charactersList[0]);
  team.add(charactersList1[0]);
  expect(team.members.size).toBe(2);
});

test('2-кратное добавление персонажа', () => {
  const team = new Team();
  team.add(charactersList[0]);
  team.add(charactersList1[0]);
  expect(() => {
    team.add(charactersList1[0]);
  }).toThrow('Персонаж уже добавлен');
});

test('однократное добавление списка персонажей', () => {
  const team = new Team();
  team.addAll(charactersList);
  team.addAll(charactersList1);
  expect(team.members.size).toBe(12);
});

test('2-кратное добавление списка персонажей', () => {
  const team = new Team();
  team.addAll(charactersList);
  team.addAll(charactersList1);

  team.addAll(charactersList);
  team.addAll(charactersList1);
  expect(team.members.size).toBe(12);
});
