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
            res.status(200).json({ myPrayers })
        } catch(e) {
            res.status(401).json({ error: e })
        }
    },
    getPrayer: async (req, res) => {
        try {
            const { _id } = req.params.id
            await PrayerRequest.findOne(_id)
            const response = await PrayerRequest.findOne({ prayedBy: req.user.id })
            return res.status(200).json({ response })
        } catch(e) {
            return res.status(401).json({ error: e })
        }
    },
    deleteMyPrayers: async (req, res) => {
        try {
            await PrayerRequest.findOne({ _id: req.params.id })
            .populate('prayedBy', '_id')
            const response = await PrayerRequest.deleteOne({ prayedBy: req.user.id })
            if(!response) {
                return res.status(422).json({ error: 'Could not delete prayer request' })
            } else {
                res.status(200).json({ response });
            }
        } catch(e) {
            res.status(401).json({ error: e });
            console.log(e);
        }
    }
}

module.exports = { prayerRequestController };
