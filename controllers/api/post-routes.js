const router = require('express').Router()
const { Post } = require('../../models/')
const gateKeeper = require('../../utils/gatekeeper.js')

router.post('/', gateKeeper, async (req, res) => {
  const body = req.body
  console.log(body)
  try {
    const newPost = await Post.create({ ...body, userId: req.session.userId })
    console.log("Here is the new post: ", newPost)
    res.json(newPost)
  } catch (err) {
    console.log('IT FAILED!', err)
    res.status(500).json(err)
  }
})

router.put('/:id', gateKeeper, async (req, res) => {
  try {
    console.log('here is the req.body', req.body)
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    if (affectedRows > 0) {
      res.status(200).end()
    } else {
      res.status(404).end()
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/:id', gateKeeper, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (affectedRows > 0) {
      res.status(200).end()
    } else {
      res.status(404).end()
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router