var Twilio = {
  parseSMS: function(data){
    var re = /\$([\d|,]*\.\d*).*at (.*). Stop/; 
    var match;
     
    if ((match = re.exec(data.Body)) == null) {
      throw new Error('SMS parsing failed');
    }

    return {
      timestamp: new Date(),
      amount: parseFloat(match[1]),
      location: match[2]
    };
  }
};

module.exports = Twilio;