const mongoose = require('mongoose');

main().then(() =>{
    console.log("Connection successful");
})

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email : String,
    age : Number,
})

const User = mongoose.model("User",userSchema);

User.findByIdAndDelete('66c89c464b8fc2535fd9be2d')
.then((res)=>{
        console.log(res);
    }).catch((err)=>{
            console.log(err);
        });

// User.findOneAndUpdate({name:"Jaya"},{age:36},{new : true})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//         console.log(err);
//     });

// User.findById('66c89c464b8fc2535fd9be2e').then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// const user2 = new User({
//     name : "ravi",
//     email : "ravi@yahoo.com",
//     age : 28,
// })

// user2
//     .save()
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) =>{
//         console.log(err);
//     });


// User.insertMany([
//     {name:"Adya",email:"adya@gmail.com",age: 20},
//     {name:"Divya",email:"divya@gmail.com",age:14},
//     {name:"Jaya",email:"jaya@gmail.com",age: 22},
//     {name:"Arya",email:"arya@gmail.com",age: 18},
// ]).then((res)=>{
//     console.log(res);
// })