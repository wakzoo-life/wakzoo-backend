import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { BaseSchema, BaseSchemaOptions } from './base-schema'
import { WakzooJoinedUserCountType } from 'src/common/types/wakzoo-joined-user-count-type'
import { autoIncrement } from './auto-increment'

@Schema({ collection: 'wakzoo_joined_user_count', ...BaseSchemaOptions })
export class WakzooJoinedUserCount extends BaseSchema {
  @Prop({
    required: true,
    name: 'count',
  })
  count: number = -1

  @Prop({
    required: true,
    name: 'type',
  })
  type: WakzooJoinedUserCountType = WakzooJoinedUserCountType.RECENT

  @Prop({
    required: true,
    name: 'savedAt',
    default: Date.now,
  })
  savedAt: Date
}

export const WakzooJoinedUserCountSchema = SchemaFactory.createForClass(WakzooJoinedUserCount)
autoIncrement(WakzooJoinedUserCountSchema, 'wakzoo_joined_user_count')
