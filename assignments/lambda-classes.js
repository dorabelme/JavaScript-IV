// CODE here for your Lambda Classes

class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
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
    console.log(`Today we are learning about ${subject}.`);
  }
  grade(Student, subject) {
    console.log(`${Student.name} receives a perfect score on ${subject}.`);
  }
  gradecreator(Student, grade) {
    var plusOrMinus = Math.random() < 0.5 ? -Math.abs(grade) : grade;
    return Student.grade - plusOrMinus;
  }
}

class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.grade = props.grade;
  }
  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(subject));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
  graduate() {
    if (this.grade >= 70) {
      return "Ready to graduate from Lambda School!";
    } else {
      return "Not ready to graduate. Need to work harder!";
    }
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
      `${this.name} announces to ${channel}, @channel standby times!`
    );
  }
  debugsCode(Student, subject) {
    console.log(`${this.name} debugs ${Student.name}'s code on ${subject}.`);
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
  favSubjects: ["Data Sctructures", "Algorithms", "HTML and CSS"],
  grade: 90
});

const strugglingstudent = new Student({
  name: "Thomas",
  location: "SF",
  previousBackground: "CS Student at Stanford",
  className: "Web21",
  favSubjects: ["Compilers", "AI", "Machine Learning"],
  grade: 60
});

const henry = new ProjectManager({
  name: "Henry",
  location: "East Coast",
  gradClassName: "Web?",
  favInstructor: "Everyone"
});

const austin = new ProjectManager({
  name: "Austin",
  age: "23",
  gradClassName: "WEB18",
  favInstructor: "Josh knell",
  location: "Somewhere",
  specialty: "Java",
  favLanguage: "Java",
  catchPhrase: ":eggplant:"
});

fred.speak();
fred.demo("JavaScript");
fred.grade(dora, "HTML");
dora.listsSubjects();
dora.PRAssignment("JavaScript");
dora.sprintChallenge("Intro to JavaScript");

console.log(henry.gradClassName);
henry.standUp("web21_henry");
henry.debugsCode(dora, "JavaScript");
console.log(austin.favInstructor);
console.log(austin.specialty);
console.log(fred.gradecreator(dora, 6));
console.log(dora.graduate());
console.log(strugglingstudent.grade);

console.log(strugglingstudent.graduate());
while (strugglingstudent.grade < 70) {
  var grade = fred.gradecreator(strugglingstudent, 5);
  strugglingstudent.grade = grade;
  console.log(strugglingstudent.graduate());
}
