const mongoose = require('mongoose');

const Otters = require('./models/otters');

const url = 'mongodb://localhost:27017/ourAnimals';
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

    Otters.create({
      image: 'static/images/otters/1.jpg'
    })
    .then((otter) => {
        console.log(otter);

        return Otters.find({}).exec();
    })
    .then((otters) => {
        console.log(otters);

        return Otters.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });

});
