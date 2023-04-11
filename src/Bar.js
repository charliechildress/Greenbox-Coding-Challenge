import data from './customers.json';

/*********************************
 * Purpose: 
 * based on the time span selected, create the data for the graph that finds the revenue for
 * all months within the selected time span. This is done by using the Date() method to assign date variables 
 * for each month and checking every customer's period of time they have stuff in storage. If the two values overlap,
 * increase the revenue accordingly.
 * 
 * Parameters:
 * timeSpan: the selected amount of time the graph covers 'this year', 'this month', etc.
 * school: current Ivy school selected
 *
 * *******************************/
function barGraphCreator(timeSpan, school) {

    // initialize values
    const today = new Date();   // today's date 
    const month = today.toLocaleString('en-US', { month: 'long' }); // String for the name of the month
    let barData = [];

    // first timeSpan - this month
    if (timeSpan === 'This month') {
        let revenue = 0;
        // loop through all customer objects in JSON data
        data.forEach(item => {
            if (school === 'All') {     // all schools
                if (item.hasOwnProperty('pickupDate')) {            // make sure object has pickup and dropoff dates (if it has one it has both)
                    let pickup = new Date(item.pickupDate);
                    let dropoff = new Date(item.returnDate);    
                    if (pickup <= today && today < dropoff) {       // if this month is in between the pickup and dropoffs dates (works because month by month plans and doesn't need to account for case where pickup and dropoff date are in the same month and both before and after current date)
                        revenue += item.monthlyCost;                // update revenue
                    }
                }
            } else {
                if (item.school === school && item.hasOwnProperty('pickupDate')) {      // specified school
                    let pickup = new Date(item.pickupDate);
                    let dropoff = new Date(item.returnDate);
                    if (pickup <= today && today < dropoff) {
                        revenue += item.monthlyCost;
                    }
                }
            }
        });
        // format the data
        barData = [[month, revenue]];
    } else if (timeSpan === 'Next 3 months') {      // time span is the next three months; includes this current month
        let currentDate = new Date();                                           // this month
        let forwardsDate1 = new Date(today.setMonth(today.getMonth() + 1));     // next month (this handles boundary cases, adding one month to December makes it January)
        let forwardsDate2 = new Date(today.setMonth(today.getMonth() + 1));     // two months from now
        const forwardsMonth1 = forwardsDate1.toLocaleString('en-US', { month: 'long' });    // String for name of next month
        const forwardsMonth2 = forwardsDate2.toLocaleString('en-US', { month: 'long' });    // String for name of month two months from now
        let revenue = 0;    // revenue for this month
        let revenue1 = 0;   // revenue for next month
        let revenue2 = 0;   // revenue for month two months from now

        // loop through all customers and check each month and update its revenue
        data.forEach(item => {
            if (school === 'All') {
                if (item.hasOwnProperty('pickupDate')) {
                    let pickup = new Date(item.pickupDate);
                    let dropoff = new Date(item.returnDate);
                    if (pickup <= currentDate && currentDate < dropoff) {
                        revenue += item.monthlyCost;
                    }
                    if (pickup <= forwardsDate1 && forwardsDate1 < dropoff) {
                        revenue1 += item.monthlyCost;
                    }
                    if (pickup <= forwardsDate2 && forwardsDate2 < dropoff) {
                        revenue2 += item.monthlyCost;
                    }
                }
            } else {
                if (item.school === school && item.hasOwnProperty('pickupDate')) {
                    let pickup = new Date(item.pickupDate);
                    let dropoff = new Date(item.returnDate);
                    if (pickup <= currentDate && currentDate < dropoff) {
                        revenue += item.monthlyCost;
                    }
                    if (pickup <= forwardsDate1 && forwardsDate1 < dropoff) {
                        revenue1 += item.monthlyCost;
                    }
                    if (pickup <= forwardsDate2 && forwardsDate2 < dropoff) {
                        revenue2 += item.monthlyCost;
                    }
                }
            }
        });
        // format the data
        barData = [[month, revenue], [forwardsMonth1, revenue1], [forwardsMonth2, revenue2]];
    } else if (timeSpan === 'Last 3 months') {      // time span is last three months - includes current month
        let currentDate = new Date();                                           // this month
        let backwardsDate1 = new Date(today.setMonth(today.getMonth() - 1));    // last month
        let backwardsDate2 = new Date(today.setMonth(today.getMonth() - 1));    // two months ago
        const backwardsMonth1 = backwardsDate1.toLocaleString('en-US', { month: 'long' });      // string for name of last month
        const backwardsMonth2 = backwardsDate2.toLocaleString('en-US', { month: 'long' });      // string for name of month two months ago
        let revenue = 0;    // revenue for this month
        let revenue1 = 0;   // revenue for last month
        let revenue2 = 0;   // revenue for two months ago

        // loop through all customers and check each month and update its revenue
        data.forEach(item => {
            if (school === 'All') {
                if (item.hasOwnProperty('pickupDate')) {
                    let pickup = new Date(item.pickupDate);
                    let dropoff = new Date(item.returnDate);
                    if (pickup <= currentDate && currentDate < dropoff) {
                        revenue += item.monthlyCost;
                    }
                    if (pickup <= backwardsDate1 && backwardsDate1 < dropoff) {
                        revenue1 += item.monthlyCost;
                    }
                    if (pickup <= backwardsDate2 && backwardsDate2 < dropoff) {
                        revenue2 += item.monthlyCost;
                    }
                }
            } else {
                if (item.school === school && item.hasOwnProperty('pickupDate')) {
                    let pickup = new Date(item.pickupDate);
                    let dropoff = new Date(item.returnDate);
                    if (pickup <= currentDate && currentDate < dropoff) {
                        revenue += item.monthlyCost;
                    }
                    if (pickup <= backwardsDate1 && backwardsDate1 < dropoff) {
                        revenue1 += item.monthlyCost;
                    }
                    if (pickup <= backwardsDate2 && backwardsDate2 < dropoff) {
                        revenue2 += item.monthlyCost;
                    }
                }
            }
        });
        // format the data
        barData = [[backwardsMonth2, revenue2], [backwardsMonth1, revenue1], [month, revenue]];
    } else {
        // do all months
        const january = new Date(today.getFullYear(), 0, 1);
        const february = new Date(today.getFullYear(), 1, 1);
        const march = new Date(today.getFullYear(), 2, 1);
        const april = new Date(today.getFullYear(), 3, 1);
        const may = new Date(today.getFullYear(), 4, 1);
        const june = new Date(today.getFullYear(), 5, 1);
        const july = new Date(today.getFullYear(), 6, 1);
        const august = new Date(today.getFullYear(), 7, 1);
        const september = new Date(today.getFullYear(), 8, 1);
        const october = new Date(today.getFullYear(), 9, 1);
        const november = new Date(today.getFullYear(), 10, 1);
        const december = new Date(today.getFullYear(), 11, 1);
        let revenue1 = 0;
        let revenue2 = 0;
        let revenue3 = 0;
        let revenue4 = 0;
        let revenue5 = 0;
        let revenue6 = 0;
        let revenue7 = 0;
        let revenue8 = 0;
        let revenue9 = 0;
        let revenue10 = 0;
        let revenue11 = 0;
        let revenue12 = 0;
        // loop through all customers and check every month and update its revenue
        data.forEach(item => {
            if (school === 'All') {
                if (item.hasOwnProperty('pickupDate')) {
                    let pickup = new Date(item.pickupDate);
                    let dropoff = new Date(item.returnDate);
                    if (pickup <= january && january < dropoff) {
                        revenue1 += item.monthlyCost;
                    }
                    if (pickup <= february && february < dropoff) {
                        revenue2 += item.monthlyCost;
                    }
                    if (pickup <= march && march < dropoff) {
                        revenue3 += item.monthlyCost;
                    }
                    if (pickup <= april && april < dropoff) {
                        revenue4 += item.monthlyCost;
                    }
                    if (pickup <= may && may < dropoff) {
                        revenue5 += item.monthlyCost;
                    }
                    if (pickup <= june && june < dropoff) {
                        revenue6 += item.monthlyCost;
                    }
                    if (pickup <= july && july < dropoff) {
                        revenue7 += item.monthlyCost;
                    }
                    if (pickup <= august && august < dropoff) {
                        revenue8 += item.monthlyCost;
                    }
                    if (pickup <= september && september < dropoff) {
                        revenue9 += item.monthlyCost;
                    }
                    if (pickup <= october && october < dropoff) {
                        revenue10 += item.monthlyCost;
                    }
                    if (pickup <= november && november < dropoff) {
                        revenue11 += item.monthlyCost;
                    }
                    if (pickup <= december && december < dropoff) {
                        revenue12 += item.monthlyCost;
                    }
                }
            } else {
                if (item.school === school && item.hasOwnProperty('pickupDate')) {
                    let pickup = new Date(item.pickupDate);
                    let dropoff = new Date(item.returnDate);
                    if (pickup <= january && january < dropoff) {
                        revenue1 += item.monthlyCost;
                    }
                    if (pickup <= february && february < dropoff) {
                        revenue2 += item.monthlyCost;
                    }
                    if (pickup <= march && march < dropoff) {
                        revenue3 += item.monthlyCost;
                    }
                    if (pickup <= april && april < dropoff) {
                        revenue4 += item.monthlyCost;
                    }
                    if (pickup <= may && may < dropoff) {
                        revenue5 += item.monthlyCost;
                    }
                    if (pickup <= june && june < dropoff) {
                        revenue6 += item.monthlyCost;
                    }
                    if (pickup <= july && july < dropoff) {
                        revenue7 += item.monthlyCost;
                    }
                    if (pickup <= august && august < dropoff) {
                        revenue8 += item.monthlyCost;
                    }
                    if (pickup <= september && september < dropoff) {
                        revenue9 += item.monthlyCost;
                    }
                    if (pickup <= october && october < dropoff) {
                        revenue10 += item.monthlyCost;
                    }
                    if (pickup <= november && november < dropoff) {
                        revenue11 += item.monthlyCost;
                    }
                    if (pickup <= december && december < dropoff) {
                        revenue12 += item.monthlyCost;
                    }
                }
            }
        });
        // format the data
        barData = [['January', revenue1], ['February', revenue2], ['March', revenue3], ['April', revenue4], ['May', revenue5], ['June', revenue6], ['July', revenue7], ['August', revenue8], ['September', revenue9], ['October', revenue10], ['November', revenue11], ['December', revenue12]];
    }
    return barData;
}

export default barGraphCreator;
