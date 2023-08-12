import { Call } from "./Call";
import { CallHandler } from "./CallHandler";

/**
 * Employee
 *
 * A parent class for all employee types.
 */
enum EmployeeState {
    free,
    busy,
};

export enum EmployeeRank {
    respondent,
    manager,
    director
};

export class Employee {
    private name: String;
    private state: EmployeeState;
    private callHandler: CallHandler;
    private currentCall: Call;
    private rank: EmployeeRank;

    constructor(name: String, callHandler: CallHandler, rank: EmployeeRank) {
        this.name = name;
        this.callHandler = callHandler;
        this.rank = rank;
    }

    isFree() {
        return this.state == EmployeeState.free;
    }

    receiveCall(call: Call) {
        this.state = EmployeeState.busy;
        this.currentCall = call;
    }

    endCall() {
        this.callHandler.setCallAsDone(this, this.currentCall);
    }

    setAsFree() {
        this.state = EmployeeState.free;
        this.currentCall = null;
    }

    getRank(): EmployeeRank {
        return this.rank;
    }

    getName(): String {
        return this.name;
    }

    escalateCall() {
        this.callHandler.escalateCall(this, this.currentCall);
    }
}
