"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_red_node_test_helper_1 = __importDefault(require("node-red-node-test-helper"));
const node_test_1 = require("node:test");
const node_1 = __importDefault(require("./lower-case/node"));
(0, node_test_1.describe)("Node", () => {
    //class Foo extends Node {
    //    constructor(config: NodeDef) {
    //        super(config);
    //   }
    // }
    (0, node_test_1.it)("should register", () => {
        var flow = [
            { id: "n1", type: "lower-case", name: "lc" },
            { id: "n2", type: "foo", name: "foo" },
        ];
        node_red_node_test_helper_1.default.load((RED) => {
            // Foo.registerType(RED, "foo");
            (0, node_1.default)(RED);
        }, flow, () => {
            console.log(node_red_node_test_helper_1.default.getNode("n1"));
            console.log(node_red_node_test_helper_1.default.getNode("n2"));
        });
    });
});

//# sourceMappingURL=node.test.js.map
