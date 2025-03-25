import { asyncAdd } from "./async";

let values = [10, 20, 30, 40, 50];

async function doTask() {
    let total = await asyncAdd(values);
    console.log(`Inside async function --- Main Total: ${total}`);
}
doTask();

console.log("=================Do Equivalent=============")

//following do the same as line 5
asyncAdd(values).then(total => console.log(`Inside then ---- Main Total: ${total}`));
