import { createContext, Dispatch } from "react";
import { IUser } from "../interface/user";

export interface IAppContextState {
    searchInput?: string | null;
    setSearchInput?: Dispatch<string | null>;
    listResult?: IUser[];
    setListResult?: Dispatch<IUser[]>;
    searchHistory?: string[];
    setSearchHistory?: Dispatch<string[]>;
    reset?: () => void;
}

export const appContextState: IAppContextState = {
    setListResult: () => {},
    setSearchInput: () => {},
    reset: () => {},
};

export const AppContext = createContext(appContextState);
