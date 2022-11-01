"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
class IpControlRequestException extends Error {
    /**
     * https://pro-bravia.sony.net/develop/integrate/rest-api/spec/errorcode-list/index.html
     */
    code;
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}
const request = async (host, psk, serviceName, payload) => {
    const body = JSON.stringify(payload);
    const headers = {
        'Content-Length': Buffer.byteLength(body, 'utf-8').toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };
    if (typeof psk !== 'undefined') {
        headers['X-Auth-PSK'] = psk;
    }
    const response = await fetch(`http://${host}/sony/${serviceName}`, {
        cache: 'no-cache',
        method: 'POST',
        headers,
        body,
    });
    const reply = await response.json();
    if (reply.error) {
        throw new IpControlRequestException(...reply.error);
    }
    return reply.result[0];
};
exports.request = request;
