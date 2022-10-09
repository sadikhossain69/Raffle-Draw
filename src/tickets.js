const Ticket = require('./Ticket')
const { readFile, writeFile } = require('./utils')

const tickets = Symbol('tickets')

class TicketCollection {
    constructor() {
        this[tickets] = []
    }

    /**
     * The function creates a new ticket object and pushes it into the tickets array.
     * @param username - The username of the person who created the ticket.
     * @param price - The price of the ticket
     * @returns The tickets array.
     */
    create(username, price) {
        const ticket = new Ticket(username, price)
        this[tickets].push = ticket
        return tickets
    }

    /**
     * It returns the value of the tickets property of the object that the function is a method of.
     * @returns The tickets array.
     */
    find() {
        return this[tickets]
    }

    /**
     * It returns the ticket with the given id
     * @param id - The id of the ticket you want to find
     * @returns The ticket object with the matching id.
     */
    findTicketById(id) {
        const ticket =  this[tickets].find(
            /**
             * @param {Ticket} ticket
             */
            (ticket) => ticket.id === id
        )

        return ticket
    }

}

const collection = new TicketCollection()
