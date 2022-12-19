"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = exports.RED = void 0;
class Node {
    constructor(config) {
        exports.RED.nodes.createNode(this, config);
    }
    static registerType(red, type, opts) {
        exports.RED = red;
        exports.RED.nodes.registerType(type, this.prototype.constructor, opts);
    }
}
exports.Node = Node;

//# sourceMappingURL=node.js.map
