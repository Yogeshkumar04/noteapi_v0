const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
// const SECRET_KEY = "NOTESAPI";

const auth = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token) {
            // Split the Authorization header to get the token part
            token = token.split(" ")[1]; // Assuming the format "Bearer <token>"
            
            // Verify the token
            let user = jwt.verify(token, SECRET_KEY);
            req.userId = user.id;

        } else {
            return res.status(401).json({ message: "Unauthorized User" });
        }

        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Unauthorized User" });
    }
}

module.exports = auth;
