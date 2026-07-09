
// CHAPTER 1 : FETCH ()

// fetch("https://jsonplaceholder.typicode.com/users").then((res)=> res.json()).then((data)=> console.log(data))

async function getuser() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let users = await response.json()
    console.log(users)
    console.log(typeof(users)) //object 
    console.log(users[0])
}
getuser()

// BETTER VERSION 

async function getusers() {
    try {
        const res= await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok){
            throw new Error("https status error " , res.status)
        }
        const users= await res.json()
        console.log(users)
        
    } catch (error) {
        console.log("ERROR : " , error)
    }
    
}
getusers()



// chapter 2 : localStorage 

// localStorage stores everything in the form of key value pairs strings 
let username= localStorage.setItem("username" , "nisha")

console.log(localStorage.getItem("username"))
// VM2558:1 nisha
console.log(localStorage.removeItem("username"))
console.log(localStorage.clear())

// but for object we can not do the same things 
// we must convert them into jason strign before storing as setitem in localStorage and we must parse them as json.parse before reading them , otherwise they will not behave correct 



let obj = { name : "nisha" , age : 20}
let b = localStorage.setItem("obj" , JSON.stringify(obj))


console.log(JSON.parse(localStorage.getItem("obj")))
// VM3161:1 {name: 'nisha', age: 20}



