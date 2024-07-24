// middleware are functions that have access to req , res obj and they can perform some actions on the http req , res

// we need to create 3 middleware i,e
// 1. auth-> it will check the authenticity of user using token
// 2. isStudent -> check if the role is student or not i.e for authorization
// 3. isAdmin -> check if the the role is admin or not i.e for authorization

const jwt = require(`jsonwebtoken`);
require(`dotenv`).config();

exports.auth = (req, res, next) => {
  // next is used to call next middleware that is to be called after the verification of current middleware
  // client had also sent the token in req

  try {
    // extract the JWT token
    // other ways to fetch the token that are body,header,cookie
    // and for req.cookies.token we require cookie parser
    console.log(`body->${req.body.token}`);
    console.log(`cookie->${req.cookies.token}`);
    // console.log(`header->${req.header(`Authorization`).replace("Bearer ","")}`);

    const token = req.cookies.token || req.body.token || req.header(`Authorization`).replace("Bearer ","") //replace bearer followed by space with empty string

    if (!token) {
      return res.status(401).json(
        //401 -> unauthorised
        {
          success: false,
          message: `Token misssing`,
        }
      );
    }

    // verify the token
    try {
      // decode mean payload i.e data(role) , decode is an object , here payload store email , id , role
      const decode = jwt.verify(token, process.env.JWT_SECRET); //return payload obj
      console.log(decode);

      req.user = decode; //!imp for authorization (i.e->role) mean added payload obj in req obj
    } catch (err) {
      return res.status(401).json(
        //401->unauthorised
        {
          success: false,
          message: `Token is invalid`,
        }
      );
    }

    next(); //handover to next middleware that was stated its routes
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: `something went wrong while verifying the token`,
    });
  }
};





exports.isStudent = (req, res, next) => {
  try {
    if (req.user.role !== `Student`) {
      return res.status(401).json({
        success: false,
        message: `this is a protected route for students only`,
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `user role is not matching`,
    });
  }
};





exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== `Admin`) {
      return res.status(401).json({
        success: false,
        message: `this is a protected route for Admin only`,
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: `user role is not matching`,
    });
  }
};
