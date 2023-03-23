import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
    profile_picture_url: {
    type: String,
    required: true
  },
  social_media_links: {
    github: {
      type: String,
      default: ''
    },
    twitter: {
      type: String,
      default: ''
    },
    facebook: {
      type: String,
      default: ''
    },
    instagram: {
      type: String,
      default: ''
    },
    linkedin: {
      type: String,
      default: ''
    }
  }
});

const User = mongoose.model('users', userSchema);

export default User;