
const authController = {
    login: (req, res) => {
        res.send({ message: 'This is login route!' });
    },
    register: (req, res) => {
        res.send({ message: 'This is register route!' });
    }
}


module.exports = { authController }
