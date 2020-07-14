/////////////////////////////
// LECTURE: Function constructor (PATTERN)
/*

//Normal Object creation in JS
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

//Function Constructor in JS
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    var lastname = 'Tambe'; //Local variable 'lastname' cannot be accessed in calculateAgeOutsideConstructor() ***

    //calculateAgeInnerMethod() method will get re-declared for every new instance we create.
    this.calculateAgeInnerMethod = function(){
        console.log('Last name from inside the constructor : ' + lastname);

        // *** BUT when we RETURN the variable calculateAgeOutsideConstructor() was able to access it.
        return lastname;
    }
}

// Modifying Persons Obj by adding a FUNCTION to it using PROTOTYPE
// calculateAgeOutsideConstructor() is not part of the Constructor here.

// BENEFIT :  When you bind a method to the THIS keyword, you are providing that method to only that particular instance.
// It does not really have any relationship with an object instance of that constructor.
//
// Any method attached with THIS will get re-declared for every new instance we create,
// which could affect the memory usage of the application negatively if we wish to create so many instances.
//
// Because objects coming from the same constructor, point to one common PROTOTYPE object...
// It is only stored in the memory once.
// PROTOTYPE enable us to easily define methods to all instances of the instances while saving memory.
//
// PROTOTYPE approach is obviously faster in execution because creating new object instances takes NO-TIME in re-declaring any methods.
//
// Although, Javascript runtime will first check for the method on the instance of the Person & then it will check the PROTOTYPE of Person to find it.
// So a little time is spent over finding the method. Yet definitely the overhead isn't that significant unless we have a deep prototype hierarchy.

Person.prototype.calculateAgeOutsideConstructor  = function() {
    //Access to local variable 'lastname' using instance method.
    //Local variable 'lastname' cannot be accessed in calculateAgeOutsideConstructor() untill 'lastname' is returned.
    console.log('Age of ' + this.name + ' ' + this.calculateAgeInnerMethod() + ' is ' + (2020 - this.yearOfBirth));
};

var akshat = new Person('Akshat', 1982, 'teacher');
akshat.calculateAgeOutsideConstructor();

var renuka = new Person('Renuka', 1987, 'designer');
renuka.calculateAgeOutsideConstructor();

var ved = new Person('Ved Viraj', 2016, 'designer');
ved.calculateAgeOutsideConstructor();

//Modifying Persons Obj by adding a VARIABLE to it using PROTOTYPE
//This is not a common practice unlike adding method we added above example.
Person.prototype.lastNameOutsideConstructor = 'Soni';
console.log(akshat.lastNameOutsideConstructor);
console.log(ved.lastNameOutsideConstructor);
*/

//*********************************************************************************************************************
//*********************************************************************************************************************

/////////////////////////////
// LECTURE: Object.create

//Object.create() method for creating objects in JS

//Object.create() method creates a new object, using an existing object as the prototype of the newly created object.


var personPro = {
    lastName : 'Tambe',
    calculateAge: function () {
        console.log(this.name + ' ' + this.lastName + ' is ' + (2020 - this.yearOfBirth) + ' years old.');
    }
}

var akshat = Object.create(personPro,
    {
        name: {value: 'Akshat Kumar'},
        yearOfBirth: {value: 1982},
        jon: {value: 'Home maker'}
    });

var renuka = Object.create(personPro,
    {
        name: {value: 'Renuka'},
        yearOfBirth: {value: 1987},
        jon: {value: 'Engg'}
    });

var ved = Object.create(personPro,
    {
        name: {value: 'Ved Viraj'},
        yearOfBirth: {value: 2016},
        jon: {value: 'Kiddo *_*'}
    });

akshat.calculateAge();
renuka.calculateAge();
ved.calculateAge();


//*********************************************************************************************************************
//*********************************************************************************************************************


// function Constructor for creating objects
/*
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
console.log(Akshat1);
 */


//Object.create() method for creating objects in JS

/*
var personPro = {
    calculateAge: function () {
        console.log(2020 - this.yearOfBirth);
    }
}

var Akshat = Object.create(personPro,
    {
        name: {value: 'Akshat Kumar'},
        yearOfBirth: {value: 1982},
        jon: {value: 'Engg'}
    });

 */

/*
var age = 27;
var obj = {
    name: 'Akshat',
    city: 'Gothenburg'
};

function change(a, b){
    a = 38;
    console.log(a);
    console.log(b.city);
    b.city = 'Oslo';
}

change(age, obj);
console.log(age);
console.log(obj.city);

 */

/*
function retirement(retirementAgeLimit){
    var str = ' is the age!';
    return function (yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAgeLimit - age) + str);
    }
}

var retirementInd = retirement(60);
retirementInd(1982);

 */
/*
function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}


interviewQuestion('Papa')('Ved');
*/
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay, behavior) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.' +
             ' And I am ' + behavior);
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.'+
                ' And I am ' + behavior);
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

//john.presentation('formal','morning', 'Sober');
//john.presentation.call(emily, 'formal','morning', 'Not so sober');
var qwe = john.presentation.bind(john,'formal');
qwe('morning', 'Mad! And Funny');

qwe = john.presentation.bind(emily);
qwe('friendly', 'afternoon', 'YOU');

 */
/*

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var age = arrayCalc(years, calculateAge);
console.log(age);

var fullAge = arrayCalc(age, isFullAge.bind(this, 20));
console.log(fullAge);
*/

