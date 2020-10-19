const Company= require('../models').Company;
module.exports = {
    create(req,res){
        return Company.create({
           companyname: req.body.companyname,
            companyemail: req.body.companyemail,
            city:req.body.city,
            registrationnumber:req.body.registrationnumber,
            password: req.body.password,
        })
        .then(company => res.status(201).send(company))
        .catch(error=> res.status(400).send(error));
    },
};