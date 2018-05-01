var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongo = require("mongoose");  
  
var db = mongo.connect("mongodb://localhost:27017/Acxiom", function(err, response){  
   if(err){ console.log( err); }  
   else{ console.log('Connected to ' + db, ' + ', response); }  
});  
  
   
var app = express()  
app.use(bodyParser());  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true}));  
   
  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });  
  
 var Schema = mongo.Schema;  
  
var UsersSchema = new Schema({      
 name: { type: String   },       
 address: { type: String   },   
},{ versionKey: false });  


  
var model = mongo.model('users', UsersSchema, 'users');  
  
app.post("/api/SaveUser",function(req,res){   
 var mod = new model(req.body);  
 if(req.body.mode =="Save")  
 {  
    mod.save(function(err,data){  
      if(err){  
         res.send(err);                
      }  
      else{        
          res.send({data:"Record has been Inserted..!!"});  
      }  
 });  
}  
else   
{  
 model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address},  
   function(err,data) {  
   if (err) {  
   res.send(err);         
   }  
   else{        
          res.send({data:"Record has been Updated..!!"});  
     }  
 });  
  
  
}  
 })  
  
  
 app.get("/api/getUser",function(req,res){  
    model.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          });  
  }) 
  

// Get Client API
var ClientSchema = new Schema({      
    client_number: { type: String   },       
    account_indicator: { type: String   },  
    acct_first_name: { type: String   },  
    acct_last_name: { type: String   },  
    acct_address_line_1: { type: String   },  
    acct_city: { type: String   },  
    acct_state: { type: String   },  
    acct_zip: { type: String   },  
    phone_number: { type: String   }, 
    email_address: { type: String   },   
   },{ versionKey: false });  

  var clientModel = mongo.model('clients', UsersSchema, 'clients');  
  var aumModel = mongo.model('aum', UsersSchema, 'aum');  
  app.get("/api/getClients",function(req,res){  
    clientModel.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{ 
                  res.send(data);  
                  }  
          });  
  })  

  var aumSchema = new Schema({
    client_number: { type: String   },       
    cash: { type: String   },       
    stocks: { type: String   },       
    bonds: { type: String   },       
    col_401K: { type: String   },       
    total_acc_balance: { type: String   },       
    month_1: { type: String   },       
    year_1: { type: String   },       
    year_2: { type: String   },       
});

var aumModel = mongo.model('aum', UsersSchema, 'aum');  
app.get("/api/getAum",function(req,res){  
    aumModel.find({},function(err,data){  
            if(err){  
                res.send(err);  
            }  
            else{ 
                res.send(data);  
                }  
        });  
})  

var investorprefSchema = new Schema({
    client_number: { type: String   },       
    investment: { type: String   },       
    travel: { type: String   },       
    real_estate_interest: { type: String   },       
    potential_inheritor: { type: String   },       
    adults_wealthy_parent: { type: String   },       
    discretionary_income: { type: String   },       
    disposable_income: { type: String   },       
    total_liquid_investible_assets: { type: String   },  
});

var investorprefModel = mongo.model('investorpref', investorprefSchema, 'investorpref');  
app.get("/api/getinvestorpref",function(req,res){  
    investorprefModel.find({},function(err,data){  
            if(err){  
                res.send(err);  
            }  
            else{ 
                res.send(data);  
                }  
        });  
})  

var investorprofileSchema = new Schema({
    age_2_yr_increments: { type: String   },       
    education: { type: String   },       
    occupation: { type: String   },       
    home_type: { type: String   },       
    marital_status: { type: String   },       
    presence_of_children: { type: String   },       
    children_age_ranges: { type: String   },       
    income: { type: String   },  
    home_market_value: { type: String   },  
});

var investorprofileModel = mongo.model('investorprofile', investorprofileSchema, 'investorprofile');  
app.get("/api/getinvestorprofile",function(req,res){  
    investorprofileModel.find({},function(err,data){  
            if(err){  
                res.send(err);  
            }  
            else{ 
                res.send(data);  
                }  
        });  
})  

  
  
app.listen(8080, function () {  
    
 console.log('Example app listening on port 8080!')  
})  