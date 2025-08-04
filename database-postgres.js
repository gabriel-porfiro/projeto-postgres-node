import { randomUUID } from "node:crypto"
import { sql } from "./db.js"

export class DatabasePostgres {
    
    async create(video) {
        const videoId = randomUUID()

        const { title, description, duration } = video

        await sql`insert into videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration} )`

    }

    async list(search) { //Lembrando que o js entende esta função sql como uma função assíncrona
        let videos 

        if (search) { //Query parameters
            videos = await sql`select * from videos where title ilike ${'%' + search + '%'}` //ilike serve para descartar letras maiúsculas e minusculas
        } else {
            videos = await sql`select * from videos`
        }
        
        return videos
    }


    async update(id, video) {
        const { title, description, duration } = video

        await sql`update videos set title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`
    }

    async delete(id) {
        await sql`delete from videos where id = ${id}`
    }

}