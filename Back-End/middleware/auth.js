import jwt from 'jsonwebtoken';

export async function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  
  let token_split = token.split(" ");
  console.log(token_split)

  jwt.verify(token_split[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }
    req.userId = decoded.id;
    req.userType = decoded.userType; // Extracting userType from token payload
    next();
  });
}
