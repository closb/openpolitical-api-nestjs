import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectedAccountsController } from './connected-accounts/connected-accounts.controller';
import { ImagesController } from './images/images.controller';
import { UsersController } from './users/users.controller';
import { WebhooksController } from './webhooks/webhooks.controller';

@Module({
  imports: [],
  controllers: [AppController, ConnectedAccountsController, ImagesController, UsersController, WebhooksController],
  providers: [AppService],
})
export class AppModule {}
