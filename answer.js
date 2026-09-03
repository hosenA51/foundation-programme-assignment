//Question No. 1

function describeValue(value){
    if (value){
        return `${typeof value} | truthy`;
    } else {
        return `${typeof value} | falsy`
    }
}

//Question No. 2

function getDayType(day) {
    switch (day.toLowerCase()){
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        
        default:
            return "Invalid Day";
    }
}