module.exports = function check(str, bracketsConfig) {
    let input = [...str]
    let brackets = bracketsConfig.flat()
    let stack = []
    for (let bracket of input) {
        let bracketsIndex = brackets.indexOf(bracket)
        if (brackets[bracketsIndex] === brackets[bracketsIndex + 1]) {
            if (stack.indexOf(bracketsIndex + 1) !== -1) {
                stack.pop()
                continue
            }
        }
        if (bracketsIndex % 2 === 0) {
            stack.push(bracketsIndex + 1)
        } else {
            if (stack.pop() !== bracketsIndex) {

                return false;
            }
        }
    }

    return stack.length === 0
}

