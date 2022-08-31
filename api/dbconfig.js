const config = {
    user:'sa',
    password: 'Passw0rd',
    server: '127.0.0.1',
    database: 'BlockFlix',
    options: {
        encrypt: false,
        trustedconnection: true,
        enableArithAbort: true,
        instancename: 'BLOCKFLIX'
    },
    port: 1433
}

module.exports = config;