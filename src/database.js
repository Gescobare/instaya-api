const mongoose = require("mongoose");

//Connection with DB

mongoose.connect(process.env.MONGO_URI)

.then(() => console.log("Data Base Connect!"))
.catch((error) => console.error(error))

module.exports = mongoose;