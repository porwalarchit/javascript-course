// const willGetYouADog = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const rand = Math.random();
//         console.log(rand);
//         if(rand < 0.5){
//             resolve()
//         }else{
//             reject();
//         }
//     }, 3000);
// });
// willGetYouADog.then(()=>{
//     console.log("Yay, you got a Dog :)");
// });
// willGetYouADog.catch(()=>{
//     console.log("Oops, you didn't got a dog!!");
// });

const makeDogPromise = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const rand = Math.random();
            console.log(rand);
            if(rand < 0.5){
                resolve()
            }else{
                reject();
            }
        }, 2000);
    });
};

makeDogPromise()
.then(()=>{
    console.log("Yay, you got a Dog :)");
})
.catch(()=>{
    console.log("Oops, you didn't got a dog!!");
});