const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post.find({ status: 'published' })
      .select('author price created title photo')
      .sort({ created: -1 });
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post.findById(req.params.id);
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/posts/add', async (req, res) => {
  const {
    author,
    email,
    created,
    updated,
    status,
    title,
    text,
    photo,
    price,
    phone,
    location,
  } = req.body;
  try {
    if (author && email && created && updated && status && title && text) {
      // Author Validation
      const strippedAuthor = author.replace(/(<([^>]+)>)/gi, '');
      if (strippedAuthor.length > 30 || strippedAuthor.length < 5) {
        throw new Error('Wrong input!');
      }
      // Email Validation
      const isEmailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
      if (!isEmailValid) throw new Error('Wrong input!');

      // Date Validation
      const isCreatedValid = Date.parse(created);
      const isUpdatedValid = Date.parse(updated);

      if (!isCreatedValid || !isUpdatedValid) throw new Error('Wrong input!');

      // Status Validation
      if (status !== 'draft' && status !== 'published' && status !== 'closed')
        throw new Error('Wrong input!');

      // Title Validation
      const strippedTitle = title.replace(/(<([^>]+)>)/gi, '');
      if (strippedTitle.length > 50 || strippedTitle.length < 10) {
        throw new Error('Wrong input!');
      }

      // Text Validation
      const strippedText = text.replace(/(<([^>]+)>)/gi, '');
      if (strippedText.length < 20) throw new Error('Wrong input!');

      // Photo Validation
      if (photo) {
        const fileExt = photo.split('.').slice(-1)[0];
        if (fileExt !== 'png' && fileExt !== 'jpg' && fileExt !== 'jpeg') {
          throw new Error('Wrong input!');
        }
      }

      // Price Validation
      const parsedPrice = Number(price);
      if (price) {
        if (parsedPrice < 1 || parsedPrice > 999999)
          throw new Error('Wrong input!');
      }

      // Phone Validation
      if (phone) {
        const isPhoneValid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,4}$/im.test(
          phone
        );
        if (!isPhoneValid) throw new Error('Wrong input!');
      }

      // Location Validation
      if (location) {
        const strippedLocation = author.replace(/(<([^>]+)>)/gi, '');
        if (strippedLocation.length > 85 || strippedLocation.length < 1) {
          throw new Error('Wrong input!');
        }
      }
      const post = {
        author: strippedAuthor,
        email,
        created,
        updated,
        status,
        title: strippedTitle,
        text: strippedText,
        photo: photo ? photo : null,
        price: price ? parsedPrice : null,
        phone: phone ? phone : null,
        location: location ? location : null,
      };

      const newPost = new Post({
        author: strippedAuthor,
        email,
        created,
        updated,
        status,
        title: strippedTitle,
        text: strippedText,
        photo: photo ? photo : null,
        price: price ? price : null,
        phone: phone ? phone : null,
        location: location ? location : null,
      });
      await newPost.save();
      res.status(200).json(newPost);
    } else {
      throw new Error('Wrong input!');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
