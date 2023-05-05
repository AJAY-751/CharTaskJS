let obj1=[
    {
    name:'Ajay B',
    height:286,
    mass:130,
    gender:'Male'
},
{
    name:'Ajay S',
    height:196,
    mass:96,
    gender:'Male'
},
{
    name:'Kishore M',
    height:201,
    mass:101,
    gender:'Male'
},
{
    name:'Naveena D',
    height:186,
    mass:98,
    gender:'Female'
}
]
let sortname=obj1.sort((a,b)=>
{
    if(a.name<b.name)
    return -1
    else if(a.name>b.name)
    return 1
    else
    return 0
})
let sortedsrtr1=JSON.stringify(sortname)
//sortheight
let obj2=[
    {
    name:'Ajay B',
    height:286,
    mass:130,
    gender:'Male'
},
{
    name:'Ajay S',
    height:196,
    mass:96,
    gender:'Male'
},
{
    name:'Kishore M',
    height:201,
    mass:101,
    gender:'Male'
},
{
    name:'Naveena D',
    height:186,
    mass:98,
    gender:'Female'
}
]

let sortheight=obj2.sort((a,b)=>{
   return a.height-b.height
})
let strh=JSON.stringify(sortheight)
//sortgender
let gen=obj1.sort((a,b)=>{
    if(a.gender<b.gender)
    return -1
    else if(a.gender>b.gender)
    return 1
    else
    return 0
})
let sortgender=JSON.stringify(gen)
//sortmass
let sortmass=obj1.sort((a,b)=>{
    return a.mass - b.mass
})
let strm=JSON.stringify(sortmass)
