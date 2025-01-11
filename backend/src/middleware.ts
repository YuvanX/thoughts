import { createMiddleware } from "hono/factory";
import {  verify } from "hono/jwt";

const authMiddleware = createMiddleware(async (c, next) => {
    const tokenInfo = c.req.header('Authorization');
    if(!tokenInfo) {
        return c.json({ message: "Token not provided" }, 401);
    }

    const token = tokenInfo?.split(' ')[1];
    try {   
        const  payload  = await verify(token, c.env.JWT_SECRET);
        if(!payload) {
            c.status(403)
            return c.json({
                message: "unauthorised"
            })
        }
        c.set('id', payload.id)
        await next()
    } catch(e) {
        return c.json({
            message: "Invalid token"
        })
    }

})

export default authMiddleware;
