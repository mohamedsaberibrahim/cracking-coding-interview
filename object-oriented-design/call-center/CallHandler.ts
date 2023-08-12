/**
 * CallHandler
 *
 * A handler for the calls that handle call assigning &amp; escalation &amp; managing employees.
 */

import { Call } from "./Call";
import { Employee } from "./Employee";

export class CallHandler {
    employees: Employee[];
    constructor(employees: Employee[]) {
        this.employees = employees;
    }

    dispatchCall(call: Call) {
        const employee: Employee = this.selectAvailableEmployee(call);
        if (employee) {
            this.assignCallToEmployee(call, employee);
        } else {
            call.asDeclined();
            throw new Error('No available employee!');
        }
    }

    escalateCall(employee: Employee, call: Call) {
        call.updateRank();
        this.setEmployeeAsFree(employee);
        this.dispatchCall(call);
    }

    setCallAsDone(employee: Employee, call: Call) {
        this.setEmployeeAsFree(employee);
        call.asDone();
    }

    private selectAvailableEmployee(call: Call) {
        const employee = this.selectEmployeeByCallRank(call);
        if (employee) return employee;
        return null;
    }

    private selectEmployeeByCallRank(call: Call): Employee | null {
        for(let employee of this.employees) {
            if(employee.isFree() && employee.getRank() == call.getRank()) {
                return employee;
            }
        }
        return null;
    }

    private assignCallToEmployee(call: Call, employee: Employee) {
        call.asInProgress();
        employee.receiveCall(call);
    }

    private setEmployeeAsFree(employee: Employee) {
        const employeeIndex = this.employees.findIndex(empl => empl.getName() == employee.getName());
        this.employees[employeeIndex].setAsFree();
    }
}
