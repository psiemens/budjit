var EmailHelpers = {
  parse: function(data) {
    var text = data.replace(/(\r\n|\n|\r)/gm, '');
    var re = /(Purchase|Withdrawal) Amount: \$(\d*.\d\d)/;
    var match;

    var amount = 9999.99,
        location = 'none';

    if ((match = re.exec(text)) == null) {
      //throw new Error('Email parsing failed');
    } else {
      var type = match[1].toLowerCase();
      amount = parseFloat(match[2]);
    }

    return {
      timestamp: new Date(),
      type: type,
      amount: amount,
      location: location
    };
  }
};

module.exports = EmailHelpers;
