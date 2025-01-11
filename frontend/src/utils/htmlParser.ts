export const stripHtml = (html :string) => {
    let result =  html.replace(/<[^>]+>/g, "")
    return result.slice(0,150)
}
