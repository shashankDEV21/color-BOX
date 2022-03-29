let socket=io()

socket.on('connect',()=>{  //to print the socket Id on client side we write connect and not connection
document.getElementById('socky').innerText=socket.id
})

//  function myfunction () {
   
//     const color = document.getElementById('selectid').value;
    
//     colorthebox(color)
//     socket.emit('btnid',{color}) //socket.emit se sirf particular client pr data jaata hai
// }
//******************************************************** */

//  socket.on('whizz',()=>{
//      let div=document.createElement('div')
//      div.innerText='hello'
//      document.body.appendChild(div)
//  })
//************************************************** */
    function colorthebox(color){
    document.querySelector('.'+color).style.backgroundColor=color;
    setTimeout(()=>{
        document.querySelector('.'+color).style.backgroundColor=null;
    },5000)
}
document.getElementById("btnid").onclick=function(){
      const color = document.getElementById('selectid').value;
   // colorthebox(color) //agr hum yaha direct btn click krne pr func call krdete or koi socket ka use nhi krte then kya 
   //hota ki sirf ek hi page(client) pr hum color select kr paate or agr saath me koi dusra client/page bhi kholte to
   //uspe color select nhi kr skte the ya yu kahe ki vo page kaam nhi krta and at a time only one page can work
   //bcz server at a time ek hi client ko response bhejega lekin agr socket bhejenge to ek se jyada clients ko bhej skte hai
   
   //socket.emit('xyz') iska mlb hota hai ki ki xyz naam ka event generate ho rha hai
    socket.emit('btnid',{color})  //yaha pr hum client side se ye btayenge ki btnid naam ka ek event generate hue hai 
                                //or vo event sirf ussi pipeline ke socket pe dega jo serverside se usse connected hai 
} 

socket.on('btnid',(data)=>{
    colorthebox(data.color)
})