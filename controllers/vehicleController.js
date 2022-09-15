const vehiclemodel = require('../Models/vehicleModel')

const Createvehicle = async function (req, res) {

    try {
        let body = req.body

        if (Object.keys(body).length === 0) {
            return res.status(400).send({ Status: false, message: "can't be empty" })
        }

        // *************---------------- validation ----------------------********************* //
        if (!body.Vehicle_name) {
            return res.status(400).send({ Status: false, message: " name is required" })
        }
        if (!body.Vehicle_brand) {
            return res.status(400).send({ Status: false, message: " brand is required" })
        }
        
        if (!body.Vehicle_number) {
            return res.status(400).send({ Status: false, message: " number is required" })
        }
       
       
        let vehicleCreate = await vehiclemodel.create(body)
            return res.status(200).send({ Status: true, message: 'Success', data: vehicleCreate })
           
    }
    catch (err) {
        return res.status(500).send({ Status: false, message: err.message })
    }
}



module.exports={Createvehicle}