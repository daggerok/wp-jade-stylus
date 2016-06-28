class Person {
  constructor(name, age) {
    Object.assign(this, { name, age });
  }
}

const person = new Person('Max', 33);
const { name, age } = person;

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import './main.styl';

const div = $('<div>');

$('#app').html(`<p>${name} is ${age} years old...</p>`);

console.log(div.text());
