## API Report File for "@azure/msal-node"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AccessTokenCache } from '@azure/msal-common';
import { AccessTokenEntity } from '@azure/msal-common';
import { AccountCache } from '@azure/msal-common';
import { AccountEntity } from '@azure/msal-common';
import { AccountInfo } from '@azure/msal-common';
import { AppMetadataCache } from '@azure/msal-common';
import { AppMetadataEntity } from '@azure/msal-common';
import { AuthenticationResult } from '@azure/msal-common';
import { AuthError } from '@azure/msal-common';
import { AuthErrorMessage } from '@azure/msal-common';
import { AuthorityMetadataEntity } from '@azure/msal-common';
import { AuthorizationCodeRequest as AuthorizationCodeRequest_2 } from '@azure/msal-common';
import { AuthorizationUrlRequest as AuthorizationUrlRequest_2 } from '@azure/msal-common';
import { BaseAuthRequest } from '@azure/msal-common';
import { CacheManager } from '@azure/msal-common';
import { ClientAuthError } from '@azure/msal-common';
import { ClientAuthErrorMessage } from '@azure/msal-common';
import { ClientConfiguration } from '@azure/msal-common';
import { ClientConfigurationError } from '@azure/msal-common';
import { ClientConfigurationErrorMessage } from '@azure/msal-common';
import { ClientCredentialRequest as ClientCredentialRequest_2 } from '@azure/msal-common';
import { DeviceCodeRequest as DeviceCodeRequest_2 } from '@azure/msal-common';
import { DeviceCodeResponse } from '@azure/msal-common';
import { ICachePlugin } from '@azure/msal-common';
import { ICrypto } from '@azure/msal-common';
import { IdTokenCache } from '@azure/msal-common';
import { IdTokenEntity } from '@azure/msal-common';
import { INetworkModule } from '@azure/msal-common';
import { InteractionRequiredAuthError } from '@azure/msal-common';
import { ISerializableTokenCache } from '@azure/msal-common';
import { Logger } from '@azure/msal-common';
import { LoggerOptions } from '@azure/msal-common';
import { LogLevel } from '@azure/msal-common';
import { NetworkRequestOptions } from '@azure/msal-common';
import { NetworkResponse } from '@azure/msal-common';
import { OnBehalfOfRequest as OnBehalfOfRequest_2 } from '@azure/msal-common';
import { PkceCodes } from '@azure/msal-common';
import { PromptValue } from '@azure/msal-common';
import { ProtocolMode } from '@azure/msal-common';
import { RefreshTokenCache } from '@azure/msal-common';
import { RefreshTokenEntity } from '@azure/msal-common';
import { RefreshTokenRequest as RefreshTokenRequest_2 } from '@azure/msal-common';
import { ResponseMode } from '@azure/msal-common';
import { ServerError } from '@azure/msal-common';
import { ServerTelemetryEntity } from '@azure/msal-common';
import { ServerTelemetryManager } from '@azure/msal-common';
import { SilentFlowRequest as SilentFlowRequest_2 } from '@azure/msal-common';
import { ThrottlingEntity } from '@azure/msal-common';
import { TokenCacheContext } from '@azure/msal-common';
import { UsernamePasswordRequest as UsernamePasswordRequest_2 } from '@azure/msal-common';
import { ValidCacheType } from '@azure/msal-common';

export { AccountInfo }

export { AuthenticationResult }

export { AuthError }

export { AuthErrorMessage }

// @public
export type AuthorizationCodeRequest = Partial<Omit<AuthorizationCodeRequest_2, "scopes" | "redirectUri" | "code" | "authenticationScheme" | "resourceRequestMethod" | "resourceRequestUri">> & {
    scopes: Array<string>;
    redirectUri: string;
    code: string;
};

// @public
export type AuthorizationUrlRequest = Partial<Omit<AuthorizationUrlRequest_2, "scopes" | "redirectUri" | "resourceRequestMethod" | "resourceRequestUri" | "authenticationScheme">> & {
    scopes: Array<string>;
    redirectUri: string;
};

// @public
export function buildAppConfiguration({ auth, cache, system, }: Configuration): Configuration;

// @public
export type CacheKVStore = Record<string, ValidCacheType>;

