import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USERNAME,
      password: '',
      database: 'blog_db',
      autoLoadModels: true,
      // synchronize: true, // disabling this because we are going to use sequalize migrations
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
