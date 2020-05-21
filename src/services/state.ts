export class StateService {
    static AVAILABLE = 1;
    static UNAVAILABLE = 2;
    static WANKING = 3;
    static TENTATIVE = 4;

    private _state = 1;

    set state(state: number) {
        this._state = state;
    }

    get state(): number {
        return this._state;
    }
}

export default new StateService();