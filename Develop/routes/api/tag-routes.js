const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
    include: [
      {
        model: Product,
        attributes: ['id', 'tag_name'],
      },
    ],
  })
  .then(categoryData => {
    if(!categoryData) {
      res.status(404).json({message: "Unable to find tags!"});
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.rarams.id,
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      },
    ],
  })
  .then(categoryData => {
    if(!categoryData) {
      res.status(404).json({message: "Unable to find ID!"});
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.update
});

module.exports = router;
