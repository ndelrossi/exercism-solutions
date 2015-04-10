module.exports = function(phoneNumber) {

  function cleanNumber(number) {
    return number.replace(/[^0-9]/g, '');
  }

  function number() {

    var pN = cleanNumber(phoneNumber);
    var resultNumber;

    switch(pN.length) {
      case 10:
        resultNumber = pN;
        break;
      case 11:
        if (pN[0] == "1") resultNumber = pN.slice(1, pN.length);
      default:
        resultNumber = resultNumber || "0000000000";
    }

    return resultNumber;
  }

  function areaCode() {
    return cleanNumber(phoneNumber).slice(0, 3);
  }

  function toString() {
    var pN = cleanNumber(phoneNumber);
    return "(" + pN.slice(0, 3) + ") " + pN.slice(3, 6) + "-" + pN.slice(6-10);
  }

  return {
    number: number,
    areaCode: areaCode,
    toString: toString
  }
}
