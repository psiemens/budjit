var EmailHelpers = {
  parse: function(data) {
    var text = data.replace(/(\r\n|\n|\r)/gm, '');
    var re = /Purchase Amount: \$(\d*.\d\d)/;
    var match;

    var amount = 0,
        location = '';


    if ((match = re.exec(text)) == null) {
      //throw new Error('Email parsing failed');
    } else {
      amount = parseFloat(match[1]),
    }

    return {
      timestamp: new Date(),
      amount: amount,
      location: location
    };
  }
};

module.exports = EmailHelpers;