// @public
export abstract class ClientApplication {
    protected constructor(configuration: Configuration);
    acquireTokenByCode(request: AuthorizationCodeRequest): Promise<AuthenticationResult | null>;
    acquireTokenByRefreshToken(request: RefreshTokenRequest): Promise<AuthenticationResult | null>;
    acquireTokenSilent(request: SilentFlowRequest): Promise<AuthenticationResult | null>;
    protected buildOauthClientConfiguration(authority: string, serverTelemetryManager?: ServerTelemetryManager): Promise<ClientConfiguration>;
    protected clientAssertion: ClientAssertion;
    protected clientSecret: string;
    protected config: Configuration;
    getAuthCodeUrl(request: AuthorizationUrlRequest): Promise<string>;
    getLogger(): Logger;
    // Warning: (ae-incompatible-release-tags) The symbol "getTokenCache" is marked as @public, but its signature references "TokenCache" which is marked as @beta
    getTokenCache(): TokenCache;
    protected initializeBaseRequest(authRequest: Partial<BaseAuthRequest>): BaseAuthRequest;
    protected initializeServerTelemetryManager(apiId: number, correlationId: string, forceRefresh?: boolean): ServerTelemetryManager;
    protected logger: Logger;
    setLogger(logger: Logger): void;
    // Warning: (ae-incompatible-release-tags) The symbol "storage" is marked as @public, but its signature references "Storage" which is marked as @beta
    protected storage: Storage_2;
    }

// @public
export class ClientAssertion {
    static fromAssertion(assertion: string): ClientAssertion;
    static fromCertificate(thumbprint: string, privateKey: string, publicCertificate?: string): ClientAssertion;
    getJwt(cryptoProvider: CryptoProvider, issuer: string, jwtAudience: string): string;
    static parseCertificate(publicCertificate: string): Array<string>;
    }

export { ClientAuthError }

export { ClientAuthErrorMessage }

export { ClientConfigurationError }

export { ClientConfigurationErrorMessage }

// @public
export type ClientCredentialRequest = Partial<Omit<ClientCredentialRequest_2, "scopes" | "resourceRequestMethod" | "resourceRequestUri">> & {
    scopes: Array<string>;
};

// @public
export class ConfidentialClientApplication extends ClientApplication implements IConfidentialClientApplication {
    constructor(configuration: Configuration);
    acquireTokenByClientCredential(request: ClientCredentialRequest): Promise<AuthenticationResult | null>;
    acquireTokenOnBehalfOf(request: OnBehalfOfRequest): Promise<AuthenticationResult | null>;
    }

// @public
export type Configuration = {
    auth: NodeAuthOptions;
    cache?: CacheOptions;
    system?: NodeSystemOptions;
};

// @public
export class CryptoProvider implements ICrypto {
    constructor();
    base64Decode(input: string): string;
    base64Encode(input: string): string;
    createNewGuid(): string;
    generatePkceCodes(): Promise<PkceCodes>;
    getPublicKeyThumbprint(): Promise<string>;
    signJwt(): Promise<string>;
}

// @public
export class Deserializer {
    static deserializeAccessTokens(accessTokens: Record<string, SerializedAccessTokenEntity>): AccessTokenCache;
    static deserializeAccounts(accounts: Record<string, SerializedAccountEntity>): AccountCache;
    static deserializeAllCache(jsonCache: JsonCache): InMemoryCache;
    static deserializeAppMetadata(appMetadata: Record<string, SerializedAppMetadataEntity>): AppMetadataCache;
    static deserializeIdTokens(idTokens: Record<string, SerializedIdTokenEntity>): IdTokenCache;
    static deserializeJSONBlob(jsonFile: string): JsonCache;
    static deserializeRefreshTokens(refreshTokens: Record<string, SerializedRefreshTokenEntity>): RefreshTokenCache;
}

// @public
export type DeviceCodeRequest = Partial<Omit<DeviceCodeRequest_2, "scopes" | "deviceCodeCallback" | "resourceRequestMethod" | "resourceRequestUri">> & {
    scopes: Array<string>;
    deviceCodeCallback: (response: DeviceCodeResponse) => void;
};

export { ICachePlugin }

// @public
export interface IConfidentialClientApplication {
    acquireTokenByClientCredential(request: ClientCredentialRequest): Promise<AuthenticationResult | null>;
    acquireTokenByCode(request: AuthorizationCodeRequest): Promise<AuthenticationResult | null>;
    acquireTokenByRefreshToken(request: RefreshTokenRequest): Promise<AuthenticationResult | null>;
    acquireTokenOnBehalfOf(request: OnBehalfOfRequest): Promise<AuthenticationResult | null>;
    acquireTokenSilent(request: SilentFlowRequest): Promise<AuthenticationResult | null>;
    getAuthCodeUrl(request: AuthorizationUrlRequest): Promise<string>;
    getLogger(): Logger;
    // Warning: (ae-incompatible-release-tags) The symbol "getTokenCache" is marked as @public, but its signature references "TokenCache" which is marked as @beta
    getTokenCache(): TokenCache;
    setLogger(logger: Logger): void;
}

