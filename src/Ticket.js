const shortId = require('shortid')

class Ticket {
    /**
     * The constructor function is a special function that is used to create and initialize an object
     * created within a class.
     * @param username - The username of the user who created the order
     * @param price - The price of the item
     */
    constructor (username, price) {
        this.id = shortId.generate()
        this.username = username
        this.price = price
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}

module.exports = Ticket