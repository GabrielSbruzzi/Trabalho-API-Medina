exports.login = (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        return res.json({ message: 'Login bem-sucedido'});
    }
    res.status(401).json({ message: 'Credenciais inválidas' });
};
