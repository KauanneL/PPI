"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const num = 17;
let primo = true;
let divisor = num - 1;
while (primo && divisor > 1) {
    if (num % divisor === 0) {
        primo = false;
    }
    else {
        divisor = divisor - 1;
    }
}
if (primo) {
    console.log(`O número ${num} é primo`);
}
else {
    console.log(`O número ${num} não é primo`);
}
//# sourceMappingURL=q2.js.map