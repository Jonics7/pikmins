import { createContext } from 'react';

export interface UserContextType {
    userId: string;
    openProfile: () => void;
}

const defaultValue: UserContextType = {
    userId: '',
    openProfile: () => {},
};

export const UserContext = createContext<UserContextType>(defaultValue);
