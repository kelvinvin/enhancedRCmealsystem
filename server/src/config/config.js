module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'enhancedRCmealsystem', 
        user: process.env.DB_USER || 'enhancedRCmealsystem',
        password: process.env.DB_PASS || 'enhancedRCmealsystem',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './enhancedRCmealsystem.sqlite'
        }
    },
    // authentication: {
    //     jwtSecret: process.env.JWT_SECRET || 'secret'
    // }
}