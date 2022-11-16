import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
require('dotenv').config({ path: '.env' })

console.log(process.env.MONGO_URI)

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    JogadoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
