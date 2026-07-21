import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartamentosModule } from './modules/departamentos.module';
import { HealthController } from './controllers/health.controller';
import { DepartamentosController } from './controllers/departamentos.controller';

@Module({
  imports: [DepartamentosModule],
  controllers: [AppController, HealthController, DepartamentosController],
  providers: [AppService],
})
export class AppModule {}
