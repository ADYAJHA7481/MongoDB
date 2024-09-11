const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().
then(()=>{
    console.log("connection successful")})
.catch(err=>{
    console.log(err);
});
async function main() {
    await mongoose.connect("mongodb://127.0.0.1/fakewhatsapp");
}

let allChat = [
    {
    from : "neha",
    to : "priya",
    msg:"send me your exam sheet",
    created_at: new Date(),
    },
    {
        from : "neha",
        to : "preeti",
        msg:"send me notes for exam ",
        created_at: new Date(),
    },
    {
        from : "tanya",
        to : "priya",
        msg:"send me your pic",
        created_at: new Date(),
    },  

]

Chat.insertMany(allChat);