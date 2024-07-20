import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NftManagementModuleBase } from "./base/nftManagement.module.base";
import { NftManagementService } from "./nftManagement.service";
import { NftManagementController } from "./nftManagement.controller";
import { NftManagementResolver } from "./nftManagement.resolver";

@Module({
  imports: [NftManagementModuleBase, forwardRef(() => AuthModule)],
  controllers: [NftManagementController],
  providers: [NftManagementService, NftManagementResolver],
  exports: [NftManagementService],
})
export class NftManagementModule {}
