import { sumValues } from "./sum";

export function asyncAdd(values) {
    return new Promise(callback =>
        setTimeout(() => {
            let total = sumValues(values);
            console.log(`Inside Promise --- Async Total: ${total}`);
            callback(total);
        }, 500));
}
