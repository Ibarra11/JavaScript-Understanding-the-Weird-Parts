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