// const tinderUser = new Objects()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "mayanksrivastava@gmail.com",
    fullname: {
        userfullname: {
            firstname: "mayank",
            lastname: "srivastava",
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const Obj1 = {1: "a", 2: "b"}
const Obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1 , obj2 )
const Obj3 = {...Obj1, ...Obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    course: "js in hindi",
    price: "600",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const{courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     me : "hitesh",
//     coursename : "js in hindi",

// }