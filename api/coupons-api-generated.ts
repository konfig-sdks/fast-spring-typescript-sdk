/* tslint:disable */
/* eslint-disable */
/*
FastSpring API

The FastSpring API and its supported requests, data, endpoints, and rate limits.

The FastSpring API is a backend service you can use to communicate with your FastSpring Store programmatically. It requires basic understanding of HTTP communication methods. The primary API communication methods include:
- **GET** - request data from your store
- **POST** - send data to your store, such as creating a new product record
- **DELETE** - remove data from your store

The structure of the JSON data sent and received using the API is very similar to Webhooks. However, using the FastSpring API, you initiate all communication with your FastSpring Store.

If you prefer a client-side method of communicating with your FastSpring Store and generating dynamic webpage content, check out the [Store Builder Library](https://fastspring.com/docs/get-started-with-store-builder-library/).

## Access the API

#### API Credentials and Authentication

FastSpring API credentials consist of a single username and password for your entire Store. The username and password are used for [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) when making requests to the API.

#### Obtain Your API Credentials

1. Log on to the FastSpring App and navigate to [Integrations](https://fastspring.com/docs/integrations) > **API Credentials**. Initially, the only option on this page is the **Create** command.

2. Click **Create** to generate your API **Username** and **Password**. The page automatically refreshes, and then your credentials are displayed.

3. Make a note of the credentials and store them securely.

The API credentials allow complete access and control over your FastSpring Store. You will not be able to view the password in the FastSpring App after this session. If you forget your API credentials, you can reset them, however any of your stored procedures that rely on API access must be updated immediately with the new credentials. Otherwise, the API requests will fail.

## API Requests

**Make all requests to https://api.fastspring.com**

When you make your requests, consider the following:
- Ensure that the HTTP methods for all calls use uppercase letters (“GET,” “POST,” “DELETE”) Lowercase letters may result in a 404 error response.
- FastSpring requires TLS 1.2 (or later) encryption for all calls to the FastSpring API. 
- The API requires a **User-Agent** header in all requests. If your request does not include it, you may receive an 401 error message when attempting to make API requests.
- The API uses basic authentication and does not support URL-encoded authentication. Use **Base64** to encode your username and password in the header.


The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AddcouponcodestoacouponRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CouponsApi - axios parameter creator
 * @export
 */
