const express=require('express')
const app=express()

const http=require('http')
const socketio=require('socket.io')

const server = http.createServer(app)
const io=socketio(server)  //here we are running socketio on our server if we comment this line then our socket will not run on our server and our clien side library will not be generated
app.use('/',express.static(__dirname+'/sockpub'))
io.on('connection',(socket)=>{
    console.log(socket.id)
    socket.on('btnid',(data)=>{  //yaha server me hmara socket on hoga jb btnid naam ka event generate hoga 
        console.log('color event received ',data) //in this it runs when socket pr koi btnid naam ka event aaya ho
        io.emit('btnid',data) //io.emit se saare connected clients pe data chla jayega since in server io is an interface
                            // to which multiple clients are connected

        //IMP CONCepT agr hum io.emit ki jagah socket.emit krde then jb hum koi color kisi ek page(client) pe select krenege to
        //vo color dusre page pe nhi jayega but hum dusre page pe bhi apna koi color select kr skte hai at same time
        //along with the color on first page i.e. dono pages ek dusre ke independently kaam kr skte hai

        //Ek or imp concept go in client and check the funct waha likha hai

        //socket.broadcast.emit() //it will send the data(or color pages) to diff pages other than it current page
    })
//     setInterval(()=>{
//         socket.emit('whizz')},2000) //here we are emiting the event to client side
     }) 
server.listen(3636,()=>{
    console.log('http://localhost:3636')
})