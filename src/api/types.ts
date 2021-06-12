type APIInnerMessage = {
    id: string
    message: string
}
export const API_ERROR_RESPONSE = 'API_ERROR_RESPONSE'
type APIMessage = {
    messages: APIInnerMessage[]
}
export type APIErrorResponse = {
    type: typeof API_ERROR_RESPONSE
    statusCode: number
    error: string
    message: APIMessage[] | string
    data: APIMessage[]
}
type ImageFormat = {
    height: number
    width: number
    ext: string // '.jpeg'
    hash: string
    mime: string
    size: number
    url: string
    path?: any
}
export type Media = {
    id: number
    name: string
    alternativeText: string
    caption: string
    width: number
    height: string
    hash: string
    ext: string // .gif .txt .mov etc
    mime: string // image/gif
    size: number // kb
    url: string
    previewUrl?: string
    formats?: {
        thumbnail: ImageFormat
        small: ImageFormat
        medium: ImageFormat
    }
    provider: string
    provider_metadata?: any
    created_at: string
    updated_at: string
    dated_at: string
}
