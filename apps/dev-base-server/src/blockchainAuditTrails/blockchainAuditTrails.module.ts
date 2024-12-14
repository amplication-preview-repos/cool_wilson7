import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BlockchainAuditTrailsModuleBase } from "./base/blockchainAuditTrails.module.base";
import { BlockchainAuditTrailsService } from "./blockchainAuditTrails.service";
import { BlockchainAuditTrailsController } from "./blockchainAuditTrails.controller";
import { BlockchainAuditTrailsResolver } from "./blockchainAuditTrails.resolver";

@Module({
  imports: [BlockchainAuditTrailsModuleBase, forwardRef(() => AuthModule)],
  controllers: [BlockchainAuditTrailsController],
  providers: [BlockchainAuditTrailsService, BlockchainAuditTrailsResolver],
  exports: [BlockchainAuditTrailsService],
})
export class BlockchainAuditTrailsModule {}
