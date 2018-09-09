var person = new Object();

// Add a property to the object.  If the propety does not exist, it creates
// a new property to the object.  It then give the object a memory refrence
// to the location of the first name property.
person['firstname'] = 'Tony';
person['lastname'] = 'Montana';


var firstNameProperty = 'firstname';

person[firstNameProperty] = 'Alan';


var greet = 'hello!';
var greet = 'hola';

console.log('greet');

var english = {
    greet: 'hello'
};

var spanish = {
    greet: 'hola'
};

console.log(english.greet)
console.log(spanish.greet)

function IsAnObject(){
    console.log('A function is a special type of object');
}

IsAnObject.type = 'Object';

console.log(IsAnObject.type);


var c = {
    name: 'The c object',
    log: function(){
        var self = this;
        console.log(self);
        var ex = function(newName){
            self.name= newName;
        }
        ex('ALan Ibarra')
        console.log(self);
    }
}

c.log();



// Immediately Invoked Function expression

var greeting = function(name){
    return 'hi ' + name;
}('alan');
console.log(greeting);


(function(name){
    let greeting = 'Hello ';
    console.log(greeting + name);
}('ALan Ibarra'));


function buildFunctions(){
    var arr = [];

    for(var i = 0; i < 3; i++){
        arr.push(function(){
            console.log(i);
        })
    }

    return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();


