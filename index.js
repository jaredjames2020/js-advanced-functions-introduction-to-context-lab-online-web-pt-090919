// Your code here
const createEmployeeRecord = function(payroll) {
    payroll.firstName = payroll[0];
    payroll.familyName = payroll[1];
    payroll.title = payroll[2];
    payroll.payPerHour = payroll[3];
    payroll.timeInEvents = [];
    payroll.timeOutEvents = [];
    return payroll;
};

const createEmployeeRecords = function(records){
  return records.map(rec => createEmployeeRecord(rec));
};

function createTimeInEvent(){
  let time = Time.now
  
}