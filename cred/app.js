var selectedRows=null
function addRow(){
   let name=document.getElementById('name').value
   let roll=document.getElementById('RollNo').value
   let table=document.getElementById('table')
   let row=table.insertRow()
   let col1=row.insertCell(0)
   let col2=row.insertCell(1)
   let col3=row.insertCell(2)
   let col4=row.insertCell(3)
   col1.innerHTML="#"+Math.ceil(Math.random()*1158000)
   col2.innerHTML=name
   col3.innerHTML=roll
    col4.innerHTML=`<button id="js1" onclick="onEdit(this)"> Edit</button>
     <button id="js"> Delete</button>`
  }

  