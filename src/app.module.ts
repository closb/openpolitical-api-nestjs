import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectedAccountsController } from './connected-accounts/connected-accounts.controller';
import { VirtualCardModule } from './virtual-card/virtual-card.module';
import { UserModule } from './user/user.module';
import { UpdateModule } from './update/update.module';
import { TransactionModule } from './transaction/transaction.module';
import { TierModule } from './tier/tier.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { StripeProductModule } from './stripe-product/stripe-product.module';
import { StripePlanModule } from './stripe-plan/stripe-plan.module';
import { SessionModule } from './session/session.module';
import { RequiredLegalDocumentsModule } from './required-legal-documents/required-legal-documents.module';
import { PayoutMethodModule } from './payout-method/payout-method.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { OrderModule } from './order/order.module';
import { NotificationModule } from './notification/notification.module';
import { MemberInvatationModule } from './member-invatation/member-invatation.module';
import { MemberModule } from './member/member.module';
import { LegalDocumentsModule } from './legal-documents/legal-documents.module';
import { HostApplicationModule } from './host-application/host-application.module';
import { ExpenseItemModule } from './expense-item/expense-item.module';
import { ExpenseAttachedFileModule } from './expense-attached-file/expense-attached-file.module';
import { ExpenseModule } from './expense/expense.module';
import { DataTypesModule } from './data-types/data-types.module';
import { ConversationFollowerModule } from './conversation-follower/conversation-follower.module';
import { ConversationModule } from './conversation/conversation.module';
import { ConnectedAccountModule } from './connected-account/connected-account.module';
import { CommentReactionModule } from './comment-reaction/comment-reaction.module';
import { CommentModule } from './comment/comment.module';
import { CampaignModule } from './campaign/campaign.module';
import { ApplicationModule } from './application/application.module';
import { ActivityModule } from './activity/activity.module';
import { WebhooksController } from './webhooks/webhooks.controller';
import { UsersController } from './users/users.controller';
import { ConnectedAccountsController } from './connected-accounts/connected-accounts.controller';

@Module({
  imports: [ActivityModule, ApplicationModule, CampaignModule, CommentModule, CommentReactionModule, ConnectedAccountModule, ConversationModule, ConversationFollowerModule, DataTypesModule, ExpenseModule, ExpenseAttachedFileModule, ExpenseItemModule, HostApplicationModule, LegalDocumentsModule, MemberModule, MemberInvatationModule, NotificationModule, OrderModule, PaymentMethodModule, PayoutMethodModule, RequiredLegalDocumentsModule, SessionModule, StripePlanModule, StripeProductModule, SubscriptionModule, TierModule, TransactionModule, UpdateModule, UserModule, VirtualCardModule],
  controllers: [AppController, ConnectedAccountsController, UsersController, WebhooksController],
  providers: [AppService],
})
export class AppModule {}
