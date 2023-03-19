import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { PaisesModule } from './paises/paises.module';
import { GenerosModule } from './generos/generos.module';
import { MarcasModule } from './marcas/marcas.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [MenuModule, PaisesModule, GenerosModule, MarcasModule, CategoriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
