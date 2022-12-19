import { NodeDef, NodeAPI, Node, NodeMessageInFlow } from "node-red";


export interface ClusterConfigProperties extends NodeDef {
    clusterName: string;
}

export class ClusterConfigController {
    node: Node;
    clusterName: string;

    constructor(node: Node, RED: NodeAPI, config: ClusterConfigProperties) {
        this.node = node;
        this.clusterName = config.clusterName;
    }
}

// loaded on startup
export default function (RED: NodeAPI) {
    RED.nodes.registerType("cluster-config", function(config: ClusterConfigProperties) {
        // called whenever a new instance of the node is created
        RED.nodes.createNode(this, config);
        new ClusterConfigController(this, RED, config);
    });
}
