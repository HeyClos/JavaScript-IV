// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
      this.newName = attributes.name;
      this.newAge = attributes.age;
      this.newLocation = attributes.location;
      this.newGender = attributes.gender;
    }

    speak () {
        return `Hello, my name is ${this.name}, I am from ${this.newLocation}`
    }
}

class Instructor extends Person{
    constructor(instructorAttributes){
     super(instructorAttributes);
     this.newSpecialty = instructorAttributes.specialty;
     this.newfavLanguage = instructorAttributes.favLanguage;
     this.newcatchPhrase = instructorAttributes.catchPhrase;
    }
    // Methods
    demo() {
      return `'Today we are learning about ${this.subject}' `;
    }
    grade() {
        return `${student.name} receives a perfect score on ${this.subject}`;
    }
}
  
class Student extends Person{
    constructor(studentAttributes){
     super(studentAttributes);
     this.newpreviousBackground = studentAttributes.previousBackground;
     this.newclassName = studentAttributes.className;
     this.newfavSubjects = studentAttributes.favSubjects;
    }
    // Methods
    listsSubjects () {
        return favoriteSubjects.forEach();
    }
    PRAssignment() {
        return `${student.name} has submitted a PR for ${this.subject}`;
      }
    
    sprintChallenge() {
        return `${student.name} has begun sprint challenge on ${this.subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(PMAttributes){
     super(PMAttributes);
     this.newgradClassName = PMAttributes.gradClassName;
     this.newfavInstructor = PMAttributes.favInstructor;
    }
    // Methods
    standUp() {
        return `${this.name} announces to ${this.channel}, @channel standy times!​​​​​`;
    }
    debugsCode() {
        return `${this.name} debugs ${student.name}'s code on ${this.subject}`;
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });