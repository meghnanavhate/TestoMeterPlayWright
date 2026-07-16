
//Switch case
//switch case is used only equality purpose
//based on weekday number, you have to provide weekday

let wday = 7;
let weekdayText;


switch(wday){
    case 1:
    case 8:
    case "mon":
    case "Mon":
    case "MON":
        weekdayText="Monday";
        break;
    case 2:
    case 9:
    case "tue":
    case "Tue":
    case "TUE":
        weekdayText="Tuesday"
        break;
    case 3:
    case 10:
    case "wed":
    case "Wed":
    case "WED":
        weekdayText="Wednesday"
        break;
    case 4:
    case 11:
    case "thurs":
    case "Thurs":
    case "THURS":
        weekdayText="Thursday"
        break;
    case 5:
    case 12:
    case "fri":
    case "Fri":
    case "FRI":
        weekdayText="Friday"
        break;
    case 6:
    case 12:
    case "satur":
    case "Satur":
    case "SATUR":
        weekdayText="Saturday"
        break;
    case 7:
    case 13:
    case "sun":
    case "Sun":
    case "SUN":
        weekdayText="Sunday"
        break;
}
console.log(weekdayText);