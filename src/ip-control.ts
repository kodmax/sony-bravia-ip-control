import { request } from "./request"
import { 
    PowerStatus, 
    SystemInformation,
    ExternalInputsStatus,
    PlayingContentInfo
} from "./response-types"

class IpControl {
    public constructor(private host: string, private preSharedKey?: string) {

    }

    public async getPowerStatus(): Promise<PowerStatus> {
        return request<PowerStatus>(this.host, this.preSharedKey, 'system', {
            method: "getPowerStatus",
            params: [],
            version: "1.0",
            id: 50,
        })
    }

    public async setPowerStatus(status: PowerStatus["status"]): Promise<void> {
        return request<void>(this.host, this.preSharedKey, 'system', {
            method: "setPowerStatus",
            params: [{
                'status': status == "active"
            }],
            version: "1.0",
            id: 55,
        })
    }

    public async getSystemInformation(): Promise<SystemInformation> {
        return request<SystemInformation>(this.host, this.preSharedKey, 'system', {
            method: "getSystemInformation",
            params: [],
            version: "1.0",
            id: 33,
        })
    }

    public async getCurrentExternalInputsStatus(): Promise<ExternalInputsStatus[]> {
        return request<ExternalInputsStatus[]>(this.host, this.preSharedKey, 'avContent', {
            method: "getCurrentExternalInputsStatus",
            params: [],
            version: "1.1",
            id: 105,
        })
    }

    public async getPlayingContentInfo(): Promise<PlayingContentInfo> {
        return request<PlayingContentInfo>(this.host, this.preSharedKey, 'avContent', {
            method: "getPlayingContentInfo",
            params: [],
            version: "1.0",
            id: 103,
        })
    }
}

export { IpControl }