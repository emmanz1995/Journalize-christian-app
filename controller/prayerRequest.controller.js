const mongoose = require('mongoose');
const User = require('../model/user.model');
const PrayerRequest = require('../model/prayerRequest.model');

const prayerRequestController = {
    createPrayerRequest: async (req, res) => {
        try {
            const { title, body } = req.body;
            if(!title || !body) {
                return res.status(422).send({ message: 'Fields are empty, please add fields!' })
            }
            req.user.password = undefined;

            const newPrayer = new PrayerRequest({
                title,
                body,
                prayedBy: req.user.id
            })
            const prayers = await newPrayer.save()
            res.status(201).json({prayers})
        } catch(error){
            return res.status(401).send({error})
        }
    },
    getMyPrayers: async (req, res) => {
        try {
            const myPrayers = await PrayerRequest.find({ prayedBy: req.user.id })
            .populate('prayedBy', 'id username')
            res.status(200).json(myPrayers)
        } catch(e) {
            res.status(401).json({ error: e })
        }
    },
    deleteMyPrayers: async (req, res) => {
        try {
            await PrayerRequest.findOne({ _id: req.params.id })
            .populate('prayedBy', 'id')
            if(PrayerRequest.prayedBy._id.toString() === req.user.id.toString()) {
                const response = await PrayerRequest.remove()
                res.status(200).json({ response })
            }
        } catch(e) {
            res.status(401).json({ error: e });
            console.log(e);
            console.log(req)
        }
    }
}

module.exports = { prayerRequestController };
