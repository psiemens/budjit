var EmailHelpers = {
  parse: function(data) {
    var text = data.replace(/(\r\n|\n|\r)/gm, '');
    var re = /(Purchase|Withdrawal) Amount: \$(\d*.\d\d)/;
    var match;

    if ((match = re.exec(text)) == null) {
      throw new Error('Email parsing failed');
    }

    var type = match[1].toLowerCase(),
        amount = parseFloat(match[2]);

    return {
      timestamp: new Date(),
      type: type,
      amount: amount,
      location: 'none'
    };
  }
};

module.exports = EmailHelpers;
