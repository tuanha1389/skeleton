import { Module } from '@nestjs/common';
import { BalanceRepository } from './balanceRepository';
import { BidRepository } from './bidRepository';
import { DepositRepository } from './depositRepository';
import { ItemRepository } from './itemRepository';
import { TransactionRepository } from './transactionRepository';
import { UserRepository } from './userRepository';


@Module({
    imports: [],
    providers: [
        BalanceRepository,
        BidRepository,
        DepositRepository,
        ItemRepository,
        TransactionRepository,
        UserRepository
    ],
})
export class RepositoryModule { }
