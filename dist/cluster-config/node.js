"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RED = void 0;
const node_1 = require("../node");
class ClusterConfig extends node_1.Node {
    constructor(config) {
        super(config);
        this.prefix = config.prefix;
    }
}
// loaded on startup
function default_1(RED) {
    ClusterConfig.registerType(RED, "cluster-config");
}
exports.default = default_1;

//# sourceMappingURL=node.js.map
