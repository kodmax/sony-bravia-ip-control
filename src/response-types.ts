interface PowerStatus {
    status: "standby" | "active"
}

interface SystemInformation {
    /**
     * Device category. The following values are currently defined.
     */
    product: string

    /**
     * Language code of the device, represented by ISO-639 alpha-3. The default value is "", and if the server device cannot send this parameter, an empty string is returned.
     */
    language?: string

    /**
     * Name of the product. This must be unique within each product. The actual value is defined by each product and is outside the scope of this document.
     */
    model: string

    /**
     * Serial ID assigned to each device. The default value is "", and if the server device cannot send this parameter, an empty string is returned.The actual value is defined by each product and outside the scope of this document.
     */
    serial?: string

    /**
     * Ethernet MAC address. Default value is "" and in case server device can not send this parameter, empty string is returned.
     */
    macAddr?: string

    /**
     * Product name. This must be unique within each category.
     */
    name: string

    /**
     * Represents the rough age and season of the device in the market. The parameter is composed of "[X].[Y].[Z]", where [X], [Y], and [Z] are strings each representing an integer, concatenated with periods "." in between.
     * This must be unique within each category. The default value is, "" and if the server device cannot send this parameter, an empty string is returned.
     */
    generation: string
}

interface ExternalInputsStatus {
    /**
     * URI to identify the content. Refer to [https://pro-bravia.sony.net/develop/integrate/rest-api/spec/resource-uri-list/index.html] to learn the URI structure in detail.
     * (ex) "extInput:hdmi?port=2"
     */
    uri: string

    /**
     * Name of input.
     */
    title: string

    /**
     * Input connection status.
     */
    connection: boolean

    /**
     * Label name of the input set by the user.
     */
    label: string

    /**
     * Icon type to give a hint to the application which icon to show for the user. The type is indicated by a "meta" URI format and implies that the developers of the client side should prepare some actual images with respect to the meta URI. The following meta URIs are defined.
     */
    icon: "meta:composite" | "meta:svideo" | "meta:composite_componentd" | "meta:component" | "meta:componentd" |
    "meta:scart" |
    "meta:hdmi" |
    "meta:dsub15" |
    "meta:tuner" |
    "meta:tape" |
    "meta:disc" |
    "meta:complex" |
    "meta:avamp" |
    "meta:hometheater" |
    "meta:game" |
    "meta:camcoder" |
    "meta:digitalcamera" |
    "meta:pc" |
    "meta:tv" |
    "meta:audiosystem" |
    "meta:recordingdevice" |
    "meta:playbackdevice" |
    "meta:tunerdevice" |
    "meta:wifidisplay"

    /**
     * Input signal status.
     */
    status?: "true" | "false"
}

interface PlayingContentInfo {
    /**
     * URI to identify the content. Refer to here to learn the URI structure in detail.
     * (ex) "extInput:hdmi?port=1"
     */
    uri: string

    /**
     * Source of the content.
     */
    source: string

    /**
     * Title of this content to be recognized by the user.
     * (ex) "HDMI 1"
     */
    title: string
}

export type { PowerStatus, SystemInformation, ExternalInputsStatus, PlayingContentInfo }