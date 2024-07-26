




import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono';
import { verify } from 'hono/jwt'
import { updatePostInput, createPostInput } from 'sahilkumar_common_file';


export const postRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: {
        userId: string;
    }
}>();



postRouter.use("/*", async (c, next) => {


    try {
        const auth = c.req.header("Authorization") || "";
        const user = await verify(auth, c.env.JWT_SECRET);
        if (user) {
            //@ts-ignore
            c.set("userId", user.id);
            await next();
        }
    }
    catch (err) {
        console.log(err);
        return c.json({ mess: "sg" })
    }

})



postRouter.get("/bulk", async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());



    try {
        const posts = await prisma.post.findMany({
            select:{
                title : true,
                content : true,
                id : true,
                author : {
                    select :{
                        name :true
                    }
                }
            }
        });
        return c.json({ posts })
    }
    catch (e) {
        return c.json({ message: "something went wrong" })
    }
})

postRouter.get('/:id', async (c) => {
    //const body = await c.req.json();
    const id = await c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());




    try {
        const posts = await prisma.post.findUnique({
            where: {
                id: id,
            },
            select:{
                title: true,
                content: true,
                author: {
                    select:{
                        name: true,
                    }
                },
                id:true

            }
        }
        );
        return c.json(posts)
    }
    catch (e) {
        c.json({ message: "something went wrong" })
    }
})

postRouter.post('/', async (c) => {
    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const userid = c.get('userId');
    const { success } = createPostInput.safeParse(body);
    if (!success) {
        c.status(400);
        return c.json({ error: "invalid input" });
    }


    try {
        const posts = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userid
            }
        }
        );
        return c.json(posts.id)
    }
    catch (e) {
        console.log(e);
        c.json({ message: "sahil this wrong" })
    }
})

postRouter.put('/', async (c) => {
    const body = await c.req.json();

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const { success } = updatePostInput.safeParse(body);
    if (!success) {
        c.status(400);
        return c.json({ error: "invalid input" });
    }



    try {
        const posts = await prisma.post.update({
            where: {
                id: body.id,
            },

            data: {
                title: body.title,
                content: body.content,

            }
        }
        );
        return c.json({ mess: "success" })
    }
    catch (e) {
        return c.json({ message: "something went wrong" })
    }
})