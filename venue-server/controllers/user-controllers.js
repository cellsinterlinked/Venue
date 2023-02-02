const HttpError = require('../models/http-error');
const User = require('../models/user')
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError(
          'Invalid inputs passed. Make sure all inputs have been filled out.',
          422
        )
      );
    }
    console.log("got past beginning")

    const {password, userName, securityCode} = req.body;

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
      const error = new HttpError('creashed while creating hashed password', 500);
      return next(error);
    }

   const createdUser = new User({
    password: hashedPassword,
    userName: userName,
    securityCode: securityCode
   })

   try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError('Creating user failed 1 ', 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      {
        userId: createdUser.id,
      },
      process.env.JWT_KEY,
      { expiresIn: '1h' }
    );
  } catch (err) {
    const error = new HttpError('Creating user failed 2 ', 500);
    return next(error);
  }

  res.status(201).json({
    userId: createdUser.id,
    token: token,
    userName: createdUser.userName
  })


}

const login = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError(
          'Invalid inputs passed. Make sure all inputs have been filled out.',
          422
        )
      );
    }
  
    const { userName, password, securityCode } = req.body;

    let existingUser;
  
    try {
      existingUser = await User.findOne({ userName: userName }); 
    } catch (err) {
      const error = new HttpError('logging in failed, please try again ', 500);
      return next(error);
    }

    
    
    if (!existingUser) {
      const error = new HttpError('Invalid Credentials', 401);
      return next(error);
    }


    let isValidSecurityCode;

    try {
        isValidSecurityCode = await User.findOne({ securityCode: securityCode });
      } catch (err) {
        const error = new HttpError('logging in failed, please try again ', 500);
        return next(error);
      }
  
      
      
      if (!isValidSecurityCode) {
        const error = new HttpError('Invalid Credentials', 401);
        return next(error);
      }

  
    let isValidPassword = false;
    try {
      isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch (err) {
      const error = new HttpError(
        'Could not log you in, please check credentials and try again.',
        500
      );
      return next(error);
    }
  
    if (!isValidPassword) {
      const error = new HttpError(
        'Invalid credentials, could not log you in.',
        401
      );
      return next(error);
    }
  
    let token;
    try {
      token = jwt.sign(
        {
          userId: existingUser.id,
          },
        process.env.JWT_KEY,
        { expiresIn: '1h' }
      );
    } catch (err) {
      const error = new HttpError('Logging in failed', 500);
      return next(error);
    }
  
    res.json({
      userId: existingUser.id,
      token: token,
    });
  };


exports.createUser = createUser;
exports.login = login;