export const CouponsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Assign codes to a coupon
         * @param {string} couponId Coupon Id
         * @param {AddcouponcodestoacouponRequest} addcouponcodestoacouponRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignCodesToCoupon: async (couponId: string, addcouponcodestoacouponRequest: AddcouponcodestoacouponRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'couponId' is not null or undefined
            assertParamExists('assignCodesToCoupon', 'couponId', couponId)
            // verify required parameter 'addcouponcodestoacouponRequest' is not null or undefined
            assertParamExists('assignCodesToCoupon', 'addcouponcodestoacouponRequest', addcouponcodestoacouponRequest)
            const localVarPath = `/coupons/{coupon_id}`
                .replace(`{${"coupon_id"}}`, encodeURIComponent(String(couponId !== undefined ? couponId : `-coupon_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: addcouponcodestoacouponRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/coupons/{coupon_id}',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(addcouponcodestoacouponRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a coupon
         * @param {any} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewCoupon: async (body: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('createNewCoupon', 'body', body)
            const localVarPath = `/coupons`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: body,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/coupons',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete all codes associated with a coupon
         * @param {string} couponId Coupon Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAssociatedCodes: async (couponId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'couponId' is not null or undefined
            assertParamExists('deleteAssociatedCodes', 'couponId', couponId)
            const localVarPath = `/coupons/{coupon_id}/codes`
                .replace(`{${"coupon_id"}}`, encodeURIComponent(String(couponId !== undefined ? couponId : `-coupon_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/coupons/{coupon_id}/codes',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get coupon codes assigned to a coupon
         * @param {string} couponId Coupon Id
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCodesAssignedToCoupon: async (couponId: string, body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'couponId' is not null or undefined
            assertParamExists('getCodesAssignedToCoupon', 'couponId', couponId)
            const localVarPath = `/coupons/{coupon_id}/codes`
                .replace(`{${"coupon_id"}}`, encodeURIComponent(String(couponId !== undefined ? couponId : `-coupon_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: body,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/coupons/{coupon_id}/codes',
                httpMethod: 'GET'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieve coupon details
         * @param {string} couponId Coupon Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails: async (couponId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'couponId' is not null or undefined
            assertParamExists('getDetails', 'couponId', couponId)
            const localVarPath = `/coupons/{coupon_id}`
                .replace(`{${"coupon_id"}}`, encodeURIComponent(String(couponId !== undefined ? couponId : `-coupon_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication auth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/coupons/{coupon_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CouponsApi - functional programming interface
 * @export
 */
export const CouponsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CouponsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Assign codes to a coupon
         * @param {CouponsApiAssignCodesToCouponRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async assignCodesToCoupon(requestParameters: CouponsApiAssignCodesToCouponRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const addcouponcodestoacouponRequest: AddcouponcodestoacouponRequest = {
                codes: requestParameters.codes
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.assignCodesToCoupon(requestParameters.couponId, addcouponcodestoacouponRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create a coupon
         * @param {CouponsApiCreateNewCouponRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewCoupon(requestParameters: CouponsApiCreateNewCouponRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const body: any = requestParameters;
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewCoupon(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete all codes associated with a coupon
         * @param {CouponsApiDeleteAssociatedCodesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAssociatedCodes(requestParameters: CouponsApiDeleteAssociatedCodesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAssociatedCodes(requestParameters.couponId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get coupon codes assigned to a coupon
         * @param {CouponsApiGetCodesAssignedToCouponRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCodesAssignedToCoupon(requestParameters: CouponsApiGetCodesAssignedToCouponRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const body: any = requestParameters;
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCodesAssignedToCoupon(requestParameters.couponId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve coupon details
         * @param {CouponsApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetails(requestParameters: CouponsApiGetDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetails(requestParameters.couponId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CouponsApi - factory interface
 * @export
 */
export const CouponsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CouponsApiFp(configuration)
    return {
        /**
         * 
         * @summary Assign codes to a coupon
         * @param {CouponsApiAssignCodesToCouponRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignCodesToCoupon(requestParameters: CouponsApiAssignCodesToCouponRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.assignCodesToCoupon(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a coupon
         * @param {CouponsApiCreateNewCouponRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewCoupon(requestParameters: CouponsApiCreateNewCouponRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.createNewCoupon(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete all codes associated with a coupon
         * @param {CouponsApiDeleteAssociatedCodesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAssociatedCodes(requestParameters: CouponsApiDeleteAssociatedCodesRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteAssociatedCodes(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get coupon codes assigned to a coupon
         * @param {CouponsApiGetCodesAssignedToCouponRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCodesAssignedToCoupon(requestParameters: CouponsApiGetCodesAssignedToCouponRequest, options?: AxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.getCodesAssignedToCoupon(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve coupon details
         * @param {CouponsApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails(requestParameters: CouponsApiGetDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.getDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for assignCodesToCoupon operation in CouponsApi.
 * @export
 * @interface CouponsApiAssignCodesToCouponRequest
 */
export type CouponsApiAssignCodesToCouponRequest = {
    
    /**
    * Coupon Id
    * @type {string}
    * @memberof CouponsApiAssignCodesToCoupon
    */
    readonly couponId: string
    
} & AddcouponcodestoacouponRequest

/**
 * Request parameters for createNewCoupon operation in CouponsApi.
 * @export
 * @interface CouponsApiCreateNewCouponRequest
 */
export type CouponsApiCreateNewCouponRequest = any

/**
 * Request parameters for deleteAssociatedCodes operation in CouponsApi.
 * @export
 * @interface CouponsApiDeleteAssociatedCodesRequest
 */
export type CouponsApiDeleteAssociatedCodesRequest = {
    
    /**
    * Coupon Id
    * @type {string}
    * @memberof CouponsApiDeleteAssociatedCodes
    */
    readonly couponId: string
    
}

/**
 * Request parameters for getCodesAssignedToCoupon operation in CouponsApi.
 * @export
 * @interface CouponsApiGetCodesAssignedToCouponRequest
 */
export type CouponsApiGetCodesAssignedToCouponRequest = {
    
    /**
    * Coupon Id
    * @type {string}
    * @memberof CouponsApiGetCodesAssignedToCoupon
    */
    readonly couponId: string
    
} & any

/**
 * Request parameters for getDetails operation in CouponsApi.
 * @export
 * @interface CouponsApiGetDetailsRequest
 */
export type CouponsApiGetDetailsRequest = {
    
    /**
    * Coupon Id
    * @type {string}
    * @memberof CouponsApiGetDetails
    */
    readonly couponId: string
    
}

/**
 * CouponsApiGenerated - object-oriented interface
 * @export
 * @class CouponsApiGenerated
 * @extends {BaseAPI}
 */
export class CouponsApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Assign codes to a coupon
     * @param {CouponsApiAssignCodesToCouponRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CouponsApiGenerated
     */
    public assignCodesToCoupon(requestParameters: CouponsApiAssignCodesToCouponRequest, options?: AxiosRequestConfig) {
        return CouponsApiFp(this.configuration).assignCodesToCoupon(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create a coupon
     * @param {CouponsApiCreateNewCouponRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CouponsApiGenerated
     */
    public createNewCoupon(requestParameters: CouponsApiCreateNewCouponRequest, options?: AxiosRequestConfig) {
        return CouponsApiFp(this.configuration).createNewCoupon(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete all codes associated with a coupon
     * @param {CouponsApiDeleteAssociatedCodesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CouponsApiGenerated
     */
    public deleteAssociatedCodes(requestParameters: CouponsApiDeleteAssociatedCodesRequest, options?: AxiosRequestConfig) {
        return CouponsApiFp(this.configuration).deleteAssociatedCodes(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get coupon codes assigned to a coupon
     * @param {CouponsApiGetCodesAssignedToCouponRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CouponsApiGenerated
     */
    public getCodesAssignedToCoupon(requestParameters: CouponsApiGetCodesAssignedToCouponRequest, options?: AxiosRequestConfig) {
        return CouponsApiFp(this.configuration).getCodesAssignedToCoupon(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve coupon details
     * @param {CouponsApiGetDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CouponsApiGenerated
     */
    public getDetails(requestParameters: CouponsApiGetDetailsRequest, options?: AxiosRequestConfig) {
        return CouponsApiFp(this.configuration).getDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
