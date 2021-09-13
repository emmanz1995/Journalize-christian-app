const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const PrayerRequestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    prayedBy: {
        type: ObjectId,
        ref: 'user'
    },
    status: {
        type: Boolean,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('prayerRequest', PrayerRequestSchema);
