class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi. I am $(this.name)`;
  }

  getDescription() {
    return `Hi, ${this.name} is ${this.age} year(s) old.`;
  }
}



const me = new Person('Kamran Tahir', 21);
console.log(me.getDescription());
