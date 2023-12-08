const Event = require('../models/eventModel');

// controller function for listing the course
module.exports.list = async function(req,res){
    try {
        let event = await Event.find({});
        return res.json(200, {
            message: "event listed successfully",
            event: event
        });
    } catch (err) {
        console.log('********',err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

//controller function for creating the product
module.exports.create = async function(req, res) {
    console.log("#############",req.body)
    try {
        const {name, date, time} = req.body;

        const new_event = new Event({ name, date, time });
        let event_x = await new_event.save();
        
        return res.json(200,{
            message: "event created successfully",
            event: event_x
        });
    } catch (err) {
        console.log('********',err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
};

//controller function for deleting the product
module.exports.delete = function(req, res) {

    Event.remove({
      _id: req.params.id
    }, function(err, event) {
      if (err)
        return res.send(err);
      return res.json({ message: 'Event successfully deleted' });
    });
};

//controller function for updating the event, a sample function
module.exports.update = function(req, res, query) {
    Event.findOneAndUpdate({_id: req.params.id}, {new: true}, function(err, event) {
        // Product found. Update  the quantity.
        event.name = req.body.name;
        event.date = req.body.date;
        event.time = req.body.time;
        event.save(function (error, event) {
            if (error) {
              console.log(error);
            //   return res.send('Device update failed', error);
            }
            console.log('save was successful ? => \n', event);
            // return res.send(error, event);
          });
      if (err)
        res.send(err);
        return res.json(200,{
            message: "event updated successfully",
            event: event
        });
    });
  };