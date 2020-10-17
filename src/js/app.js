/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import ErrorRepository from './errorrepsitory';
import errorsList from './errorslist';

const repository = new ErrorRepository(Object.entries(errorsList));

console.log(repository);

console.log(repository.translate(1));
console.log(repository.translate());
console.log(repository.translate(111));
