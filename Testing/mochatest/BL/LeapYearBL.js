const readline = require('readline-sync');
module.exports = {
    leapyear: (year) => {
        if (isNaN(year) || year < 0 || Math.floor(year) != year ) {
            return undefined;
        }

        else {
            if (year.toString().length == 4) {
                // year = parseInt(year);
                if ((year % 4 == 0) && (year % 100 == 0) || (year % 400 == 0)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return year;
            }
        }

    }
}