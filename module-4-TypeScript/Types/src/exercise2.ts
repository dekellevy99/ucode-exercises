class Student{
    name: string;
    age: number;
    grades: number[];

    constructor(name:string, age:number, grades:number[]){
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

    addGrade(grade:number){
        this.grades.push(grade);
    }

    getGradeAvg(): number{
        return this.grades.reduce((sum, cur) => sum+cur, 0) / this.grades.length;
    }
}

const student1: Student = new Student("Dekel", 23, [100,99,98,97]);
const student2: Student = new Student("Ben", 35, [90,91,92,93]);
const student3: Student = new Student("Avi", 32, [80,81,82,83]);
  
const studentArr: Student[] = [student1, student2, student3];

studentArr.forEach(s => console.log(`${s.name} - ${s.getGradeAvg()}`))