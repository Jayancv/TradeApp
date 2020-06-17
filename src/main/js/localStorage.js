export const loadState = () => {
    try {
        const serialedState = sessionStorage.getItem('state');
        if(serialedState === null){
            return undefined;
        }
        return JSON.parse(serialedState);

    } catch (errr) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('state', serializedState);
    } catch (err) {
        //Error
    }
}