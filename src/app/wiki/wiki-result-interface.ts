export interface Result {
    query: {
        search: {
            title: string,
            pageid: number,
            wordcount: number,
            snippet: string
        }[]
    }
}