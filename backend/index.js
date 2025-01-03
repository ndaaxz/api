import { Hono } from "hono"
import axios from "axios"
import { fetchJson } from "../lib/func.js"

const app = new Hono()

app.get("/nsfw-blowjob", async(c) => {
    const result = await fetchJson(`https://waifu.pics/api/nsfw/blowjob`)
    return c.json({
        result,
    })
})
app.get("/nsfw-trap", async(c) => {
    const result = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
    return c.json({
        result,
    })
})
app.get("/nsfw-neko", async(c) => {
    const result = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
    return c.json({
        result,
    })
})
app.get("/nsfw-waifu", async(c) => {
    const result = await fetchJson(`https://waifu.pics/api/nsfw/waifu`)
    return c.json({
        result,
    })
})
app.get("/dark-jokes", async(c) => {
    const result = await fetchJson(`https://v2.jokeapi.dev/joke/Dark`)
    return c.json({
        result
    })
})
app.get("/tiktok", async(c) => {
    const url = c.req.query("url")
    if (!url) return c.json({
        "error":"url mana"
    })
    const json = await fetchJson(`https://tikwm.com/api/?url=${url}`)
    const final = json.data
    return c.json({
        status: 200,
        result: final,
    })
})
app.get("/random-user", async(c) => {
    const json = await fetchJson('https://randomuser.me/api')
return c.json({
    status: 200,
    result: json
})
})
app.get("/mistral", async(c) => {
    let query = c.req.query('query')
    if (!query) { return c.json({"error": "query?"})}
    const json = await axios.get(`https://api.ndaadev.us.kg/api/mistral?query=${query}`)
    const coco = json.data.result
    return c.json({
        status: 200,
        result: coco,
    })
})
app.get("/mistral-large", async(c) => {
    let query = c.req.query('query')
    if (!query) { return c.json({"error": "query?"})}
    const json = await axios.get(`https://api.ndaadev.us.kg/api/mistral-large?query=${query}`)
    const coco = json.data.result
    return c.json({
        status: 200,
        result: coco,
    })
})
app.get("/llama", async (c) => {
    let query = c.req.query('query')
    if (!query) { return c.json({"error": "query?"})}
    const json = await axios.get(`https://api.ndaadev.us.kg/api/llama?query=${query}`)
    const coco = json.data.result
    return c.json({
        status: 200,
        result: coco
    })
})
app.get("/openai", async(c) => {
    let query = c.req.query('query')
    if (!query) { return c.json({"error": "query?"})}
    const json = await axios.get(`https://api.ndaadev.us.kg/api/openai-v2?query=${query}`)
    const cool = json.data.result
    return c.json({
        status: 200,
        result: cool,
    })
})

export default app;