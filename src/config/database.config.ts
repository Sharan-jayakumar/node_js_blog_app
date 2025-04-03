import { SequelizeOptions } from 'sequelize-typescript';

const config: { [key: string]: SequelizeOptions } = {
  development: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME,
    password: '',
    database: 'blog_db',
  },
  // Add configurations for 'test' and 'production' as needed
};

export default config;
