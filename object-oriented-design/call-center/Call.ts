import { EmployeeRank } from "./Employee";

/**
 * Call
 *
 * A class fo representing call instance
 */
enum CallStatus {
    waiting,
    inProgress,
    declined,
    done,
};

export class Call {
    private state: CallStatus;
    private rank: EmployeeRank;

    constructor() {
        this.state = CallStatus.waiting;
        this.rank = EmployeeRank.respondent;
    }

    asInProgress() {
        this.state = CallStatus.inProgress;
    }

    asDone() {
        this.state = CallStatus.done;
    }

    asDeclined() {
        this.state = CallStatus.declined;
    }

    getRank() {
        return this.rank;
    }

    updateRank() {
        this.rank++;
    }
}
