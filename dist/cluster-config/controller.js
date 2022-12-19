"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClusterConfigController = void 0;
class ClusterConfigController {
    constructor(node, RED, config) {
        this.node = node;
        this.clusterName = config.clusterName;
    }
}
exports.ClusterConfigController = ClusterConfigController;
// loaded on startup
function default_1(RED) {
    RED.nodes.registerType("cluster-config", function (config) {
        // called whenever a new instance of the node is created
        RED.nodes.createNode(this, config);
        new ClusterConfigController(this, RED, config);
    });
}
exports.default = default_1;

//# sourceMappingURL=controller.js.map
