const app = require('./src/app')
const request = require("supertest")

describe('Todo Controller', () => {
    test('for Successfully created Todo', async() => {
        const res = await request(app).post("/api/createTodo").send({
            text: "fsdfasddsafasfafa"
        })

        expect(res.status).toEqual(201);
        expect(res.body.message).toBe("todo created")
    });
    test('for Successfully created Todo', async() => {
        const res = await request(app).post("/api/createTodo").send({
            text: "as"
        })

        expect(res.status).toBe(400);
        expect(res.body.message.length).toBeGreaterThan(0)

    });
    test('for Successfully get Todo', async() => {
        const res = await request(app).get("/api/getTodo")
        expect(res.status).toEqual(200);
        
    });
    test('for Successfully updated Todo', async() => {
        const res = await request(app).put("/api/updateTodo/1").send({
            text: "fsdfasddsafasfafa"
        })

        expect(res.status).toEqual(200);
        expect(res.body.message).toBe("todo updated!")
    });
    test('for Successfully deleted Todo', async() => {
        const res = await request(app).delete("/api/deleteTodo/1")

        expect(res.status).toEqual(200);
        expect(res.body.message).toBe("todo deleted!")
    });

});
