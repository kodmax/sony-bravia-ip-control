type IpControlRequestPayload = {
    method: string
    id: number
    params: any[],
    version: "1.0"
}

type IpControlResponse<T> = {
    error?: [number, string]
    result: [T]
}

class IpControlRequestException extends Error {
    /**
     * https://pro-bravia.sony.net/develop/integrate/rest-api/spec/errorcode-list/index.html
     */
    public code: number

    public constructor (code: number, message: string) {
        super(message)
        
        this.code = code
    }
}

const request = async <T>(host: string, psk: string | undefined, serviceName: string, payload: IpControlRequestPayload): Promise<T> => {
    const body = JSON.stringify(payload)
    const headers: Record<string, string> = { 
        'Content-Length': Buffer.byteLength(body, 'utf-8').toString(),
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

    if (typeof psk !== 'undefined') {
        headers ['X-Auth-PSK'] = psk
    }

    const response = await fetch(`http://${host}/sony/${serviceName}`, {
        cache: 'no-cache',
        method: 'POST',
        headers,
        body,
    })

    const reply = await response.json() as IpControlResponse<T>
    if (reply.error) {
        throw new IpControlRequestException(...reply.error)
    }

    return reply.result [0]
}

export { request }