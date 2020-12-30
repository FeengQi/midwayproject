import {
  Inject,
  Controller,
  Get,
  Provide,
  Query,
  ALL,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/get_user')
  async getUser(@Query() uid: number) {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }

  @Get('/id', { middleware: ['reportMiddleware'] })
  async getId(@Query() id: number) {
    return `${id}`;
  }

  @Get('/queryObj')
  async getQueryObj(@Query(ALL) id: number) {
    return JSON.stringify(id);
  }
}
