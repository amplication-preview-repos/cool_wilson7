import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CryptoPaymentProcessingModuleBase } from "./base/cryptoPaymentProcessing.module.base";
import { CryptoPaymentProcessingService } from "./cryptoPaymentProcessing.service";
import { CryptoPaymentProcessingController } from "./cryptoPaymentProcessing.controller";
import { CryptoPaymentProcessingResolver } from "./cryptoPaymentProcessing.resolver";

@Module({
  imports: [CryptoPaymentProcessingModuleBase, forwardRef(() => AuthModule)],
  controllers: [CryptoPaymentProcessingController],
  providers: [CryptoPaymentProcessingService, CryptoPaymentProcessingResolver],
  exports: [CryptoPaymentProcessingService],
})
export class CryptoPaymentProcessingModule {}
