//Making a function

function describe_city(city : string, country : string = "Pakistan") {
    console.log(`\n\t${city} is in ${country}!`);
};

//Calling the function

describe_city("Karachi");

describe_city("Lahore");

describe_city("Istanbul", "Turkey");