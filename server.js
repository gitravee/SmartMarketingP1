var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongo = require("mongoose");  
var multer = require('multer');
var path = require('path');
  
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

var clientModel = mongo.model('clients', UsersSchema, 'clients');  
var aumModel = mongo.model('aum', UsersSchema, 'aum');  
var investorprefModel = mongo.model('investorpref', investorprefSchema, 'investorpref'); 
var investorprofileModel = mongo.model('investorprofile', investorprofileSchema, 'investorprofile'); 

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

app.get("/api/getAum/:id*?",function(req,res){  
    aumModel.find(
        req.params.id !== undefined ? {"client_number": req.params.id} : {},
        function(err,data){  
            if(err){  
                res.send(err);  
            }  
            else{ 
                res.send(data);  
                }  
        });  
})  


app.get("/api/getinvestorpref/:id*?",function(req,res){  
    investorprefModel.find(
        req.params.id !== undefined ? {"client_number": req.params.id} : {},
        function(err,data){  
            if(err){  
                res.send(err);  
            }  
            else{ 
                res.send(data);  
                }  
        });  
})  

 
app.get("/api/getinvestorprofile/:id*?",function(req,res){  
    investorprofileModel.find(
        req.params.id !== undefined ? {"client_number": req.params.id} : {},
        function(err,data){  
            if(err){  
                res.send(err);  
            }  
            else{ 
                res.send(data);  
                }  
        });  
})  
  
app.use(express.static(path.join(__dirname, 'uploads')));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
   cb(null, './src/profilepic/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });

app.post("/api/upload", upload.array("uploads[]", 12), function (req, res) {
  console.log('files', req.files);
  res.send(req.files);
});

app.get('/api/profileImage', nocache, sendContent);
function sendContent(req, res) {
    var str = path.join(__dirname, 'src\\profilepic') + '\\profile-avatar.jpg';
    console.log('profileImage api', str);
    res.sendFile(str);
};

function nocache(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
  }
  
app.listen(8080, function () {  
    
 console.log('Example app listening on port 8080!')  
})  