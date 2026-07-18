// singleton
// Objects.create


// Objects literals
const mySym = Symbol("key1")

const JsUser = {
    name: "mayank",
    "full name": "Mayank srivastava",
    [mySym]: "myKey1",
    age: 18,
    location: "dehri on sone",
    email: "mayanksrivastava@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "Mayanksrivastava@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "mayank@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Heloo JS user");    
    
}
console.log(JsUser.greeting());






