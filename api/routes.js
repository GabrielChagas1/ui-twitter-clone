import Router from '@koa/router';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

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
