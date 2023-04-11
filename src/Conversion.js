import data from './customers.json';

/*********************************
 * Purpose:
 * Loops through JSON customer data to find total number of customers and number of customers
 * who have reservations. Then creates the data that is used in the donut pie graph as well as
 * the conversion rate.
 * 
 * Parameters:
 * school: for the current Ivy selected
 * *******************************/
function conversion(school) {

    // intialize values
    let reservations = 0;
    let totalAccounts = 0;

    // loop through all objects in customer data
    // if customer has numItems, it means they have a reservation so increment
    // always add 1 for total customers
    data.forEach(item => {
        if (school === 'All') {     // all schools
            if (item.hasOwnProperty('numItems')) {
                reservations++;
            }
            totalAccounts++;
        } else {
            if (item.school === school){    // specified school
                if (item.hasOwnProperty('numItems')) {
                    reservations++;
                }
                totalAccounts++;
            }
        }
    });

    // format the data for style and according to rsuite/charts specifications
    const donutData = [[`${reservations} Reservations`, reservations], [`${totalAccounts} Accounts Made`, totalAccounts - reservations]];
    const conversionRate = parseInt(100 * reservations / totalAccounts);
    return [donutData, conversionRate];     // list so that we can return multiple pieces of data
}

export default conversion;
