const mongoose = require('mongoose');

mongoose.connect(
    'your connection string',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

const paymentSchema = new mongoose.Schema( {
    id: String,
    itemId: String,
    paid: Boolean
})

const Payment = mongoose.model('Payment', paymentSchema);

module.exports