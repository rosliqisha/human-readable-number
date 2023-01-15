module.exports = function toReadable (number) {
let numberToWords = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
    11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
};
let dozenNumberToWords;
if (number >= 20) {
    dozenNumberToWords = {
    20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',
    };
    const numberString = number.toString().split('');
    if (numberString.length === 2)
            if (number % 10 == 0) {
                return dozenNumberToWords[number];
            } else {
                if (numberString[0] == 2) {
                    return 'twenty ' + numberToWords[numberString[1]];
                }
                if (numberString[0] == 3) {
                    return 'thirty ' + numberToWords[numberString[1]];
                }
                if (numberString[0] == 4) {
                    return 'forty ' + numberToWords[numberString[1]];
                }
                if (numberString[0] == 5) {
                    return 'fifty ' + numberToWords[numberString[1]];
                }
                if (numberString[0] == 6) {
                    return 'sixty ' + numberToWords[numberString[1]];
                }
                if (numberString[0] == 7) {
                    return 'seventy ' + numberToWords[numberString[1]];
                }
                if (numberString[0] == 8) {
                    return 'eighty ' + numberToWords[numberString[1]];
                }
                if (numberString[0] == 9) {
                    return 'ninety ' + numberToWords[numberString[1]];
                }
            }
            if (numberString.length === 3)
            if (number % 100 != 0) {
                if (number % 10 === 0)
                    if (numberString[1] != 2) {
                        if (numberString[1] != 3) {
                            if (numberString[1] == 4) {
                                return numberToWords[parseInt(numberString[0])] + ' hundred ' + dozenNumberToWords[40];
                            }
                            if (numberString[1] == 5) {
                                return numberToWords[parseInt(numberString[0])] + ' hundred ' + dozenNumberToWords[50];
                            }
                            if (numberString[1] == 6) {
                                return numberToWords[parseInt(numberString[0])] + ' hundred ' + dozenNumberToWords[60];
                            }
                            if (numberString[1] == 7) {
                                return numberToWords[parseInt(numberString[0])] + ' hundred ' + dozenNumberToWords[70];
                            }
                            if (numberString[1] == 8) {
                                return numberToWords[parseInt(numberString[0])] + ' hundred ' + dozenNumberToWords[80];
                            }
                            if (numberString[1] == 9) {
                                return numberToWords[parseInt(numberString[0])] + ' hundred ' + dozenNumberToWords[90];
                            }
                        } else {
                            return numberToWords[parseInt(numberString[0])] + ' hundred ' + dozenNumberToWords[30];
                        }
                    } else {
                        return numberToWords[parseInt(numberString[0])] + ' hundred ' + dozenNumberToWords[20];
                    }
                if (numberString[1] == 0) {
                    return numberToWords[parseInt(numberString[0])] + ' hundred ' + numberToWords[numberString[2]];
                }
                if (numberString[1] == 1) {
                    if (numberString[2] == 0) {
                        return numberToWords[parseInt(numberString[0])] + ' hundred ' + numberToWords[10];
                    }
                    if (numberString[2] == 1) {
                        return numberToWords[parseInt(numberString[0])] + ' hundred ' + numberToWords[11];
                    }
                    if (numberString[2] == 2) {
                        return numberToWords[parseInt(numberString[0])] + ' hundred ' + numberToWords[12];
                    }
                    if (numberString[2] == 3) {
                        return numberToWords[parseInt(numberString[0])] + ' hundred ' + numberToWords[13];
                    }
                    if (numberString[2] == 4) {
                        return numberToWords[parseInt(numberString[0])] + ' hundred ' + numberToWords[14];
                    }
                    if (numberString[2] == 5) {
                        return numberToWords[parseInt(numberString[0])] + ' hundred ' + numberToWords[15];
                    }
                    if (numberString[2] == 6) {
                        return numberToWords[parseInt(numberString[0])] + ' hundred ' + numberToWords[16];
                    }
                    if (numberString[2] == 7) {
                        return numberToWords[parseInt(numberString[0])] + ' hundred ' + numberToWords[17];
                    }
                    if (numberString[2] == 8) {
                        return numberToWords[parseInt(numberString[0])] + ' hundred ' + numberToWords[18];
                    }
                    if (numberString[2] == 9) {
                        return numberToWords[parseInt(numberString[0])] + ' hundred ' + numberToWords[19];
                    }
                }
                if (numberString[1] == 2) {
                    return numberToWords[parseInt(numberString[0])] + ' hundred ' + dozenNumberToWords[20] + ' ' + numberToWords[numberString[2]];
                }
                if (numberString[1] == 3) {
                    return numberToWords[parseInt(numberString[0])] + ' hundred ' + dozenNumberToWords[30] + ' ' + numberToWords[numberString[2]];
                }
                if (numberString[1] == 4) {
                    return numberToWords[parseInt(numberString[0])] + ' hundred ' + dozenNumberToWords[40] + ' ' + numberToWords[numberString[2]];
                }
                if (numberString[1] == 5) {
                    return numberToWords[parseInt(numberString[0])] + ' hundred ' + dozenNumberToWords[50] + ' ' + numberToWords[numberString[2]];
                }
                if (numberString[1] == 6) {
                    return numberToWords[parseInt(numberString[0])] + ' hundred ' + dozenNumberToWords[60] + ' ' + numberToWords[numberString[2]];
                }
                if (numberString[1] == 7) {
                    return numberToWords[parseInt(numberString[0])] + ' hundred ' + dozenNumberToWords[70] + ' ' + numberToWords[numberString[2]];
                }
                if (numberString[1] == 8) {
                    return numberToWords[parseInt(numberString[0])] + ' hundred ' + dozenNumberToWords[80] + ' ' + numberToWords[numberString[2]];
                }
                if (numberString[1] == 9) {
                    return numberToWords[parseInt(numberString[0])] + ' hundred ' + dozenNumberToWords[90] + ' ' + numberToWords[numberString[2]];
                }
            } else {
                return numberToWords[parseInt(numberString[0])] + ' hundred';
            }
    } else {
        return numberToWords[number];
    }
}  
