// object creat
let student_data = {
    name: "shoaib",
    age: 23,
    rollnumber: "abc123",
    adress: "karachi"
};
// object mein se sirf kisi aik proprty ko acces aisy karte hain dott laga ke...
console.log(student_data.name); // output: shoaib
// is tarhn bhi ham object ki property ko acces kar sakty hain...
console.log(student_data['name']); // output: shoaib
// or iska ye faida bhi hai ke ham object ki value ko dynmicly acces kar sakty hain...
let property = "name";
console.log(student_data[property]); // output: shoaib
export {};
