function successfullMessage(msg) {
    return "β *KING-X*:  ```" + msg + "```"
}

function errorMessage(msg) {
    return "π *KING-X*:  ```" + msg + "```"
}

function infoMessage(msg) {
    return "βΊοΈ *KING-X*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
