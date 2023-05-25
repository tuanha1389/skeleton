import { Module } from '@nestjs/common';
import { BalanceService } from './balanceService';
import { BidService } from './bidService';
import { DepositService } from './depositService';
import { ItemService } from './itemService';
import { TransactionService } from './transactionService';
import { UserService } from './userService';


@Module({
    imports: [],
    providers: [
        BalanceService,
        BidService,
        DepositService,
        ItemService,
        TransactionService,
        UserService
    ],
})
export class ServiceModule { }
