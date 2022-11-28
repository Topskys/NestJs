"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
(0, rxjs_1.interval)(500).pipe((0, rxjs_1.take)(5)).subscribe((e) => {
    console.log(e);
});
(0, rxjs_1.of)(1, 2, 434, 5, 636546, 31233, 35, 2, 5, 2, 6).pipe((0, rxjs_1.take)(5)).subscribe((e) => {
    console.log(e);
});
//# sourceMappingURL=index.js.map