"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpControl = void 0;
const request_1 = require("./request");
class IpControl {
    host;
    preSharedKey;
    constructor(host, preSharedKey) {
        this.host = host;
        this.preSharedKey = preSharedKey;
    }
    async getPowerStatus() {
        return (0, request_1.request)(this.host, this.preSharedKey, 'system', {
            method: "getPowerStatus",
            params: [],
            version: "1.0",
            id: 50,
        });
    }
    async setPowerStatus(status) {
        return (0, request_1.request)(this.host, this.preSharedKey, 'system', {
            method: "setPowerStatus",
            params: [{
                    'status': status == "active"
                }],
            version: "1.0",
            id: 55,
        });
    }
    async getSystemInformation() {
        return (0, request_1.request)(this.host, this.preSharedKey, 'system', {
            method: "getSystemInformation",
            params: [],
            version: "1.0",
            id: 33,
        });
    }
    async getCurrentExternalInputsStatus() {
        return (0, request_1.request)(this.host, this.preSharedKey, 'avContent', {
            method: "getCurrentExternalInputsStatus",
            params: [],
            version: "1.1",
            id: 105,
        });
    }
    async getPlayingContentInfo() {
        return (0, request_1.request)(this.host, this.preSharedKey, 'avContent', {
            method: "getPlayingContentInfo",
            params: [],
            version: "1.0",
            id: 103,
        });
    }
}
exports.IpControl = IpControl;
