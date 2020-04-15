const express = require("express");
const app = express();
const pdf = require("html-pdf");
const ejs =require("ejs");
const path =require("path"); 
const port = 3000;

app.use('/static', express.static('public'))

let customer ={
    name :"abc",
    contact : "91-2470141068"  
}

let  addresss = {
    line1 :"Flat No B-19",
    locality :"Raghurajnagar",
    city :"Satna",
    state : "Madhya Pradesh",
    pincode :"485001",
    country : "India"
}


let Loads = [
    {
        name : "a",
        weight : "10",
        volume :"34",
        ratio : "1.33"
    },
    {
        name : "a",
        weight : "10",
        volume :"34",
        ratio : "1.33"
    },
    {
        name : "a",
        weight : "10",
        volume :"34",
        ratio : "1.33"
    }
]

let data = {
    origin : "Satna",
    destination : "Bengaluru",
    pickup :"27-04-20",
    delivery : "27-04-20"
}

let address = {
    line1 :"Flat No B-19",
    locality :"Raghurajnagar",
    city :"Satna",
    state : "Madhya Pradesh",
    pincode :"485001",
    country : "India"
}

let qoute = {
    createdAt : "24-04-20",
    validF : "24-04-20",
    validT : "24-05-20",
    mode : "xyz" ,
    incoterm : "abc",
    custom : "true",
    perishable : "true",
    hazardous : "true",
    insurance :"true"
}

let carrier={
    name : "abc",
    service : "Air"
}

 app.get("/generateReview", (req, res) => {
     ejs.renderFile(path.join(__dirname, './views/', "qoutation-template.ejs"), {addresss:addresss, customer:customer,carrier:carrier, Loads:Loads ,data :data, qoute: qoute , address :address}, (err, data) => {
     if (err) {
           res.send(err);
     } else {
         let options = {
             "height": "11.25in",
             "width": "12.5in",
             "base": "file:///home/www/https://www.google.com/imgres?imgurl=https%3A%2F%2Fd1csarkz8obe9u.cloudfront.net%2Fposterpreviews%2Fcorporate-company-logo-design-template-2402e0689677112e3b2b6e0f399d7dc3_screen.jpg%3Fts%3D1561532453&imgrefurl=https%3A%2F%2Fwww.postermywall.com%2Findex.php%2Fart%2Ftemplate%2F2402e0689677112e3b2b6e0f399d7dc3%2Fcorporate-company-logo-design-template&tbnid=wqyWa-EyBAWw8M&vet=12ahUKEwjToO7W8-XoAhVaKrcAHXbDBF4QMygAegUIARCmAg..i&docid=Ovv2ld4pug2pSM&w=690&h=690&q=company%20logo&safe=active&ved=2ahUKEwjToO7W8-XoAhVaKrcAHXbDBF4QMygAegUIARCmAg",
             "header": {
                 "height": "20mm"
             },
             "footer": {
                 "height": "20mm",
             },
             "format":"A4",
             "orientation": "potrait",
             "type":"pdf"
         };
         pdf.create(data, options).toFile("review.pdf", function (err, data) {
             if (err) {
                 res.send(err);
             } else {
                 res.send("File created successfully");
             }
         });
     }
 });
 })
 app.listen(port,()=>{
     console.log("Server is listening on port, ",port);
 });