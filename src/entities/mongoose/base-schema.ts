import { Prop } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export class BaseSchema extends Document {
  @Prop({
    type: Number,
    unique: true,
  })
  _id: number

  @Prop({
    type: Date,
    default: Date.now,
    required: true,
  })
  created_at: Date

  @Prop({
    type: Date,
    default: Date.now,
    required: true,
  })
  updated_at: Date
}

export const BaseSchemaOptions = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
}
