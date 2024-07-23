//Creating a function
function CreateCar(Manufacturer, Model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //Innitializing a car object
    var car = {
        Manufacturer: Manufacturer,
        Model: Model
    };
    //Adding Additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
;
//Calling the function to creating the car object
var myCar = CreateCar("Toyota", "Corolla", "Color : Black", "Sunroof : True");
console.log(myCar);
