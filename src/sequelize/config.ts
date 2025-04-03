import { Dialect } from 'sequelize';

interface ISequelizeConfig {
  [key: string]: {
    dialect: Dialect;
    url: string | undefined;
    logging?: boolean | ((msg: string) => void);
  };
}

const config: ISequelizeConfig = {
  development: {
    dialect: 'postgres',
    url: process.env.DATABASE_URL,
    logging: console.log,
  },
  test: {
    dialect: 'postgres',
    url: process.env.DATABASE_URL,
  },
  production: {
    dialect: 'postgres',
    url: process.env.DATABASE_URL,
  },
};

export = config;
