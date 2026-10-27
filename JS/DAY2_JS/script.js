// // // const fullname = "Yuvraj vijayvargiya"
// // // console.log(fullname)



// // // const city = "Jaipur"
// // // console.log(city)

// // // const collegename = "Zenith School of AI"
// // // console.log(collegename)

// // // const rollnumber = "013"
// // // console.log(rollnumber)

// // // -------------------------------------------------------------------------------

// const student = {
//   name:"Yuvraj",
//   city:"Jaipur",
//   collegename:"ZSAI",
//   rollnumber:"2616400013",
// };
    

// // console.log(student);
// // console.log(typeof student);

// // //------------------------------------------------------------------------------------------------------------------------------------------//
// // //READ//

// // console.log(student.name);
// // console.log(student["name"]);

// // //when we read something which is not present it gives not defined//

// // console.log(student.phonenumber);
// // console.log(student["phonenumber"]);

// // //CREATE//

// // student.country = "India";
// // console.log(student);

// // const student2=student;
// // student2.city = "Delhi";
// // console.log(student2);

// //Update//


// //DELETE//
// delete student.name;
// delete student["city"];
// console.log(student);


// //------------------------------------------------//
// const product = {
//     title: "Monitor",
//     price: "7000",
// };

// const keyboard = product;
// keyboard.title = "Keyboard"
// console.log(keyboard)
// console.log(product)


//ARRAY//
const fruitArr =["apple", "mango"];
console.log(fruitArr);

const fruitObj = {
    0: "Mango",
    1: "Grapes",
};
console.log(fruitObj);
// READ//

console.log (typeof fruitArr);
console.log(typeof fruitObj);

console.log(fruitArr[0]);
console.log(fruitObj[1]);

//Create//
fruitArr[0]= "Grapes";
fruitObj[1]= "Grapes";

console.log(fruitArr)
console.log(fruitObj)












