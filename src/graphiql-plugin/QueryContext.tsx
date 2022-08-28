import {
    createContext,
    Dispatch,
    SetStateAction,
} from 'react';

export type QueryContextType = {
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
};

export const QueryContext = createContext<QueryContextType>({
    query: '',
    setQuery: () => { },
});
