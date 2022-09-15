const usermodel = require('../Models/userModel')
const Joi = require("joi")
const ownerModel= require("../Models/ownerModel")

const Createuser = async function (req, res) {

    try {
        let body = req.body

        if (Object.keys(body).length === 0) {
            return res.status(400).send({ Status: false, message: "can't be empty" })
        }

        // *************---------------- validation ----------------------********************* //
        if (!body.Name) {
            return res.status(400).send({ Status: false, message: " name is required" })
        }
        if (!body.Surname) {
            return res.status(400).send({ Status: false, message: " Surname is required" })
        }
        
        if (!body.Phone) {
            return res.status(400).send({ Status: false, message: " Phone number is required" })
        }
       
        if (!body.Email) {
            return res.status(400).send({ Status: false, message: " email is required" })
        }
        if (!body.Location) {
            return res.status(400).send({ Status: false, message: " Location is required" })
        }
        
         //******------------------- Email and phone unique condition -------------------****** //

        let Checkuniquedata = await usermodel.findOne({ $or: [{ email: body.Email}, { phone: body.Phone }] })
        if (Checkuniquedata) {
            if (Checkuniquedata.Phone == body.Phone) {
                return res.status(400).send({ Status: false, message: " This phone has been used already" })
            }
            if (Checkuniquedata.Email === body.Email) {
                return res.status(400).send({ Status: false, message: " This email has been used already" })
            }
        }
       
         let userCreate = await usermodel.create(body)
            return res.status(200).send({ Status: true, message: 'Success', data: userCreate })
           
    }
    catch (err) {
        return res.status(500).send({ Status: false, message: err.message })
    }
}

// ----------------------------- Get API -------------------------------------//

const getVehicle= async (req,res)=>{

    const user = await usermodel.findById(req.params.userId)
    if(!user){
        return res.status(404).send({error: "data does not exist"})
    }
    const result= await ownerModel.aggregate([{$group:{_id: "userId"}}])

}

module.exports={Createuser}