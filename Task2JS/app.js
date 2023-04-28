let persons=[{
    name:'AJAY',
    weight:75
},
{
    name:'Kishore',
    weight:60
},
{
    name:'varadha',
    weight:70,
},
{
    name:'AJAY S',
    weight:73
}
]
let mass=persons.reduce((acc,x)=>{

    return acc+x.weight
},0)
//total heigth
let person1=[{
    name:'AJAY',
    height:183
},
{
    name:'Kishore',
    height:180
},
{
    name:'varadha',
    height:170
},
{
    name:'AJAY S',
    height:175
}
]
let h=person1.reduce((acc,x)=>{
    return acc+x.height
},0)
//no of characrter
let person3=[{
    name:'AJAY',
    height:183
},
{
    name:'Kishore',
    height:180
},
{
    name:'varadha',
    height:170
},
{
    name:'AJAY S',
    height:175
}
]
let count=person3.map((x)=>x.name).length
//eye count
let person4=[{
    name:'AJAY',
    height:183,
    eye:'red'
},
{
    name:'Kishore',
    height:180,
    eye:'red'

},
{
    name:'varadha',
    height:170,
    eye:'blue'

},
{
    name:'AJAY S',
    height:175,
    eye:'black'

}
]
let eye=person4.reduce((acc,x)=>{
    if(acc[x.eye]){
    acc[x.eye]++
    }
else{
acc[x.eye]=1
}
return acc
}
,{})
let resultDiv = document.getElementById('result');
let eyes=JSON.stringify(eye)
resultDiv.innerHTML=eyes
