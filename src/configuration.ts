// src/configuration.ts
import { Configuration, App } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';

@Configuration()
export class ContainerLifeCycle implements ILifeCycle {
  
  @App()
  app: Application;
  
  async onReady() {
    this.app.use(await this.app.generateMiddleware('reportMiddleware'));
  }  
}