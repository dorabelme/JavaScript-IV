// CODE here for your Lambda Classes

class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
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
    console.log(`Today we are learning about ${this.subject}`);
  }
  grade(student) {
    console.log(`${this.student} receives a perfect score on ${this.subject}`);
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
    this.favSubjects.map(subject => console.log(subject));
  }
  PRAssignment(subject) {
    console.log(
      `${this.student.name} has begun sprint challenge on ${this.subject}`
    );
  }
}

class ProjectManager extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(channel) {
    console.log(
      `${this.name} announces to ${this.channel} @channel standby times!`
    );
  }
  debugsCode(student, subject) {
    console.log(
      `${this.name} debugs ${this.student.name}'s code on ${this.subject}`
    );
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
