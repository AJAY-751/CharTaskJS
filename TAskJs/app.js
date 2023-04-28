const str = ['AJAY B', 'BOSS A', 'KUMAR C'];
const val=str.map((x)=>{return x}) 
//2nd
const heightincm=[100,123,453,678]
const h=heightincm.map((y)=>{return y+ ' in cm '})
//3
let details=[{
    name:'AJAY .B',
    age:21,
    height:186 +'cm'
},
{
    name:'boss .A',
    age:50,
    height:165 +'cm'
},
{
    name:'KUMAR .C',
    age:21,
    height:136 +'cm'
}
]
let person=details.map(x=>{
    return 'My name is '+x.name +", " + 'Iam '+ x.age+' old,'+ ' My heigth is '+x.height
   
})
const str1= [
{ firstname:'AJAY', lastname:'B'},
{ firstname:'BOSS', lastname:'A'},
{ firstname:'KUMAR', lastname:'C'}
]
const first=str1.map((x=>{
    return x.firstname
}))


