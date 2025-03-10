const mongoose = require("mongoose");

const schema = mongoose.Schema;

const formSchema = new schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("register", formSchema);
