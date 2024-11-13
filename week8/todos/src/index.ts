import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'

const app = new Hono()

// Our database
const todos = [
  {
    id: 1,
    description: "Turn in homework",
    isComplete: false
  }
]

app.use("/*", serveStatic({

}))

app.get('/api/todos', (c) => {
  console.log("fetcg abd retyrbubg todos")
  return c.json(todos)
})

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
