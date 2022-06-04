import Router from '@koa/router';
import { PrismaClient } from '@prisma/client';

export const router = new Router();

const prisma = new PrismaClient();


router.get('/tweets', async ctx => {
   const tweets = await prisma.tweet.findMany();
   ctx.body = tweets;
});

router.post('/tweets', ctx => {
    const tweet = {
        id: tweets.length + 1,
        ...ctx.request.body
    };
    tweets.push(tweet)
    ctx.body = tweet;
});
