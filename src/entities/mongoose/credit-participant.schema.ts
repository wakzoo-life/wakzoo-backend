import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { BaseSchema, BaseSchemaOptions } from './base-schema'
import { autoIncrement } from './auto-increment'

@Schema({ collection: 'credit_participant', ...BaseSchemaOptions })
export class CreditParticipant extends BaseSchema {
  @Prop({
    type: Number,
    unique: true,
  })
  _id: number

  @Prop({
    required: true,
    name: 'name',
  })
  name: string

  @Prop({
    required: true,
    name: 'category',
  })
  category: string
}

export const CreditParticipantSchema = SchemaFactory.createForClass(CreditParticipant)
autoIncrement(CreditParticipantSchema, 'credit_participant')
