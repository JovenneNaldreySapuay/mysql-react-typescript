import * as express from 'express';
import DB from './db/index';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/blogs', async (req, res) => {
	try {
	let blogs = await DB.Blogs.all();
    res.json(blogs);
	} catch(err) {
		console.log(err);
		res.sendStatus(500);
	}
});

export default router;