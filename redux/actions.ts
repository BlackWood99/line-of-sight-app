import { CHANGE_VALUE } from "./constants";

export const changeStateValue = (name: string, value: number) => {
    return {
        type: CHANGE_VALUE,
        name,
        value
    }
}