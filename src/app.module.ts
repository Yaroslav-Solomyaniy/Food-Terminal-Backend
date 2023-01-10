import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { DiscountModule } from './discount/discount.module';

@Module({
  imports: [AuthModule, RolesModule, UsersModule, CategoriesModule, OrdersModule, DiscountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
