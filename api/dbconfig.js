const config = {
    user: 'sa',
    password: 'Passw0rd',
    server: '192.168.63.58',
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