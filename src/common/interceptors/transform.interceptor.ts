import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpStatus } from '@nestjs/common'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import type { Request, Response } from 'express'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const ctx = context.switchToHttp()
        const response = ctx.getResponse<Response>()
        const request = ctx.getRequest<Request>()

        if (request.url === '/') return data

        return {
          code: response.statusCode.toString().startsWith('2') ? 'OPERATION_COMPLETE' : HttpStatus[response.statusCode],
          status: response.statusCode,

          data: data,

          responseAt: new Date().toISOString(),
        }
      }),
    )
  }
}
