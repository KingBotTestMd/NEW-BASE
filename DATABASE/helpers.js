function successfullMessage(msg) {
    return "✅ *KING-X*:  ```" + msg + "```"
}

function errorMessage(msg) {
    return "🛑 *KING-X*:  ```" + msg + "```"
}

function infoMessage(msg) {
    return "⏺️ *KING-X*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
