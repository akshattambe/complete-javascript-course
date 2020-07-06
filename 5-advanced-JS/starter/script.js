var Person = function (name, YOB, job) {
    this.name = name;
    this.YOB = YOB;
    this.job = job;
}

//Inheritance for calculateAge
Person.prototype.calculateAge = function () {
    console.log(this.name + ' is ' + (2020 - this.YOB) + ' years old');
}

var Akshat = new Person('Akshat', 1982, 'Engineer 1');
var VedViraj = new Person('VedViraj', 2016, 'Student');
var Renuka = new Person('Renuka', 1987, 'Engineer 2');

//CalculateAge is called using Inheritance.
Akshat.calculateAge();
VedViraj.calculateAge()
Renuka.calculateAge()
console.log(VedViraj)


// Another way of using Inheritance.
// but it will create a copy of calculateAge1() function
// ...on creation of every instance.
var Person1 = function (name, YOB, job) {
    this.name1 = name;
    this.YOB1 = YOB;
    this.job1 = job;
    this.calculateAge1 = function () {
        console.log(2020 - this.YOB1);
    }
}
var Akshat1 = new Person('Akshat1', 1982, 'Engineer 1');
console.log(Akshat1)
