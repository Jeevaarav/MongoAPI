const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const bodyparser=require('body-parser');
// app.use(express.json());
app.use(cors({origin:'*'}));
app.use(bodyparser.json());


const url="mongodb+srv://evmart:EVadmin%402023@cluster0.izhuea2.mongodb.net/EV_Mart";


const storedata=mongoose.connect(url).then(()=>{
    console.log("DB connected");
    app.listen(6900,(err)=>{
        console.log("Port connect @6900");
    })
})


app.get('/Register',async(req,res)=>{
   await mongoose.connection.collection("Register").find().toArray().then((Register)=>{
    res.send(Register);
})
}) 

app.post('/userRegister',async(req,res)=>{
    console.log(req.body);
    await mongoose.connection.collection("Register").insertOne(req.body).then((success)=>{
        
        // res.send("success");
    })
 }) 

 app.post('/forgotuser',async(req,res)=>{
    console.log(req.body);
    await mongoose.connection.collection("Register").updateOne({regemail:req.body[0].mail},{$set:{regpass:req.body[1].regpass,regconfirm:req.body[1].regpass}}).then((updated)=>{
            console.log("updated");
    })
 });

 app.post('/updateservice',async(req,res)=>{
    if(req.body.service.length){
        console.log(req.body.service[0].email);
        await mongoose.connection.collection("Register").updateOne({regemail:req.body.service[0].email},{$set:{service:req.body.service}}).then((updated)=>{
                console.log("updated");
        })
    }
    else{
        console.log(req.body);
        await mongoose.connection.collection("Register").updateOne({regemail:req.body.details.mail},{$set:{service:req.body.service.service}}).then((newupdate)=>{
            console.log("new update");
        })
    }
 })

app.get('/vehicleBrands',async(req,res)=>{
    await mongoose.connection.collection("vehicleBrands").find().toArray().then((vehicle)=>{
        res.send(vehicle);
    })
})

app.get('/Serviceform',async(req,res)=>{
    await mongoose.connection.collection("Serviceform").find().toArray().then((serviceform)=>{
        res.send(serviceform);
    })
})

app.get('/offers',async(req,res)=>{
    await mongoose.connection.collection("offers").find().toArray().then((offers)=>{
        res.send(offers);
    })
})

app.get('/kilometerrange',async(req,res)=>{
    await mongoose.connection.collection("kilometerrange").find().toArray().then((kilometerrange)=>{
        res.send(kilometerrange);
    })
})

app.get('/yearofmanufacture',async(req,res)=>{
    await mongoose.connection.collection("yearofmanufacture").find().toArray().then((yearofmanufacture)=>{
        res.send(yearofmanufacture);
    })
})

app.get('/oldvehicle',async(req,res)=>{
    await mongoose.connection.collection("oldvehicle").find().toArray().then((oldvehicle)=>{
        res.send(oldvehicle);
    })
})

app.get('/exchangeoffers',async(req,res)=>{
    await mongoose.connection.collection("exchangeoffers").find().toArray().then((exchangeoffers)=>{
        res.send(exchangeoffers);
    })
})

app.get('/Servicedata',async(req,res)=>{
    await mongoose.connection.collection("Servicedata").find().toArray().then((Servicedata)=>{
        res.send(Servicedata);
    })
})

app.get('/Services',async(req,res)=>{
    await mongoose.connection.collection("Services").find().toArray().then((Services)=>{
        res.send(Services);
    })
})

app.get('/Visa',async(req,res)=>{
    await mongoose.connection.collection("Visa").find().toArray().then((Visa)=>{
        res.send(Visa);
    })
})

app.get('/Mastercard',async(req,res)=>{
    await mongoose.connection.collection("Mastercard").find().toArray().then((Mastercard)=>{
        res.send(Mastercard);
    })
})


app.get('/paymentUPI',async(req,res)=>{
    await mongoose.connection.collection("paymentUPI").find().toArray().then((paymentUPI)=>{
        res.send(paymentUPI);
    })
})
