const OwnerModel = require("../Models/ownerModel")
const Joi = require("joi")

const createOwner = async (req, res) => {

    const schema = Joi.object({
        vehicleId: Joi.string().required(),
        userId: Joi.string().required()
    })
    const { error, value: payload } = schema.validate(req.body)
    if (error) {
        return res.status(400).send({ message: "bad request", error: error.message })
    }
    try {
        const result = await OwnerModel.create(payload)
        return res.status(201).send({ message: "successfully created", data: result })
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

module.exports = { createOwner }