export { INetworkModule }

// @public
export type InMemoryCache = {
    accounts: AccountCache;
    idTokens: IdTokenCache;
    accessTokens: AccessTokenCache;
    refreshTokens: RefreshTokenCache;
    appMetadata: AppMetadataCache;
};

export { InteractionRequiredAuthError }

// @public
export interface IPublicClientApplication {
    acquireTokenByCode(request: AuthorizationCodeRequest): Promise<AuthenticationResult | null>;
    acquireTokenByDeviceCode(request: DeviceCodeRequest): Promise<AuthenticationResult | null>;
    acquireTokenByRefreshToken(request: RefreshTokenRequest): Promise<AuthenticationResult | null>;
    // Warning: (ae-forgotten-export) The symbol "UsernamePasswordRequest" needs to be exported by the entry point index.d.ts
    //
    // @internal
    acquireTokenByUsernamePassword(request: UsernamePasswordRequest): Promise<AuthenticationResult | null>;
    acquireTokenSilent(request: SilentFlowRequest): Promise<AuthenticationResult | null>;
    getAuthCodeUrl(request: AuthorizationUrlRequest): Promise<string>;
    getLogger(): Logger;
    // Warning: (ae-incompatible-release-tags) The symbol "getTokenCache" is marked as @public, but its signature references "TokenCache" which is marked as @beta
    getTokenCache(): TokenCache;
    setLogger(logger: Logger): void;
}

export { ISerializableTokenCache }

// @public
export type JsonCache = {
    Account: Record<string, SerializedAccountEntity>;
    IdToken: Record<string, SerializedIdTokenEntity>;
    AccessToken: Record<string, SerializedAccessTokenEntity>;
    RefreshToken: Record<string, SerializedRefreshTokenEntity>;
    AppMetadata: Record<string, SerializedAppMetadataEntity>;
};

export { Logger }

export { LogLevel }

export { NetworkRequestOptions }

export { NetworkResponse }

// @public
export type OnBehalfOfRequest = Partial<Omit<OnBehalfOfRequest_2, "oboAssertion" | "scopes" | "resourceRequestMethod" | "resourceRequestUri">> & {
    oboAssertion: string;
    scopes: Array<string>;
};

export { PromptValue }

export { ProtocolMode }

// @public
export class PublicClientApplication extends ClientApplication implements IPublicClientApplication {
    constructor(configuration: Configuration);
    acquireTokenByDeviceCode(request: DeviceCodeRequest): Promise<AuthenticationResult | null>;
    acquireTokenByUsernamePassword(request: UsernamePasswordRequest): Promise<AuthenticationResult | null>;
}

// @public
export type RefreshTokenRequest = Partial<Omit<RefreshTokenRequest_2, "scopes" | "refreshToken" | "authenticationScheme" | "resourceRequestMethod" | "resourceRequestUri">> & {
    scopes: Array<string>;
    refreshToken: string;
};

export { ResponseMode }

// @public
export type SerializedAccessTokenEntity = {
    home_account_id: string;
    environment: string;
    credential_type: string;
    client_id: string;
    secret: string;
    realm: string;
    target: string;
    cached_at: string;
    expires_on: string;
    extended_expires_on?: string;
    refresh_on?: string;
    key_id?: string;
    token_type?: string;
};

// @public
export type SerializedAccountEntity = {
    home_account_id: string;
    environment: string;
    realm: string;
    local_account_id: string;
    username: string;
    authority_type: string;
    name?: string;
    client_info?: string;
    last_modification_time?: string;
    last_modification_app?: string;
};

// @public
export type SerializedAppMetadataEntity = {
    client_id: string;
    environment: string;
    family_id?: string;
};

// @public
export type SerializedIdTokenEntity = {
    home_account_id: string;
    environment: string;
    credential_type: string;
    client_id: string;
    secret: string;
    realm: string;
};

// @public
export type SerializedRefreshTokenEntity = {
    home_account_id: string;
    environment: string;
    credential_type: string;
    client_id: string;
    secret: string;
    family_id?: string;
    target?: string;
    realm?: string;
};

