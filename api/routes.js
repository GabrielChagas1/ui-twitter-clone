import Router from '@koa/router';

export const router = new Router();

const tweets = [];

router.get('/tweets', ctx => {
    ctx.body = ctx.query.username
        ? tweets.filter(tweet => tweet.username === ctx.query.username) 
        : tweets;
});

