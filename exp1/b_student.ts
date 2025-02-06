class Student{
    name: string; studentId:number; grade: string;
    constructor(name:string,id:number, grade:string){
        this.name = name; this.studentId = id; this.grade = grade;
    }
    getDetails():string{
        return `name: ${this.name} \n id: ${this.studentId} \n grade: ${this.grade}`;
    }
}

class GraduateStudent extends Student{
    thesisTopic:string;
    constructor(name:string,id:number,grade:string,thesisTopic:string){
        super(name,id,grade);
        this.thesisTopic = thesisTopic;
    }
    getDetails(): string {
        return `name: ${this.name} \n id: ${this.studentId} \n grade: ${this.grade} \n Thesis Topic: ${this.thesisTopic}`
    }
    getThesis():string{
        return `${this.thesisTopic}`
    }
}

const st = new Student("Shubham",19,"A")
console.log(st.getDetails())

const gradSt = new GraduateStudent("Kshitij", 18, "A+", "Artificial Intelligence");
console.log(gradSt.getDetails());