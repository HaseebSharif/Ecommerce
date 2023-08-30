import jwt from 'jsonwebtoken'

//verify user
export const verifyUser = (req, res, next) => {
    const token = req.cookies.accessToken;
    console.log(token)
  if (!token) {
    return res.status(403).json({code: "TOKEN_MISSING", message: "A token is required for authentication. Please login again & try."});
  }
  try {
    const decoded = jwt.verify(token, 'muhammadhaseebsharif');
    req.user = decoded;
  } catch (err) {
    return res.status(403).json({code: "TOKEN_EXPIRED", message: "Session Expired. Kindly Login again to continue"});
  }
  return next();
};

//verify admin

export const verifyAdmin = (req, res, next) => {
    const token = req.cookies.accessToken;
  if (!token) {
    return res.status(403).json({code: "TOKEN_MISSING", message: "A token is required for authentication. Please login again & try."});
  }
  try {
    const decoded = jwt.verify(token, 'muhammadhaseebsharif');
    if(decoded.role === 'admin'){

        req.user = decoded;
    }else{
        return res.status(403).json({code: "NO_PERMISSION", message: "Only admin can perform this action."});
    }
  } catch (err) {
    return res.status(403).json({code: "TOKEN_EXPIRED", message: "Session Expired. Kindly Login again to continue"});
  }
  return next();
};

