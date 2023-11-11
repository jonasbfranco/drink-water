import { useState } from "react";


interface IUserPersistState {}



export function usePersistState(defaultValue: number): [number, React.Dispatch<React.SetStateAction<numer>>] {
    const [localState, setLocalState] = useState<number>(defaultValue);

    return [ localState, setLocalState ];
}