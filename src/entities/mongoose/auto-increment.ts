import { Schema } from 'mongoose'
import * as mongooseAutoIncrement from 'mongoose-sequence'

export const autoIncrement = (schema: Schema, collectionName: string) => {
  schema.plugin(mongooseAutoIncrement, {
    id: `${collectionName}_id`,
    inc_field: '_id',
    start_seq: 1,
  })
}
