const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };

const logData = console.log;
displayData(alert, logData, "I like to party");

