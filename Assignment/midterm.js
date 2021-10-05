class Student{
    constructor(name, lastName, studentID){
        this._studentInfo = {
            _name: name,
            _lastName: lastName,
            _studentID: studentID,
        };
        this._subject = [] ;
        this._acResulte = [];
        this._gPAX = [];
    }

    get subject(){
        return this._subject;
    }

    get studentInfo(){
        console.log('getter is working');
        return this._studentInfo;
    }

    get acResulte(){
        return this._acResulte;
    }

    get gPAX(){
        return this._gPAX;
    }

    toString(){
        return `${this._studentInfo._name} ${this._studentInfo._lastName} ${this._studentInfo._studentID}
        semester: ${this._subject[0].semester}
        subject: ${this.subject}
        acResulte: ${this._acResulte}
        GPAX: ${this._gPA}`;
    }


    inputSubject(semester, subject, credit, scoreLevel){
        this._subject.push(
            {semester: semester,
             subject: subject,
             credit: credit,
             scoreLevel: scoreLevel}
        );
    }

    // set reName(name){
    //     this._studentInfo._name = name;
    // }

    // set reLastName(lastName){
    //     this._studentInfo._lastName = lastName;
    // }

    // set reStudentID(StudentID){
    //     this._studentInfo._studentID = StudentID;
    // }

    findacResulte(){
        let totalS = this.findSumCredit();
        let totalC = 0;
        
        
        return totalS/totalC;
    }

    // findGPA(){
    //     this._subject[]
    // }

    findSumCredit(semester){
        let total = 0;
        for(let i = 0; i<this._subject.length; i++){
            total += this._subject[i].credit;
        }
        return total ;
    }

    findSumScoreLevel(){
        let total = 0;
        for(let i = 0; i<this._subject.length; i++){
            total += this._subject[i].scoreLevel;
        }
        return total ;
    }
}

let s = new Student("Athiti", "Khongsobsin", "63130500128");
// console.log(s.toString());
s.inputSubject(1, "GEN231", 3, 2);
s.inputSubject(1, "INT201", 2, 1);
s.inputSubject(1, "INT202", 2, 1);
console.log(s.subject);

console.log(`All Credit is: ${s.findSumCredit()}`);
console.log(`All ScoreLevel is: ${s.findSumScoreLevel()}`);
console.log(`All acResulte is: ${s.findacResulte()}`);