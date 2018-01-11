export function filter(string) {
    return string.replace(/<script.*?>.*?<\/script>/ig, '')
}