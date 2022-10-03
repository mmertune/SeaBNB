const {Schema, model} = require("mongoose");

const cabinSchema = new Schema({
  pictures: [],
  city: {
    type: String,
    required: true,
  },
  stateAbbrv: {
    type:String,
    required:true,
  },
  rating: {
    type:Number,
    required:true
  },
  address: {
    type: String,
    required:true,
    unique: true,
  },
  pricePerNight: {
    type:Number,
    required:true
  },
  owner: {
    type: Schema.Types.ObjectID,
    ref:'User',
    required:true
  },
},
{
    timestamps:true
});
module.exports = model("Cabin", cabinSchema);
