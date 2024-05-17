const express = require('express')
const app = express()

// Middleware to parse JSON bodies
app.use(express.json())

// Simulated database for events
let events = [
    { id: 1, title: 'Tech Conference', date: '2024-05-25' },
    { id: 2, title: 'Music Festival', date: '2024-06-11' },
    { id: 3, title: 'Art Exhibit', date: '2024-05-25' }
]

// GET all events with filtering
app.get('/events', (req, res) => {
    let { title, date } = req.query
    let filteredEvents = events

    if (title) {
        filteredEvents = filteredEvents.filter(e => e.title.toLowerCase().includes(title.toLowerCase()))
    }
    if (date) {
        filteredEvents = filteredEvents.filter(e => e.date === date)
    }

    res.status(200).json(filteredEvents)
})

// GET a single event by ID
app.get('/events/:id', (req, res) => {
    const event = events.find(e => e.id === parseInt(req.params.id))
    if (!event) return res.status(404).send('Event not found')
    res.status(200).json(event)
})

// POST a new event with validation
app.post('/events', (req, res) => {
    const { title, date } = req.body
    if (!title || !date) return res.status(400).send('Missing title or date')

    const event = {
        id: events.length + 1,
        title,
        date
    }
    events.push(event)
    res.status(201).send(event)
})

// PUT update an existing event
app.put('/events/:id', (req, res) => {
    const event = events.find(e => e.id === parseInt(req.params.id))
    if (!event) return res.status(404).send('Event not found')

    const { title, date } = req.body
    if (title) event.title = title
    if (date) event.date = date
    res.status(200).send(event)
})

// DELETE an event
app.delete('/events/:id', (req, res) => {
    const index = events.findIndex(e => e.id === parseInt(req.params.id))
    if (index === -1) return res.status(404).send('Event not found')

    events.splice(index, 1)
    res.status(204).send()
})

const PORT = 3000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
