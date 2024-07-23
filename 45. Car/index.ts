//Creating a function

function CreateCar (Manufacturer, Model, ...options) {
    //Innitializing a car object
    let car = {
        Manufacturer : Manufacturer,
        Model : Model
    };

    //Adding Additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
});
return car;
};

//Calling the function to creating the car object

let myCar = CreateCar("Toyota", "Corolla", "Color : Black", "Sunroof : True");

console.log(myCar);
