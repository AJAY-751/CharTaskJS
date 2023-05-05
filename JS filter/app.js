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
    name:'kishore M',
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
let getMass=obj1.filter(x=>x.mass>100)
let getName_m=getMass.map(x=>x.name)
let getHeight=obj1.filter(x=>x.height<200)
let getName_h=getHeight.map(x=>x.name)
let male=obj1.filter(x=>x.gender==='Male')
let getName_gm=male.map(x=>x.name)
let female=obj1.filter(x=>x.gender==='Female')
let getName_gf=female.map(x=>x.name)


