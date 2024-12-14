import { Module } from "@nestjs/common";
import { RealTimeDatabaseModule } from "./realTimeDatabase/realTimeDatabase.module";
import { MultiModelDatabaseModule } from "./multiModelDatabase/multiModelDatabase.module";
import { IntegratedKnowledgeBaseModule } from "./integratedKnowledgeBase/integratedKnowledgeBase.module";
import { TimeSeriesDatabaseModule } from "./timeSeriesDatabase/timeSeriesDatabase.module";
import { GraphDatabaseModule } from "./graphDatabase/graphDatabase.module";
import { IoTDeviceManagementModule } from "./ioTDeviceManagement/ioTDeviceManagement.module";
import { IoTDataIngestionModule } from "./ioTDataIngestion/ioTDataIngestion.module";
import { AutomatedComplianceChecksModule } from "./automatedComplianceChecks/automatedComplianceChecks.module";
import { DataLakeIntegrationModule } from "./dataLakeIntegration/dataLakeIntegration.module";
import { EdgeAnalyticsModule } from "./edgeAnalytics/edgeAnalytics.module";
import { ComplexEventProcessingModule } from "./complexEventProcessing/complexEventProcessing.module";
import { DigitalTwinSupportModule } from "./digitalTwinSupport/digitalTwinSupport.module";
import { StreamProcessingModule } from "./streamProcessing/streamProcessing.module";
import { AutomatedEtlPipelinesModule } from "./automatedEtlPipelines/automatedEtlPipelines.module";
import { AutoMlModule } from "./autoMl/autoMl.module";
import { PasswordlessAuthenticationModule } from "./passwordlessAuthentication/passwordlessAuthentication.module";
import { AutomatedFeatureEngineeringModule } from "./automatedFeatureEngineering/automatedFeatureEngineering.module";
import { ExplainableAiToolsModule } from "./explainableAiTools/explainableAiTools.module";
import { AutomatedPiiDetectionModule } from "./automatedPiiDetection/automatedPiiDetection.module";
import { DataLineageTrackingModule } from "./dataLineageTracking/dataLineageTracking.module";
import { FederatedLearningModule } from "./federatedLearning/federatedLearning.module";
import { DataRetentionPoliciesModule } from "./dataRetentionPolicies/dataRetentionPolicies.module";
import { DecentralizedIdentityModule } from "./decentralizedIdentity/decentralizedIdentity.module";
import { CarbonFootprintTrackingModule } from "./carbonFootprintTracking/carbonFootprintTracking.module";
import { BehavioralBiometricsModule } from "./behavioralBiometrics/behavioralBiometrics.module";
import { ServerlessContainersModule } from "./serverlessContainers/serverlessContainers.module";
import { ContinuousLearningModule } from "./continuousLearning/continuousLearning.module";
import { StatefulServerlessModule } from "./statefulServerless/statefulServerless.module";
import { EdgeComputingFunctionsModule } from "./edgeComputingFunctions/edgeComputingFunctions.module";
import { ContinuousAuthenticationModule } from "./continuousAuthentication/continuousAuthentication.module";
import { ZeroTrustSecurityModule } from "./zeroTrustSecurity/zeroTrustSecurity.module";
import { MultiLanguageRuntimeEnvironmentModule } from "./multiLanguageRuntimeEnvironment/multiLanguageRuntimeEnvironment.module";
import { AutomatedThreatDetectionModule } from "./automatedThreatDetection/automatedThreatDetection.module";
import { GreenHostingOptionsModule } from "./greenHostingOptions/greenHostingOptions.module";
import { HomomorphicEncryptionModule } from "./homomorphicEncryption/homomorphicEncryption.module";
import { EnergyEfficientCodingModule } from "./energyEfficientCoding/energyEfficientCoding.module";
import { AccessibilityComplianceModule } from "./accessibilityCompliance/accessibilityCompliance.module";
import { RealTimeTranslationModule } from "./realTimeTranslation/realTimeTranslation.module";
import { VoiceControlledDevelopmentModule } from "./voiceControlledDevelopment/voiceControlledDevelopment.module";
import { DecentralizedStorageModule } from "./decentralizedStorage/decentralizedStorage.module";
import { WorkflowBuildersModule } from "./workflowBuilders/workflowBuilders.module";
import { BlockchainAuditTrailsModule } from "./blockchainAuditTrails/blockchainAuditTrails.module";
import { DocumentDatabaseModule } from "./documentDatabase/documentDatabase.module";
import { SchemaDesignerModule } from "./schemaDesigner/schemaDesigner.module";
import { AiCodeAssistanceModule } from "./aiCodeAssistance/aiCodeAssistance.module";
import { ArAppPrototypingModule } from "./arAppPrototyping/arAppPrototyping.module";
import { CryptoPaymentProcessingModule } from "./cryptoPaymentProcessing/cryptoPaymentProcessing.module";
import { PredictiveScalingModule } from "./predictiveScaling/predictiveScaling.module";
import { DatabaseQueryOptimizationModule } from "./databaseQueryOptimization/databaseQueryOptimization.module";
import { PerformanceTuningModule } from "./performanceTuning/performanceTuning.module";
import { NftManagementModule } from "./nftManagement/nftManagement.module";
import { EmotionAiModule } from "./emotionAi/emotionAi.module";
import { PersonalizedUserJourneysModule } from "./personalizedUserJourneys/personalizedUserJourneys.module";
import { SmartCachingStrategiesModule } from "./smartCachingStrategies/smartCachingStrategies.module";
import { GraphQlSupportModule } from "./graphQlSupport/graphQlSupport.module";
import { ContextAwareHelpModule } from "./contextAwareHelp/contextAwareHelp.module";
import { ApiMonetizationModule } from "./apiMonetization/apiMonetization.module";
import { ApiDocumentationModule } from "./apiDocumentation/apiDocumentation.module";
import { GamificationElementsModule } from "./gamificationElements/gamificationElements.module";
import { ApiDesignModule } from "./apiDesign/apiDesign.module";
import { ChaosEngineeringToolsModule } from "./chaosEngineeringTools/chaosEngineeringTools.module";
import { VisualProgrammingInterfacesModule } from "./visualProgrammingInterfaces/visualProgrammingInterfaces.module";
import { NaturalLanguageToCodeModule } from "./naturalLanguageToCode/naturalLanguageToCode.module";
import { AutomatedCodeReviewModule } from "./automatedCodeReview/automatedCodeReview.module";
import { AiDrivenIncidentResponseModule } from "./aiDrivenIncidentResponse/aiDrivenIncidentResponse.module";
import { GitOpsWorkflowModule } from "./gitOpsWorkflow/gitOpsWorkflow.module";
import { CrossPlatformDevelopmentModule } from "./crossPlatformDevelopment/crossPlatformDevelopment.module";
import { CrossPlatformTestingAutomationModule } from "./crossPlatformTestingAutomation/crossPlatformTestingAutomation.module";
import { AdaptiveUiComponentsModule } from "./adaptiveUiComponents/adaptiveUiComponents.module";
import { CanaryDeploymentsModule } from "./canaryDeployments/canaryDeployments.module";
import { AnomalyDetectionModule } from "./anomalyDetection/anomalyDetection.module";
import { PlatformSpecificOptimizationsModule } from "./platformSpecificOptimizations/platformSpecificOptimizations.module";
import { BusinessIntelligenceDashboardsModule } from "./businessIntelligenceDashboards/businessIntelligenceDashboards.module";
import { UserBehaviorModelingModule } from "./userBehaviorModeling/userBehaviorModeling.module";
import { PredictiveAnalyticsModule } from "./predictiveAnalytics/predictiveAnalytics.module";
import { CodeSynchronizationModule } from "./codeSynchronization/codeSynchronization.module";
import { AIassistedPairProgrammingModule } from "./aIassistedPairProgramming/aIassistedPairProgramming.module";
import { CollaborativeCodingEnvironmentsModule } from "./collaborativeCodingEnvironments/collaborativeCodingEnvironments.module";
import { SmartContractDevelopmentModule } from "./smartContractDevelopment/smartContractDevelopment.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { LoggerModule } from "./logger/logger.module";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    LoggerModule,
    RealTimeDatabaseModule,
    MultiModelDatabaseModule,
    IntegratedKnowledgeBaseModule,
    TimeSeriesDatabaseModule,
    GraphDatabaseModule,
    IoTDeviceManagementModule,
    IoTDataIngestionModule,
    AutomatedComplianceChecksModule,
    DataLakeIntegrationModule,
    EdgeAnalyticsModule,
    ComplexEventProcessingModule,
    DigitalTwinSupportModule,
    StreamProcessingModule,
    AutomatedEtlPipelinesModule,
    AutoMlModule,
    PasswordlessAuthenticationModule,
    AutomatedFeatureEngineeringModule,
    ExplainableAiToolsModule,
    AutomatedPiiDetectionModule,
    DataLineageTrackingModule,
    FederatedLearningModule,
    DataRetentionPoliciesModule,
    DecentralizedIdentityModule,
    CarbonFootprintTrackingModule,
    BehavioralBiometricsModule,
    ServerlessContainersModule,
    ContinuousLearningModule,
    StatefulServerlessModule,
    EdgeComputingFunctionsModule,
    ContinuousAuthenticationModule,
    ZeroTrustSecurityModule,
    MultiLanguageRuntimeEnvironmentModule,
    AutomatedThreatDetectionModule,
    GreenHostingOptionsModule,
    HomomorphicEncryptionModule,
    EnergyEfficientCodingModule,
    AccessibilityComplianceModule,
    RealTimeTranslationModule,
    VoiceControlledDevelopmentModule,
    DecentralizedStorageModule,
    WorkflowBuildersModule,
    BlockchainAuditTrailsModule,
    DocumentDatabaseModule,
    SchemaDesignerModule,
    AiCodeAssistanceModule,
    ArAppPrototypingModule,
    CryptoPaymentProcessingModule,
    PredictiveScalingModule,
    DatabaseQueryOptimizationModule,
    PerformanceTuningModule,
    NftManagementModule,
    EmotionAiModule,
    PersonalizedUserJourneysModule,
    SmartCachingStrategiesModule,
    GraphQlSupportModule,
    ContextAwareHelpModule,
    ApiMonetizationModule,
    ApiDocumentationModule,
    GamificationElementsModule,
    ApiDesignModule,
    ChaosEngineeringToolsModule,
    VisualProgrammingInterfacesModule,
    NaturalLanguageToCodeModule,
    AutomatedCodeReviewModule,
    AiDrivenIncidentResponseModule,
    GitOpsWorkflowModule,
    CrossPlatformDevelopmentModule,
    CrossPlatformTestingAutomationModule,
    AdaptiveUiComponentsModule,
    CanaryDeploymentsModule,
    AnomalyDetectionModule,
    PlatformSpecificOptimizationsModule,
    BusinessIntelligenceDashboardsModule,
    UserBehaviorModelingModule,
    PredictiveAnalyticsModule,
    CodeSynchronizationModule,
    AIassistedPairProgrammingModule,
    CollaborativeCodingEnvironmentsModule,
    SmartContractDevelopmentModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
