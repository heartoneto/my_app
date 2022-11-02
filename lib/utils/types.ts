
export interface IResponseType<T> {
    success: boolean,
    data: T | null,
    errorMsg?: string,
}
