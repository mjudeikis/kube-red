import { NodeDef, NodeAPI, Node, NodeMessageInFlow } from "node-red";
import { ClusterConfigController } from "../cluster-config/controller";

export interface LowerCaseProperties extends NodeDef {
    prefix: string;
    cluster: string;
}

class LowerCaseController  {
    node: Node;
    cluster: string;
    prefix: string;

    configNode: any;

    constructor(node: Node, RED: NodeAPI, config: LowerCaseProperties) {
        node.on('input', this.onInput.bind(this));
        this.node = node;
        this.prefix = config.prefix;
        this.cluster = config.cluster;

        this.configNode = RED.nodes.getNode(this.cluster)

    }

    onInput(msg: NodeMessageInFlow) {
        let nn = this.configNode as ClusterConfigController;
        console.log(nn.clusterName);
        if (typeof msg.payload === 'string') {
            msg.payload = this.prefix + msg.payload.toLowerCase();
            this.node.send(msg);
        }
    }
}


// loaded on startup
export default function (RED: NodeAPI) {
    RED.nodes.registerType("lower-case", function(config: LowerCaseProperties) {
        // called whenever a new instance of the node is created
        RED.nodes.createNode(this, config);
        new LowerCaseController(this, RED, config);
    });
}
