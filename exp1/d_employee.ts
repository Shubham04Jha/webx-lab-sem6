enum Role {
    "Manager",
    "Developer"
}

interface Employee{
    name:string;
    id:number
    role:Role
    getDetails: () => string;
}

class Manager implements Employee{
    name:string; id:number; role = Role.Manager;
    department:string;
    constructor(name: string,id: number,department:string){
        this.name = name; this.id = id;
        this.department = department;
    }
    getDetails () {
        return `name: ${this.name} \n id: ${this.id} \n role : ${Role[this.role]} department: ${this.department}`
        // return 1;
    };
}

class Developer implements Employee{
    name:string; id:number; role = Role.Manager;
    programmingLanguages : string[];
    constructor(name: string,id: number,pl:string[]){
        this.name = name; this.id = id;
        this.programmingLanguages = pl;
    }
    getDetails(){
        return `name: ${this.name} \n id: ${this.id} \n role : ${Role[this.role]} programming Languages: ${this.programmingLanguages.toString()}`
    }

}
const shubham = new Manager("shubham", 19,"Sales");
console.log(shubham.getDetails())
const chinmay = new Developer("chinmay",6,["cpp","Rust","GoLang"]);
console.log(chinmay.getDetails())