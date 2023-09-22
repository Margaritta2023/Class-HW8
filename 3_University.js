class University {
    constructor() {
        this.teachers = [];
        this.students = [];
    }
    addMember(member) {
        if (member instanceof UniversityMember) {
            if (member.role === "Teacher") {
                this.teachers.push(member);
            } else if(member.role === "Student") {
                this.students.push(member);
            } 
        }
        else console.log("Enter valid information")
    }

    removeMember(member) {

        if (member instanceof UniversityMember) {
            if (member.role === "Teacher" && this.teachers.includes(member)) {
                this.teachers.splice(this.teachers.indexOf(member), 1);
            } else if(member.role === "Student" && this.students.includes(member)) {
                this.students.splice(this.students.indexOf(member), 1);
            } 
        }
        else console.log("Enter valid information")

    }

    startLesson() {

        this.teachers.forEach((item) =>  item.energy = item.energy - 4) 
        this.students.forEach((item) =>  item.energy = item.energy - 2)
    }

}

class UniversityMember {
    constructor (name, age, role, energy = 24) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.energy = energy;
    }

    
}

class Teacher extends UniversityMember{
    constructor (name, age, energy) {
        super(name, age, "Teacher", energy);
       
    }

    info() {
        return `${this.role}s name is ${this.name}, age is ${this.age} and left energy is ${this.energy}`
    }
}


class Student extends UniversityMember{
    constructor (name, age, energy) {
        super(name, age,"Student", energy);
        
        
    }
    info() {
        return `${this.role}s name is ${this.name}, age is ${this.age} and left energy is ${this.energy}`
    }   
}
    

let AUA = new University();
let teacher1 = new Teacher("Isaac NewTon", 74, 48);
let teacher2 = new Teacher("Archimed", 74, 15);
let student1 = new Student("Elon Musk", 50, 50);
let student2 = new Student("Mark Zuckerberg", 30, 25);

AUA.addMember(teacher1);
AUA.addMember(teacher2);
AUA.addMember(student1);
AUA.addMember(student2);
console.log(AUA)
console.log(student1.info())
AUA.startLesson();
console.log(student1.info())
console.log(AUA)

