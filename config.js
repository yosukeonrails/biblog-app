
require('dotenv').config();

exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://localhost/biblog' :
                            'mongodb://localhost/biblog-dev');

exports.PORT = process.env.PORT || 8080;
