const jwt = require('jsonwebtoken');
function authenticateToken(req, res, next) {
    const authheader = req.headers["authorization"];
    const token = authheader && authheader.split('')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, "chris_SecretKey", (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });

}

function generateAccessToken(username) {
    return jwt.sign({ data: username }, "chris_SecretKey", { expiresIn: "1h" });
}

module.exports = {
    authenticateToken,
    generateAccessToken,
};