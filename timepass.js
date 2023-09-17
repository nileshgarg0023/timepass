// const promise = new Promise(function(resolve,reject){
//     if(false){
//         return resolve()
//     }else{
//         return reject()
//     }
// })

// promise.then(()=>{
//     console.log("resolved")
// }).catch(()=>{
//     console.log("rejected");
// })


// let n = Math.floor(Math.random() * 10);

// const ans = new Promise((res,rej)=>{
//     if(n < 5){
//         return res();
//     }else{
//         return rej()
//     }
// })


// ans.then(()=>{
//     console.log("less then 5")
// }).catch(()=>{
//     console.log("more then 5")
// })





const ans = new Promise((res,rej)=>{
    return res("sabse phle karenge resolve")
})

let newAns = ans.then((data)=>{
    console.log(data);
    return new Promise((res,rej)=>{
        return res("ek aur promise, promise k andar")
    })
}).catch(()=>{console.log("kuch reject ho to aajana");})

let newAns2 = newAns.then((data)=>{
    console.log(data);
    return new Promise((res,rej)=>{
        return res("khao piyo or so jao")
    })
}).catch(()=>{
    console.log("kuch error ho to log krdiyo");
})

newAns2.then((data)=>{
    console.log(data);
    console.log("ye last a sach me last sachii");
}).catch(()=>{
    console.log("yaha bhi error sambhal lio");
})