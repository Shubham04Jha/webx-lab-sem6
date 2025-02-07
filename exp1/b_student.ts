class LibraryAccount {
    accountId:number;
    booksIssued:number;
    constructor(accid:number,bookIss:number) {
        this.accountId = accid;
        this.booksIssued = bookIss;
    }
  
    getLibraryInfo(): void {
      console.log(`Account ID: ${this.accountId}, Books Issued: ${this.booksIssued}`);
    }
}

class Student {
    name: string;
    studentId: number;
    grade: string;
    libraryAccount: LibraryAccount;

    constructor(name: string, id: number, grade: string, accountId: number, booksIssued: number) {
        this.name = name;
        this.studentId = id;
        this.grade = grade;
        this.libraryAccount = new LibraryAccount(accountId, booksIssued);
    }

    getDetails(): string {
        return `Name: ${this.name} \nID: ${this.studentId} \nGrade: ${this.grade} \nLibrary Account ID: ${this.libraryAccount.accountId} \nBooks Issued: ${this.libraryAccount.booksIssued}`;
    }
}

class GraduateStudent extends Student {
    thesisTopic: string;

    constructor(name: string, id: number, grade: string, accountId: number, booksIssued: number, thesisTopic: string) {
        super(name, id, grade, accountId, booksIssued);
        this.thesisTopic = thesisTopic;
    }

    getDetails(): string {
        return `${super.getDetails()} \nThesis Topic: ${this.thesisTopic}`;
    }

    getThesis(): string {
        return `${this.thesisTopic}`;
    }
}

// Example usage
const st = new Student("Shubham", 19, "A", 101, 3);
console.log(st.getDetails());

const gradSt = new GraduateStudent("Kshitij", 18, "A+", 102, 5, "Artificial Intelligence");
console.log(gradSt.getDetails());
