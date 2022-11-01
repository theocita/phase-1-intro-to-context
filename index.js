// Your code here
function createEmployeeRecord(employee){

    return{
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3], 
        timeInEvents: [],
        timeOutEvents: [],
    
    }
}


function createEmployeeRecords(employees){
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(employee, dateStamp){
    let [date, hour] = dateStamp.split(" ") 
    employee.timeInEvents.push({ 
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    })    
  return employee
};

function createTimeOutEvent(employee, dateStamp){
    let [date, hour] = dateStamp.split(" ") 
    employee.timeOutEvents.push({ 
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    })    
  return employee
}

function hoursWorkedOnDate(employee, date){
const timeIn = employee.timeInEvents.find(event => event.date === date)
const timeOut = employee.timeOutEvents.find(event => event.date === date)
return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(employee, date){
    const hours = hoursWorkedOnDate(employee, date)
    return employee.payPerHour * hours
}

function allWagesFor(employee){
   return 
}

function calculatePayroll(employee){
    return employee.map(employee => allWagesFor(employee)).reduce((currentValue, total) => currentValue + total)
}