// @public (undocumented)
export class Serializer {
    static serializeAccessTokens(atCache: AccessTokenCache): Record<string, SerializedAccessTokenEntity>;
    static serializeAccounts(accCache: AccountCache): Record<string, SerializedAccountEntity>;
    static serializeAllCache(inMemCache: InMemoryCache): JsonCache;
    static serializeAppMetadata(amdtCache: AppMetadataCache): Record<string, SerializedAppMetadataEntity>;
    static serializeIdTokens(idTCache: IdTokenCache): Record<string, SerializedIdTokenEntity>;
    static serializeJSONBlob(data: JsonCache): string;
    static serializeRefreshTokens(rtCache: RefreshTokenCache): Record<string, SerializedRefreshTokenEntity>;
}

export { ServerError }

// @public
export type SilentFlowRequest = Partial<Omit<SilentFlowRequest_2, "account" | "scopes" | "resourceRequestMethod" | "resourceRequestUri">> & {
    account: AccountInfo;
    scopes: Array<string>;
};

// @beta
class Storage_2 extends CacheManager {
    constructor(logger: Logger, clientId: string, cryptoImpl: ICrypto);
    cacheToInMemoryCache(cache: CacheKVStore): InMemoryCache;
    clear(): void;
    containsKey(key: string): boolean;
    // (undocumented)
    emitChange(): void;
    static generateInMemoryCache(cache: string): InMemoryCache;
    static generateJsonCache(inMemoryCache: InMemoryCache): JsonCache;
    getAccessTokenCredential(accessTokenKey: string): AccessTokenEntity | null;
    getAccount(accountKey: string): AccountEntity | null;
    getAppMetadata(appMetadataKey: string): AppMetadataEntity | null;
    getAuthorityMetadata(key: string): AuthorityMetadataEntity | null;
    getAuthorityMetadataKeys(): Array<string>;
    getCache(): CacheKVStore;
    getIdTokenCredential(idTokenKey: string): IdTokenEntity | null;
    getInMemoryCache(): InMemoryCache;
    getItem(key: string): ValidCacheType;
    getKeys(): string[];
    getRefreshTokenCredential(refreshTokenKey: string): RefreshTokenEntity | null;
    getServerTelemetry(serverTelemetrykey: string): ServerTelemetryEntity | null;
    getThrottlingCache(throttlingCacheKey: string): ThrottlingEntity | null;
    inMemoryCacheToCache(inMemoryCache: InMemoryCache): CacheKVStore;
    // (undocumented)
    registerChangeEmitter(func: () => void): void;
    removeItem(key: string): boolean;
    setAccessTokenCredential(accessToken: AccessTokenEntity): void;
    setAccount(account: AccountEntity): void;
    setAppMetadata(appMetadata: AppMetadataEntity): void;
    setAuthorityMetadata(key: string, metadata: AuthorityMetadataEntity): void;
    setCache(cache: CacheKVStore): void;
    setIdTokenCredential(idToken: IdTokenEntity): void;
    setInMemoryCache(inMemoryCache: InMemoryCache): void;
    setItem(key: string, value: ValidCacheType): void;
    setRefreshTokenCredential(refreshToken: RefreshTokenEntity): void;
    setServerTelemetry(serverTelemetryKey: string, serverTelemetry: ServerTelemetryEntity): void;
    setThrottlingCache(throttlingCacheKey: string, throttlingCache: ThrottlingEntity): void;
}

export { Storage_2 as Storage }

// Warning: (ae-forgotten-export) The symbol "ITokenCache" needs to be exported by the entry point index.d.ts
//
// @beta
export class TokenCache implements ISerializableTokenCache, ITokenCache {
    constructor(storage: Storage_2, logger: Logger, cachePlugin?: ICachePlugin);
    deserialize(cache: string): void;
    getAccountByHomeId(homeAccountId: string): Promise<AccountInfo | null>;
    getAccountByLocalId(localAccountId: string): Promise<AccountInfo | null>;
    getAllAccounts(): Promise<AccountInfo[]>;
    getKVStore(): CacheKVStore;
    hasChanged(): boolean;
    removeAccount(account: AccountInfo): Promise<void>;
    serialize(): string;
    }

export { TokenCacheContext }

export { ValidCacheType }


// Warnings were encountered during analysis:
//
// dist/config/Configuration.d.ts:53:5 - (ae-forgotten-export) The symbol "NodeAuthOptions" needs to be exported by the entry point index.d.ts
// dist/config/Configuration.d.ts:54:5 - (ae-forgotten-export) The symbol "CacheOptions" needs to be exported by the entry point index.d.ts
// dist/config/Configuration.d.ts:55:5 - (ae-forgotten-export) The symbol "NodeSystemOptions" needs to be exported by the entry point index.d.ts

// (No @packageDocumentation comment for this package)

```