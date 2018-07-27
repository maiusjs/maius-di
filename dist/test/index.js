"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const maius_di_1 = require("../src/maius-di");
let TestService = class TestService {
    testService() {
        console.log('testService');
    }
};
TestService = tslib_1.__decorate([
    maius_di_1.Service
], TestService);
class TestController {
    testController() {
        this.testService.testService();
    }
}
tslib_1.__decorate([
    maius_di_1.Inject(),
    tslib_1.__metadata("design:type", TestService)
], TestController.prototype, "testService", void 0);
const testController = new TestController();
testController.testController();
testController.testController();
//# sourceMappingURL=index.js.map