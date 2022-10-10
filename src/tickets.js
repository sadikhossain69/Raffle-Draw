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
    findById(id) {
        const ticket = this[tickets].find(
            /**
             * @param {Ticket} ticket
             */
            (ticket) => ticket.id === id
        )

        return ticket
    }


    /**
     * It returns an array of tickets that match the username passed in.
     * @param username - The username of the user to find tickets for.
     * @returns An array of tickets.
     */
    findByUsername(username) {
        const tickets = this[tickets].filter(
            /**
             * @param {Ticket} ticket
             */
            (ticket) => ticket.username === username
        )

        return tickets
    }

    /**
     * update by Id
     * @param {string} ticketId 
     * @param {{username: string, price: number}} ticketBody 
     */
    updateById(ticketId, ticketBody) {
        const ticket = this.findById(ticketId)

        ticket.username = ticketBody.username ?? ticket.username
        ticket.price = ticketBody.price ?? ticket.price

        return ticket
    }

    /**
     * delete by id
     * @param {string} ticketId 
     * @retun {boolean}
     */
    deleteById(ticketId) {
        const index = this[tickets].findIndex(
            /**
             * @param {Ticket} ticket
             */
            (ticket) => ticket.id === ticketId
        )

        if(index === -1) {
            return false
        } else {
            this[tickets].splice(index, 1)
            return true
        }
    }

}

const collection = new TicketCollection()

