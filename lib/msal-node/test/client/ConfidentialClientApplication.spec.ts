import { ConfidentialClientApplication } from './../../src/client/ConfidentialClientApplication';
import { Authority, ClientConfiguration, AuthorizationCodeRequest, AuthorityFactory, AuthorizationCodeClient, RefreshTokenRequest, RefreshTokenClient } from '@azure/msal-common';
import { TEST_CONSTANTS } from '../utils/TestConstants';
import { Configuration } from "../../src/config/Configuration";
import { mocked } from 'ts-jest/utils';

jest.mock('@azure/msal-common');

describe('ConfidentialClientApplication', () => {
    const authority: Authority = {
        resolveEndpointsAsync: () => {
            return new Promise<void>(resolve => {
                resolve();
            });
        },
        discoveryComplete: () => {
            return true;
        },
    } as Authority;

    let appConfig: Configuration = {
        auth: {
            clientId: TEST_CONSTANTS.CLIENT_ID,
            authority: TEST_CONSTANTS.AUTHORITY,
            clientSecret: TEST_CONSTANTS.CLIENT_SECRET,
        },
    };

    const expectedConfig: ClientConfiguration = {
        authOptions: {
            clientId: TEST_CONSTANTS.CLIENT_ID,
            authority: authority,
            knownAuthorities: [],
            cloudDiscoveryMetadata: ""
        },
        clientCredentials: {
            clientSecret: TEST_CONSTANTS.CLIENT_SECRET
        }
    };
    
    test('exports a class', () => {
        const authApp = new ConfidentialClientApplication(appConfig);
        expect(authApp).toBeInstanceOf(ConfidentialClientApplication);
    });
    
    test('acquireTokenByAuthorizationCode', async () => {
        const request: AuthorizationCodeRequest = {
            scopes: TEST_CONSTANTS.DEFAULT_GRAPH_SCOPE,
            redirectUri: TEST_CONSTANTS.REDIRECT_URI,
            code: TEST_CONSTANTS.AUTHORIZATION_CODE,
        };

        mocked(AuthorityFactory.createInstance).mockReturnValueOnce(authority);

        const authApp = new ConfidentialClientApplication(appConfig);
        await authApp.acquireTokenByCode(request);
        expect(AuthorizationCodeClient).toHaveBeenCalledTimes(1);
        expect(AuthorizationCodeClient).toHaveBeenCalledWith(
            expect.objectContaining(expectedConfig)
        );
    });
    
    test('acquireTokenByRefreshToken', async () => {
        const request: RefreshTokenRequest = {
            scopes: TEST_CONSTANTS.DEFAULT_GRAPH_SCOPE,
            refreshToken: TEST_CONSTANTS.REFRESH_TOKEN,
        };

        mocked(AuthorityFactory.createInstance).mockReturnValueOnce(authority);

        const authApp = new ConfidentialClientApplication(appConfig);
        await authApp.acquireTokenByRefreshToken(request);
        expect(RefreshTokenClient).toHaveBeenCalledTimes(1);
        expect(RefreshTokenClient).toHaveBeenCalledWith(
            expect.objectContaining(expectedConfig)
        );
    });
});
