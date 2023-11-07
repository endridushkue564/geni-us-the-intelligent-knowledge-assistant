/*
Filename: AdvancedDataProcessing.js
Content: Advanced Data Processing Code
*/

// Object representing a student
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  printDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }

  getGrade() {
    return this.grade;
  }
}

// Object representing a course
class Course {
  constructor(name, students) {
    this.name = name;
    this.students = students;
  }

  addStudent(student) {
    this.students.push(student);
  }

  getAverageGrade() {
    let totalGrade = 0;
    this.students.forEach((student) => {
      totalGrade += student.getGrade();
    });

    return totalGrade / this.students.length;
  }

  getStudentByName(name) {
    return this.students.find((student) => student.name === name);
  }

  getStudentsByAge(age) {
    return this.students.filter((student) => student.age === age);
  }

  printCourseDetails() {
    console.log(`Course Name: ${this.name}`);
    console.log(`Number of Students: ${this.students.length}`);
    console.log(`Average Grade: ${this.getAverageGrade()}`);
  }
}

// Create students
const student1 = new Student("John Doe", 18, 90);
const student2 = new Student("Jane Smith", 19, 85);
const student3 = new Student("Bob Johnson", 20, 95);
const student4 = new Student("Alice Brown", 18, 88);

// Create course
const course = new Course("Mathematics", [student1, student2, student3, student4]);

// Add new student to the course
const student5 = new Student("Mike Davis", 19, 92);
course.addStudent(student5);

// Print details of a specific student
const student = course.getStudentByName("John Doe");
console.log("Student Details:");
student.printDetails();

// Print details of the course
console.log("Course Details:");
course.printCourseDetails();

// Get students of a specific age
const studentsByAge = course.getStudentsByAge(18);
console.log("Students aged 18:");
studentsByAge.forEach((student) => student.printDetails());

// Output:
// Student Details:
// Name: John Doe, Age: 18, Grade: 90
// Course Details:
// Course Name: Mathematics
// Number of Students: 5
// Average Grade: 90
// Students aged 18:
// Name: John Doe, Age: 18, Grade: 90
// Name: Alice Brown, Age: 18, Grade: 88