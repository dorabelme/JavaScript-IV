// CODE here for your Lambda Classes

class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
  }
  listsSubjects() {
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel} @channel standby times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student}'s code on ${subject}`;
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const dora = new Student({
  name: "Dora",
  location: "New York City",
  previousBackground: "social sciences",
  className: "Web21",
  favSubjects: ["Data Sctructures", "Algorithms", "HTML and CSS"]
});

const henry = new ProjectManager({
  name: "Henry",
  location: "East Coast",
  gradClassName: "Web?",
  favInstructor: "Everyone"
});

console.log(fred.speak());
console.log(fred.demo("JavaScript"));
console.log(fred.grade("Dora", "HTML"));
console.log(dora.listsSubjects());
console.log(dora.PRAssignment("JavaScript"));
console.log(dora.sprintChallenge("Intro to JavaScript"));

console.log(henry.gradClassName);
console.log(henry.standUp("web21_henry"));
console.log(henry.debugsCode("Dakota", "JavaScript"));
