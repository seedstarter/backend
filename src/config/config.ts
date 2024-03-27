import { ConfigProps } from '../MODELS/config.interface';

export const config = (): ConfigProps => ({
    port: Number(process.env.PORT),
    api: {
        apiUrl: process.env.API_URL,
        httpTimeout: 1000,
    },
    node_env: process.env.NODE_ENV,
    // jwt: {
    //     secret: process.env.JWT_SECRET,
    //     expiresIn: process.env.JWT_EXPIRES_IN,
    //   },
    mongodb: {
      database: {
        connectionString: `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@${process.env.MONGODB_CONNECTION_STRING}`,
        databaseName: process.env.NODE_ENV || 'local'
      }
    }
});