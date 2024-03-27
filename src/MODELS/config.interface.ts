interface ApiConfigProps {
    apiUrl: string
    httpTimeout: number
}

interface MongodbConfigProps {
    connectionString: string
    databaseName: string
}


export interface ConfigProps {
    port: number
    api: ApiConfigProps,
    node_env: string
    mongodb: {
        database: MongodbConfigProps
    }
}