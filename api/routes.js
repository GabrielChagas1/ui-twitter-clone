import Router from '@koa/router';
import { PrismaClient } from '@prisma/client';

export const router = new Router();

const tweets = [];

router.get('/tweets', ctx => {
    ctx.body = ctx.query.username
        ? tweets.filter(tweet => tweet.username === ctx.query.username) 
        : tweets;
});

router.post('/tweets', ctx => {
    const tweet = {
        id: tweets.length + 1,
        ...ctx.request.body
    };
    tweets.push(tweet)
    ctx.body = tweet;
});
