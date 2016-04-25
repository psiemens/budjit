var EmailHelpers = {
  parse: function(text) {
    var re = /(Purchase|Withdrawal|Deposit) Amount: \$(\d*.\d\d)(?:.|[\r\n])*Transaction Description: (.*) [\r\n]/;
    var match;

    if ((match = re.exec(text)) == null) {
      throw new Error('Email parsing failed');
    }

    var type = match[1].toLowerCase(),
        amount = parseFloat(match[2]),
        location = match[3];

    return {
      timestamp: new Date(),
      type: type,
      amount: amount,
      location: location
    };
  }
};

module.exports = EmailHelpers;
