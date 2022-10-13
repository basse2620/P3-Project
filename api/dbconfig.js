const config = {
    user: 'sa',
    password: 'Passw0rd',
    server: '192.168.20.30',
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