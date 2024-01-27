import { createContext } from "react";

// const map = new HashMap();
// map.set('name', 'John');
// map.set('age', 30);
// map.set('city', 'New York');

// console.log(map.get('name')); // Output: John
// console.log(map.get('age')); // Output: 30
// console.log(map.get('city')); // Output: New York

// map.remove('age');
// console.log(map.get('age')); // Output: undefined

const userList=[
{
    user1:{
    name:"Shikha Singh",
    email:"shikha@gmail.com",
    password:"password"
},
user2:{
    name:"Shradhaa",
    email:"shradhaa@gmail.com",
    password:"pranav"
}

}]

const UserContext=createContext({
    user:{
        name:"Shikha Singh",
        state:"Logout",
        password:"password"
    }
})
export default UserContext;