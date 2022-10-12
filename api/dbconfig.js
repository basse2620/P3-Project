const config = {
    user: 'sa',
    password: 'Passw0rd',
    server: '172.24.244.198',
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