import { Action } from '@ngrx/store';

export interface AppState {
    message: string;
    count: number;
}

export function simpleReducer(state = { message: 'Hello World', count: 0 }, action: Action): AppState {
    console.log(action.type, state);

    switch (action.type) {
        case 'SPANISH': {
            return {
                ...state,
                message: 'Hola Mundo',
            };
        }
        case 'JAPANESE': {
            return {
                ...state,
                message: 'こんにちは世界',
            };
        }
        case 'INCREMENT': {
            return {
                ...state,
                count: state.count + 1
            };
        }
        case 'DECREMENT': {
            return {
                ...state,
                count: state.count - 1
            };
        }
    }

    return state;
}
