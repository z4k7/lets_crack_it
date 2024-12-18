let result = ''

for (let i = 1; i <= 5; i++){
    let k = i
    for (let j = 1; j <= 9; j++){
        if (j >= 6 - i && j <= 4 + i) {
            result += `${k} `
            j <=4 ? k-- : k++
        } else {
            result += '  '
        }
    }
    result += '\n'
}

console.log(result)