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

// Instructors
const dan = new Instructor({
  name: "Dan",
  age: "Infinity",
  location: "Denver",
  specialty: "Relentless Debugger",
  favLanguage:
    "JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia",
  catchPhrase: "If you can do the thing, you can get paid to do the thing!"
});

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

// Students
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

const isaiah = new Student({
  name: "Isaiah",
  age: 18,
  location: "Florida",
  previousBackground: "High School last month",
  className: "Web21",
  favSubjects: ["Html", "CSS", "JavaScript"]
});
const kevin = new Student({
  name: "Kevin",
  age: 28,
  location: "California",
  previousBackground: "Table Games Dealer",
  className: "WEB21",
  favSubjects: ["Html", "CSS", "JavaScript"]
});
const nisa = new Student({
  name: "Nisa",
  age: 25,
  location: "Ohio",
  previousBackground: "Debt Collector",
  className: "Web21",
  favSubjects: ["Html", "CSS", "JavaScript"]
});

const joscelyn = new Student({
  name: "Joscelyn",
  age: 29,
  location: "California",
  previousBackground: "English teacher",
  className: "Web21",
  favSubjects: ["Computer Science", "Philosophy", "English"]
});

// PMs
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
const marguel = new ProjectManager({
  name: "Marguel",
  age: "Maybe 26",
  gradClassName: "WEBPT2",
  favInstructor: "Me?",
  location: "California",
  specialty: "React",
  favLanguage: "JavaScript, Python, Elm etc.",
  catchPhrase: "Practice Flex Zombies !!!"
});

const brandon = new ProjectManager({
  name: "Brandon",
  age: "34",
  gradClassName: "WEB18",
  favInstructor: "Professor Lambda",
  location: "Maine",
  specialty: "Redux",
  favLanguage: "JavaScript, C++, Python.",
  catchPhrase: "You shall not pass!"
});

const mary = new ProjectManager({
  name: "Mary",
  age: "24",
  gradClassName: "WEB18",
  favInstructor: "Josh Knell",
  location: "New York",
  specialty: "Express and Node.js",
  favLanguage: "Javascript",
  catchPhrase: "That looks AWESOME"
});

const christian = new ProjectManager({
  name: "Christian",
  age: "32",
  gradClassName: "WEB18",
  favInstructor: "Every Instructor in Lambda",
  location: "Seattle, WA",
  specialty: "Data Structures & Algorithms",
  favLanguage: "JavaScript",
  catchPhrase: "Dont forget your daily commit."
});

const pat = new ProjectManager({
  name: "Pat",
  age: "38",
  gradClassName: "WEB18",
  favInstructor: "Brett Madrid",
  location: "Petaluma, Ca",
  specialty: "Empathetic to the struggle of Redux",
  favLanguage: "JavaScript",
  catchPhrase: "Lets google that together."
});

const darren = new ProjectManager({
  name: "Darren",
  age: "25",
  gradClassName: "WEB18",
  favInstructor: "Josh Knell",
  location: "North Carolina",
  specialty: "React",
  favLanguage: "Javascript",
  catchPhrase: "Gang. Gang."
});

const instructors = [dan, fred];
const students = [dora, strugglingstudent, isaiah, kevin, nisa, joscelyn];
const pms = [henry, austin, marguel, brandon, mary, christian, pat, darren];

// console.log(instructors);
// console.log(students);
// console.log(pms);

const everyone = instructors.concat(students).concat(pms);
everyone.forEach(person => person.speak());
instructors.forEach(instructor => instructor.demo("JavaScript"));
instructors.forEach(instructor => instructor.grade(kevin, "JavaScript"));

students.forEach(student => student.listsSubjects());
students.forEach(student => student.PRAssignment("Classes"));
students.forEach(student => student.sprintChallenge("Intro to JavaScript"));

pms.forEach(pm => pm.standUp("web21_ah"));
pms.forEach(pm => pm.debugsCode(nisa, "JavaScript"));

console.log(fred.gradecreator(dora, 6));
console.log(dora.graduate());
console.log(strugglingstudent.grade);

console.log(strugglingstudent.graduate());
while (strugglingstudent.grade < 70) {
  var grade = fred.gradecreator(strugglingstudent, 5);
  strugglingstudent.grade = grade;
  console.log(strugglingstudent.graduate());
}
