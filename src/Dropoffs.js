import data from './customers.json';

/*********************************
 * Purpose:
 * This function creates the data for the Dropoff Table
 * 
 * Parameters 
 * school: for the current Ivy selected 
 * size: for the number of dropoffs in table
 * *******************************/
function dropoffsTable(school, tableSize) {
    let dateMap = new Map();    // map used to store dates and update the number of customers who have dropoffs on this date and the total items
    let dateSet = new Set();    // set used to store just the dates which we can turn into an array to sort
    const today = new Date();   // today's date
    // loop through each object in the JSON customer data
    // if the customer matches the desired school and has a returnDate after today's date, add them and their numItems to map
    data.forEach(item => {
        if (school === 'All') {     // all schools
            if (item.hasOwnProperty('returnDate')) {
                let dropoff = new Date(item.returnDate);
                if (today < dropoff) {
                    if (dateMap.has(item.returnDate)) { // check if the map already has the date, just update the values if so
                        dateMap.set(item.returnDate, [dateMap.get(item.returnDate)[0] + 1, dateMap.get(item.returnDate)[1] + item.numItems]);
                        dateSet.add(item.returnDate);
                    } else {    // otherwise create a new key and set its values
                        dateMap.set(item.returnDate, [1, item.numItems]);
                    }
				}
            }
        } else {
            if (item.school === school && item.hasOwnProperty('returnDate')) {  // for each specific school
                let dropoff = new Date(item.returnDate);
                if (today < dropoff) {
                    if (dateMap.has(item.returnDate)) {
                        dateMap.set(item.returnDate, [dateMap.get(item.returnDate)[0] + 1, dateMap.get(item.returnDate)[1] + item.numItems]);
                        dateSet.add(item.returnDate);
                    } else {
                        dateMap.set(item.returnDate, [1, item.numItems]);
                    }
                }
            }
        }
    });
    // make an array from the data so that we can sort the dates from earliest to latest
    let dateArr = [];
    dateArr = Array.from(dateSet);
    dateArr.sort();

    // create the data structure for the table
    let tableData = [];

    // loop through the first n dates and add them to tableData in the right format
    for (let i = 0; i < tableSize; i++) {
        let date = dateArr[i];
        let formattedDate = new Date(date);
        tableData.push({
            date: `${formattedDate.getMonth() + 1}/${formattedDate.getDate()}/${formattedDate.getFullYear()}`, // add 1 to month since function has january start at 6 and go up from there
            numberOfCustomers: `${dateMap.get(date)[0]}`,
            numberOfItems: `${dateMap.get(date)[1]}`
        });
    }
	return tableData;
}

export default dropoffsTable ;