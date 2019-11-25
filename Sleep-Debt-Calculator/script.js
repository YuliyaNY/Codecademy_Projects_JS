//checking how many hours of sleep user got each night of the week
const getSleepHours = day => {
    switch(day) {
        case 'Monday' :
            return 8;
            break;
        case 'Tusday' :
            return 6;
            break;
        case 'Wednesday' :
            return 9;
            break;
        case 'Thursday' :
            return 9;
            break;
        case 'Friday' :
            return 7;
            break;
        case 'Saturday' :
            return 6;
            break;
        case 'Sunday' :
            return 8;
            break;
    }
}

//getting total sleep hours
const getActualSleepHours = () => {
    let sum = getSleepHours('Monday') + 
        getSleepHours('Tuesday') + 
        getSleepHours('Wednesday') + 
        getSleepHours('Thursday') + 
        getSleepHours('Friday') + 
        getSleepHours('Saturday') + 
        getSleepHours('Sunday');
    return sum;
}

 //getting ideal sleep hours per day  
const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
}

//calculating sleep debt
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealHours = getIdealSleepHours();
    
    if (actualSleepHours === idealHours) {
    console.log("You've got the perfect amount of         sleep!"); 
    } else if (actualSleepHours > idealHours) {
    console.log("You've got more sleep than needed!");
    } else {
    console.log('You need to get some rest!');
    }
}
//start
calculateSleepDebt();