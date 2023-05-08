// function multiply(a,b=1){
//     console.log(a*b);
// }
// const greet=(person,greeting='hi',punctuation='!')=>{
//     console.log(`${person},${greeting},${punctuation}`)
// }
// function giveMeFour(a,b,c,d){
//     console.log('a',a)
//     console.log('b',b)
//     console.log('c',c)
//     console.log('d',d)
// }
// const str='GOAT';
// function sum(){
//     const argsArr=[...arguments]
//     return argsArr.reduce((total,currVal)=>{
//         return total+currVal;
//     })
// }
// const multiply={...nums}=>{
//     nums.reduce((total,currVal)=>total*currVal)
// }
// const raceResults=[
//     'Eliud Kipchoge',
//     'Feyisa Lelisa',
//     'Galen Rupp',
//     'Ghirmay Ghebreslassie',
//     'Alphonce Simbu',
//     'Jared Ward'
// ];
// const [gold,silver,bronze,podium]=raceResults;
// const getStats=(arr)=>
// {
//     const max=Math.max(...arr);
//     const min=Math.min(...arr);
//     const sum=arr.reduce((sum,r)=>sum+r);
//     const avg=sum/arr.length;
//     return{
//         max:max,
//         min:min,
//         sum:sum,
//         avg:avg
//     }
// }
// const reviews=[4.5,5,6.5,7,2.4,2];
// const stats=getStats(reviews);
// stats;
// const person={
//     first:"Archit",
//     last:"Porwal",
//     nickName:"Archi"
//     fullname(){
//         const{
//             first,
//             last,
//             nickName
//         }=this;
//         console.log(`${first} ${last}`)
//     }
// }
// const anno={
//     phrases:["ff","wefwfew","effqf","gwg","wgfwg","dfwff"];
//     pick(){
//         const{
//             phrases
//         }=this;
//         const idx=Math.floor(Math.random()*phrases*length);
//         return(phrases)
//     },
  

// }
// start(){
//     setInterval(function(){
//         console.log("ddadd")

//     },3000)
// }
function makeDeck(){
    const deck=[];
    const suits=['hearts','spades','diamonds','clubs'];
    const values=['2,3,4,5,6,7,8,9,10,Q,K,A'];
    for(let value of values.split(',')){
        for (let suit of suits){
            deck.push({value,suit})
        }
    }
    return deck;
}
function drawCard(deck){
    return deck.pop()
}
const myDeck=makeDeck();
const card1=drawCard(myDeck);