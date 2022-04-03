const mongoose = require('mongoose');

const Otters = require('./models/otters');

const url = 'mongodb://localhost:27017/ourAnimals';
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

    Otters.create({
      image: 'https://github.com/Trianglium/ouranimals/tree/main/oaServer/public/images/otters'
    })
    .then((otter) => {
        console.log(otter);

        return Otters.findByIdAndUpdate(otter._id, {
          $set: { image: 'static/images/otters/3.jpg'}
        }, {
          new: true
        }).exec();
    })
    .then((otter) => {
        console.log(otter);

        otter.acknowledgements.push({
            name: "Nathaniel Yeo",
            contact: "https://unsplash.com/@nathanielyeo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        });
        return otter.save();
    })
    .then((otters) => {
        console.log(otters);

        return Otters.deleteOne({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });




});
