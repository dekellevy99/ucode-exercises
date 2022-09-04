"use strict";
class Student {
    constructor(name, age, grades) {
        this.name = name;
        this.age = age;
        this.grades = grades;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getGradeAvg() {
        return this.grades.reduce((sum, cur) => sum + cur, 0) / this.grades.length;
    }
}
const student1 = new Student("Dekel", 23, [100, 99, 98, 97]);
const student2 = new Student("Ben", 35, [90, 91, 92, 93]);
const student3 = new Student("Avi", 32, [80, 81, 82, 83]);
const studentArr = [student1, student2, student3];
studentArr.forEach(s => console.log(`${s.name} - ${s.getGradeAvg()}`));
