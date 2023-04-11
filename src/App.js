import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'rsuite/dist/rsuite.min.css';
import { BarChart, YAxis } from '@rsuite/charts';
import { PieChart } from '@rsuite/charts';
import { Table } from 'rsuite';
import logo from './greenboxLogo.png';
import conversion from './Conversion.js';
import barGraphCreator from './Bar.js';
import dropoffsTable from './Dropoffs.js';

// import the extra components for Table
const { Column, HeaderCell, Cell } = Table;

// lists for all Ivy schools and the different time spans for the revenue bar graph
const schools = ['All', 'Brown', 'Columbia', 'Cornell', 'Dartmouth', 'Harvard', 'Princeton', 'UPenn', 'Yale'];
const barTime = ['This year', 'This month', 'Last 3 months', 'Next 3 months', ];

function App() {
    // changing values
    const [school, setSchool] = React.useState('Select School');    // school we are currently looking at
    const [schoolColor, setSchoolColor] = React.useState('black');  // color of text based on school's color
    const [logoFilter, setLogoFilter] = React.useState('none');     // color of the logo based on school's color
    const [barGraphTime, setBarGraphTime] = React.useState('This year');    // time span for the revenue bar graph
    const [donutData, setDonutData] = React.useState([[`${0} Reservations`, 0], [`${0} Accounts Made`, 0]]);    // 
    const [conversionRate, setConversionRate] = React.useState(0);          // data for the conversion rate graph
    const [barData, setBarData] = React.useState([]);               // data for the bar graph
    const [tableData, setTableData] = React.useState([]);           // data for the dropoff table
    let donutColor = [schoolColor, 'lightgray'];                    // color for the conversion rate pie graph
    const tableSize = 3;                                            // number of dropoff dates for the dropoff table
    return (
        <div>
            <div className="Header">
                <header>
                    <p>
                        <img src={logo} alt="Greenbox logo" style={{ alignContent: 'left', height: '120px', weight: '80px', filter: logoFilter}} />

                        <h1 style={{ color: schoolColor, textAlign: 'center', fontFamily: "MicroSquare Bold Extended"}}>
                        Greenbox Coding Challenge
                        </h1>
                    </p>
                </header>
            </div>
            <hr style={{ backgroundColor: schoolColor, height: '4px' }}></hr>
            <div className="Dropdown Button" style={{ paddingInlineStart: '25px' }}>
                <h3 style={{ color: schoolColor }}> What School? </h3>
                <br />
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                        style={{ backgroundColor: schoolColor }}>
                        {school}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li class="dropdown-item" onClick={() => { setSchool(schools[0]); setSchoolColor('black'); setLogoFilter('none'); setDonutData(conversion(schools[0])[0]); setConversionRate(conversion(schools[0])[1]); setBarData(barGraphCreator(barGraphTime, schools[0])); setTableData(dropoffsTable(schools[0], tableSize))}}>All </li>
                        <li class="dropdown-item" onClick={() => { setSchool(schools[1]); setSchoolColor('#381C00'); setLogoFilter('invert(11%) sepia(39%) saturate(3157%) hue-rotate(22deg) brightness(96%) contrast(101%)'); setDonutData(conversion(schools[1])[0]); setConversionRate(conversion(schools[1])[1]); setBarData(barGraphCreator(barGraphTime, schools[1])); setTableData(dropoffsTable(schools[1], tableSize))}}>Brown</li>
                        <li class="dropdown-item" onClick={() => { setSchool(schools[2]); setSchoolColor("#9BCBEB"); setLogoFilter('invert(80%) sepia(11%) saturate(1240%) hue-rotate(171deg) brightness(97%) contrast(88%)'); setDonutData(conversion(schools[2])[0]); setConversionRate(conversion(schools[2])[1]); setBarData(barGraphCreator(barGraphTime, schools[2])); setTableData(dropoffsTable(schools[2], tableSize))}}>Columbia</li>
                        <li class="dropdown-item" onClick={() => { setSchool(schools[3]); setSchoolColor("#B31B1B"); setLogoFilter('invert(12%) sepia(88%) saturate(4229%) hue-rotate(354deg) brightness(94%) contrast(89%)'); setDonutData(conversion(schools[3])[0]); setConversionRate(conversion(schools[3])[1]); setBarData(barGraphCreator(barGraphTime, schools[3])); setTableData(dropoffsTable(schools[3], tableSize))}}>Cornell</li>
                        <li class="dropdown-item" onClick={() => { setSchool(schools[4]); setSchoolColor("#046A38"); setLogoFilter('invert(20%) sepia(68%) saturate(1526%) hue-rotate(124deg) brightness(103%) contrast(101%)'); setDonutData(conversion(schools[4])[0]); setConversionRate(conversion(schools[4])[1]); setBarData(barGraphCreator(barGraphTime, schools[4])); setTableData(dropoffsTable(schools[4], tableSize))}}>Dartmouth</li>
                        <li class="dropdown-item" onClick={() => { setSchool(schools[5]); setSchoolColor("#A41034"); setLogoFilter('invert(17%) sepia(42%) saturate(5177%) hue-rotate(336deg) brightness(90%) contrast(95%)'); setDonutData(conversion(schools[5])[0]); setConversionRate(conversion(schools[5])[1]); setBarData(barGraphCreator(barGraphTime, schools[5])); setTableData(dropoffsTable(schools[5], tableSize))}}>Harvard</li>
                        <li class="dropdown-item" onClick={() => { setSchool(schools[6]); setSchoolColor("#FF671F"); setLogoFilter('invert(41%) sepia(99%) saturate(2452%) hue-rotate(1deg) brightness(102%) contrast(105%)'); setDonutData(conversion(schools[6])[0]); setConversionRate(conversion(schools[6])[1]); setBarData(barGraphCreator(barGraphTime, schools[6])); setTableData(dropoffsTable(schools[6], tableSize))}}>Princeton</li>
                        <li class="dropdown-item" onClick={() => { setSchool(schools[7]); setSchoolColor("#011F5B"); setLogoFilter('invert(10%) sepia(73%) saturate(2442%) hue-rotate(211deg) brightness(96%) contrast(108%)'); setDonutData(conversion(schools[7])[0]); setConversionRate(conversion(schools[7])[1]); setBarData(barGraphCreator(barGraphTime, schools[7])); setTableData(dropoffsTable(schools[7], tableSize))}}>UPenn</li>
                        <li class="dropdown-item" onClick={() => { setSchool(schools[8]); setSchoolColor("#00356B"); setLogoFilter('invert(12%) sepia(37%) saturate(5628%) hue-rotate(197deg) brightness(96%) contrast(101%)'); setDonutData(conversion(schools[8])[0]); setConversionRate(conversion(schools[8])[1]); setBarData(barGraphCreator(barGraphTime, schools[8])); setTableData(dropoffsTable(schools[8], tableSize))}}>Yale</li>
                    </ul>
                </div>
            </div>
            <hr style={{ backgroundColor: schoolColor, height: '4px' }}></hr>
            <div className="Revenue Chart" style={{ paddingInlineStart: '25px'}}>
                <h4 style={{ textAlign: 'center', color: schoolColor }}> Revenue Chart </h4>
                <div class="dropdown" style={{paddingInlineEnd: '70px' ,display: 'flex', justifyContent: 'flex-end' }}>
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" 
                        style={{ backgroundColor: schoolColor}}>
                        {barGraphTime}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li class="dropdown-item" onClick={() => { setBarGraphTime(barTime[0]); setBarData(barGraphCreator(barTime[0], school))}}> This year </li>
                        <li class="dropdown-item" onClick={() => { setBarGraphTime(barTime[1]); setBarData(barGraphCreator(barTime[1], school))}}> This month </li>
                        <li class="dropdown-item" onClick={() => { setBarGraphTime(barTime[2]); setBarData(barGraphCreator(barTime[2], school))}}> Last 3 months </li>
                        <li class="dropdown-item" onClick={() => { setBarGraphTime(barTime[3]); setBarData(barGraphCreator(barTime[3], school))}}> Next 3 months </li>
                    </ul>
                </div>
                <BarChart name="Revenue Chart" data={barData} style={{}}>
                    <YAxis axisLabel={(value) =>`$ ${value}`}/>
                </BarChart>
            </div>
            <hr style={{ backgroundColor: schoolColor, height: '4px' }}></hr>
            <div className="Conversion Rate" style={{ paddingInlineStart: '25px' }}>
                <h4 style={{ textAlign: 'center', color: schoolColor }}> Conversion Rate: {conversionRate}%</h4>
                <PieChart name= 'Conversion Chart' data={donutData} donut color={donutColor}/>
            </div>
            <hr style={{ backgroundColor: schoolColor, height: '4px' }}></hr>
            <div className="Upcoming Dropoffs" style={{ paddingInlineStart: '25px'}}>
                <h4 style={{ textAlign: 'center', color: schoolColor}}> Upcoming Dropoffs </h4>
                <br />
                <br />
                <Table
                    height={500}
                    data={tableData}
                >
                    <Column width={491}>
                        <HeaderCell style={{ color: schoolColor, fontSize: '20px'}}><b>Date</b></HeaderCell>
                        <Cell dataKey="date" />
                    </Column>
                    <Column width={491}>
                        <HeaderCell style={{ color: schoolColor, fontSize: '20px' }}><b>Customers</b></HeaderCell>
                        <Cell dataKey="numberOfCustomers" />
                    </Column>
                    <Column width={491}>
                        <HeaderCell style={{ color: schoolColor, fontSize: '20px' }}><b>Items</b></HeaderCell>
                        <Cell dataKey="numberOfItems" />
                    </Column>
                </Table>
            </div>
        </div>
    );
}

export default App;
