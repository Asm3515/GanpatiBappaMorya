const Appointment = require('../models/appointmentModel');

// controller function for listing the course
module.exports.list = async function(req,res){
    try {
        let appointment = await Appointment.find({});

        return res.json(200, {
            message: "appointment listed successfully",
            appointment: appointment
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
        const {reason, name, email, phone, date, time} = req.body;

        const new_appointment = new Appointment({ reason, name, email, phone, date, time });
        let appointment_x = await new_appointment.save();
        return res.json(200,{
            message: "appointment created successfully",
            appointment: appointment_x
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

    Appointment.remove({
      _id: req.params.id
    }, function(err, appointment) {
      if (err)
        return res.send(err);
      return res.json({ message: 'Appointment successfully deleted' });
    });
};