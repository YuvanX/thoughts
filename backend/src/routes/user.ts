import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signinInput, signupInput, updateBlog, updateUser } from "@abhivignesh/thoughts-common";
import authMiddleware from "../middleware";

const user = new Hono<{
	Bindings: {
		DATABASE_URL: string,
        JWT_SECRET: string,
	}
    Variables : {
		id: string
	}
}>();
user.post('/signup', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL ,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const { success } = signupInput.safeParse(body);
    if(!success) {
        c.status(411)
        return c.json({
            message: "Invalid inputs"
        })
    }

    
    const userExists = await prisma.user.findFirst({
        where: {
            email: body.email
        }
    })
    if(userExists) {
         c.status(401)
         return c.body("User with this email already exists")
    }
    const user = await prisma.user.create({
        data: {
            email: body.email,
            name: body.name,
            password: body.password
        }
    })
    const token = await sign({
        id: user.id
    }, c.env.JWT_SECRET)

    return c.json({
        token,
        email: user.email,
        name: user.name,
        message: "User created successfully"
    })
})

user.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if(!success) {
        c.status(411)
        return c.json({
            message: "Invalid inputs"
        })
    }
    
    const user = await prisma.user.findUnique({
        where: {
           email: body.email,
           password: body.password
        }
    })
    if(!user) {
        c.status(411)
        return c.text("Invalid user")
    }

    const token = await sign({id: user.id}, c.env.JWT_SECRET);
    return c.json({
        token,
        email: user.email,
        name: user.name
    })
    
})

user.post("/settings", authMiddleware, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = updateUser.safeParse(body);
    if(!success) {
        c.status(411)
        return c.json({
            message: "invalid inputs"
        })
    }
    const updateuser = await prisma.user.update({
        where : {
            id: c.get('id')
        },
        data : {
            name : body?.name,
            password: body?.password
        }
    })

    return c.json({
        updateuser,
        message: "User Updated"
    })
})

export default user