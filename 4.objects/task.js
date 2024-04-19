function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

// let student = new Student('Maks', true, 25)

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (("marks" in this)){
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if(!("marks" in this) || this.marks.length===0){
        return 0;
    } 
    let sum = this.marks.reduce((sum, item) => sum +item);
    return sum/this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}


