const express = require('express');
const Resource = require('./resources-model');

const router = express.Router();

router.get('/', (req, res) => {
	Resource.getResources()
		.then(Resources => {
			res.status(200).json(Resources);
		})
		.catch(err => {
			res.status(500).json({ error: 'Issue finding Resources.', err });
		});
});
router.post('/', (req, res) => {
	const newResource = req.body;

	Resource.addResource(newResource)
		.then(id => {
			res.status(201).json(id);
		})
		.catch(err => {
			res.status(500).json({ error: 'Issue creating new resource.', err });
		});
});

module.exports = router;
