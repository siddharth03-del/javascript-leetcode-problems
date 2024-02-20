let promise1= new Promise((resolve,reject)=>setTimeout(()=>{
    console.log("promise1 resolved")
    resolve(2)
},3000))
let promise2=new Promise((resolve,reject)=>setTimeout(()=>{
    console.log("promise2 resolved")
    resolve(5)
},3000))
async function addTwoPromises(promise1,promise2){
    let value1= await promise1;
    let value2=await promise2;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("final promise resolved")
            resolve(value1+value2)
        },7000)
        })
    }

addTwoPromises(promise1,promise2)
.then((data)=>{
    console.log(data)
})
