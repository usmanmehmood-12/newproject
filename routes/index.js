const companyController= require('../controllers').company;

module.exports=(app)=>{

    app.get('/api',(req,res)=>{

        res.send("Welcome to the Bidding Project");
    });
/** Start - Company creates routes for creating new record  */
app.post('/api/company',companyController.create);
/** End - Company creates routes for creating new record */
}

