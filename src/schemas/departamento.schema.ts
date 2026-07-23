import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'Nombre '})
export class Nombre  extends Document {
    @Prop({ required: true, unique: true, index: true })
    id_!: number;

}

export const Nombre Schema = SchemaFactory.createForClass(Nombre );
