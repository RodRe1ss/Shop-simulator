const { nanoid } = require("nanoid");

const getId = (prefix) => {
    return `${prefix}:${nanoid()}`
}

module.exports = getId