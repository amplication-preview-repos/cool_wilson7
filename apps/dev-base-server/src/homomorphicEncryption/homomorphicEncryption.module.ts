import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HomomorphicEncryptionModuleBase } from "./base/homomorphicEncryption.module.base";
import { HomomorphicEncryptionService } from "./homomorphicEncryption.service";
import { HomomorphicEncryptionController } from "./homomorphicEncryption.controller";
import { HomomorphicEncryptionResolver } from "./homomorphicEncryption.resolver";

@Module({
  imports: [HomomorphicEncryptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [HomomorphicEncryptionController],
  providers: [HomomorphicEncryptionService, HomomorphicEncryptionResolver],
  exports: [HomomorphicEncryptionService],
})
export class HomomorphicEncryptionModule {}
