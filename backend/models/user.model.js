const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  pic: {
    type: String,
    required: true,
    default:
      "https://imgs.search.brave.com/Evls_n45SXJWvHRGRQWHlz6EUt0iGjxIvPflf-mgeSQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzQwLzEyLzQ5/LzM2MF9GXzM0MDEy/NDkzNF9iejNwUVRM/cmRGcEg5MmVra251/YVRIeThKdVhnRzdm/aS5qcGc",
  },
},
{
 timestamps:true
});

const User = mongoose.model("User", userModel);

module.exports = User;
