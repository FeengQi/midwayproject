import { Controller, Get, Provide } from '@midwayjs/decorator';

@Provide()
@Controller('/')
export class HomeController {
  @Get('/')
  async home() {
    return 'get Hello Midwayjs!';
  }
}
