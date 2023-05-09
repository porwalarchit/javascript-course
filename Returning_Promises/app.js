const willGetYouADog = new Promise((resolve, reject)=>{
    const rand = Math.random();
    console.log(rand);
    if(rand < 0.5){
        resolve()
    }else{
        reject();
    }
});

willGetYouADog.then(()=>{
    console.log("Yay, you got a Dog");
}).catch(()=>{
    console.log("Oops, you didn't got a dog!!");
})