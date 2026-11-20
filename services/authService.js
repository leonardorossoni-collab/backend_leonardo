
const repository = require('../repositories/usuariosRepository.js');

function login(usuario, senha) {
    const encontrado = repository.buscarPorUsuario(usuario);

    if (encontrado === undefined) {
        return { invalido: true };
    }

    if (encontrado.senha !== senha) {
        return { invalido: true };
    }

    // Devolve o usuario sem a senha
    return {
        usuario: {
            id: encontrado.id,
            usuario: encontrado.usuario
        }
    };
}

module.exports = { login };
