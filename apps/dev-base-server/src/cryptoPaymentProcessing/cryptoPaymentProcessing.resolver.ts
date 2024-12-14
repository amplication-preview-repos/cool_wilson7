import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CryptoPaymentProcessingResolverBase } from "./base/cryptoPaymentProcessing.resolver.base";
import { CryptoPaymentProcessing } from "./base/CryptoPaymentProcessing";
import { CryptoPaymentProcessingService } from "./cryptoPaymentProcessing.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CryptoPaymentProcessing)
export class CryptoPaymentProcessingResolver extends CryptoPaymentProcessingResolverBase {
  constructor(
    protected readonly service: CryptoPaymentProcessingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
