const config = {
    user: 'sa',
    password: 'Passw0rd',
    server: '172.18.242.45',
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