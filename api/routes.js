import Router from '@koa/router';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const router = new Router();

const prisma = new PrismaClient();


router.get('/tweets', async ctx => {
   const tweets = await prisma.tweet.findMany();
   ctx.body = tweets;
});

router.post('/tweets', async ctx => {
    const tweet = {
        userId: 'cl3zaee930032s0trwqutv378',
        text: ctx.request.body.text
    }

    const doc = await prisma.tweet.create({
        data: tweet
    });

    ctx.body = doc;
});

router.post('/signup', async ctx => {

    const saltRounds = 10;
    const password = bcrypt.hashSync(ctx.request.body.password, saltRounds);

    try {
        const user = await prisma.user.create({
            data: {
                name: ctx.request.body.name,
                username: ctx.request.body.username,
                email: ctx.request.body.email,
                password
            }
        })
    
        ctx.body = {
            name: user.name,
            username: user.username,
            email: user.email
        }
    } catch (error) {
        if(error.meta && !error.meta.target){
            ctx.status = 422
            ctx.body = "Email ou nome de usuário já existe."
            return
        }

        ctx.status = 500
        ctx.body = 'Internal error'
    }
})

