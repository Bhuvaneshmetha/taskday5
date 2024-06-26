let myResume={
    "basics": {
      "name": "Bhuvanesh Metha",
      "email": "bhuvanes142004@gamil.com",
      "phone": 7708761473,
      "degree": "Bsc.IT",
      "location": {
        "address": "valayanvayal",
        "postalCode": 622507,
        "city": "pudukkottai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
         
          "github":"https://github.com/Bhuvaneshmetha"
        }
      ]
    },
    
    "education": [
      {
        "School": "ST.sebastiar matric school",
        "collage":"JJ collage of arts and science",
        "department": "Bsc.IT",
        "studyType": "fulltime",
        "batch start year": 2021,
        "batch end year": 2024,
        
      }
    ],
    "skills": [
      {
        "name": "html,css,javascript",
        "level": "beginner",
        "project": [
          "not yet"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "Full Stack Developer,",
      }
    ]
  }
  console.log(myResume);
  var json = [{
    "id" : "Bhuvanesh ", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "day5  task",
    "mail": "bhuvanes142004@gamil.com"
},
{
    "id" : "Metha", 
    "msg"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "day5 task",
    "mail": "metha216@gmail.com"    
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);




