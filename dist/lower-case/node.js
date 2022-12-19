"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("../node");
class LowerCase extends node_1.Node {
    constructor(RED, config) {
        super(config);
        this.prefix = config.prefix;
        this.cluster = RED.nodes.getNode(config.cluster);
        this.on('input', this.onInput);
    }
    onInput(msg) {
        console.log("msg");
        if (typeof msg.payload === 'string') {
            msg.payload = this.prefix + msg.payload.toLowerCase();
            this.send(msg);
        }
    }
}
// loaded on startup
function default_1(RED) {
    class LowerCaseWrapper extends LowerCase {
        constructor(config) {
            super(RED, config);
        }
    }
    LowerCaseWrapper.registerType(RED, "lower-case");
}
exports.default = default_1;

//# sourceMappingURL=node.js.map
