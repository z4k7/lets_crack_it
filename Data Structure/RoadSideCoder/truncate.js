const truncate = (str, maxLength) => {
    if (str.length > maxLength) {
        return str.slice(0,maxLength)+'...'
    }
    return str
}

const str = 'Subscribe'

const result = truncate(str, 4)

console.log(result);