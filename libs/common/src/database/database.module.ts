import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot(`mongodb://localhost/airbnb-clone`),
    ],
})
export class DatabaseModule {}
