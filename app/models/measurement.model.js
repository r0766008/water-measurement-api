const sql = require("./db.js");

const Measurement = function(measurement) {
  this.id = measurement.id
  this.pubnub_id = measurement.pubnub_id;
  this.distance = measurement.distance;
  this.timestamp = measurement.timestamp;
};

Measurement.getAll = (result) => {
  let query = "SELECT * FROM measurements ORDER BY timestamp DESC";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("measurements: ", res);
    result(null, res);
  });
};

module.exports = Measurement;