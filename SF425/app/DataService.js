﻿
SF425App.factory('DataService',
    function () {
        var getEmployee = function (id) {
            if (id == 123) {
                return {
                    id: 123,
                    fullName: "Milton Waddams",
                    notes: "The ideal employee.  Just don't touch his red stapler.",
                    department: "Administration",
                    dateHired: "July 11 2014",
                    breakTime: "July 11 2014 3:00 PM",
                    perkCar: true,
                    perkStock: false,
                    perkSixWeeks: true,
                    payrollType: "none"
                };
            }
            return undefined;
        };

        var insertEmployee = function (newEmployee) {
            return true;
        };

        var updateEmployee = function (employee) {
            return true;
        };

        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee
        };
    });

// User Service
SF425App.factory('UserService',
    function () {

        var currUser = { Id: 0, fistName: '', lastName: '', role: '' }
        var allUsers = [{ Id: 1, fistName: 'Jeffrey', lastName: 'Baker', role: 'User' },
        { Id: 1, fistName: 'Jeffrey', lastName: 'Baker', role: 'Admin' },
        { Id: 1, fistName: 'Jeffrey', lastName: 'Baker', role: 'Super' }];

        return {
            currUser: currUser,
            allUsers: allUsers
        };
                    
});



