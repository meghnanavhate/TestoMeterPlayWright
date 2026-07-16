 
/*const mark = [40,80,67];
//key values 
//object - {} . arrays = []

const mark1 ={
    "maths":40,
    "science":80,
    "arts":76
}
console.log(mark1["arts"]);*/


const userProfile ={
    "name":"Meghna",
    "city":"Cha.SambhajiNagar",
    "education":[
        {
            "education-level":"10th",
            "marks":750,
            "percentage":75,
            "school":{
                "name": "holy cross school",
                "address":"Cha.SambhajiNagar",
                "contact":"9867452084"
            }
        },
        {
            "education-level":"12th",
            "marks":550,
            "percentage":55,
            "school":{
                "name": "SBES College of Science",
                "address":"Cha.SambhajiNagar",
                "contact":"7856985624"
            }
        },
        {
            "education-level":"BCS",
            "marks":800,
            "percentage":80,
            "school":{
                "name": "SBES clg",
                "address":"Cha.SambhajiNagar",
                "contact":"9867564530"
            }
        },
        {
            "education-level":"MCA",
            "marks":850,
            "percentage":85,
            "school":{
                "name": "MIT college",
                "address":"Cha.SambhajiNagar",
                "contact":"8748452084"
            }
        }
    ]
}
//console.log(userProfile["name"]); //Meghna
//console.log(userProfile["education"][0]);
//console.log(userProfile["education"][3]["school"]);
console.log(userProfile["education"][3]["school"]["name"]);