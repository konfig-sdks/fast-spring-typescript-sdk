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
import { DataGenerateRevenueReportResponse } from '../models';
// @ts-ignore
import { DataGenerateSubscriptionReportResponse } from '../models';
// @ts-ignore
import { FilterRevenueReportRequest } from '../models';
// @ts-ignore
import { FilterSubscriptionReportRequest } from '../models';
// @ts-ignore
import { GenerateRevenueReportRequest } from '../models';
// @ts-ignore
import { GenerateSubscriptionReportRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * DataApi - axios parameter creator
 * @export
 */
export const DataApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Download a report based on job ID.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadReportById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('downloadReportById', 'id', id)
            const localVarPath = `/data/v1/downloads/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
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
                pathTemplate: '/data/v1/downloads/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Generates a revenue report
         * @param {GenerateRevenueReportRequest} generateRevenueReportRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateRevenueReport: async (generateRevenueReportRequest: GenerateRevenueReportRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'generateRevenueReportRequest' is not null or undefined
            assertParamExists('generateRevenueReport', 'generateRevenueReportRequest', generateRevenueReportRequest)
            const localVarPath = `/data/v1/revenue`;
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
                requestBody: generateRevenueReportRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/data/v1/revenue',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(generateRevenueReportRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Generates a subscription report
         * @param {GenerateSubscriptionReportRequest} generateSubscriptionReportRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateSubscriptionReport: async (generateSubscriptionReportRequest: GenerateSubscriptionReportRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'generateSubscriptionReportRequest' is not null or undefined
            assertParamExists('generateSubscriptionReport', 'generateSubscriptionReportRequest', generateSubscriptionReportRequest)
            const localVarPath = `/data/v1/subscription`;
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
                requestBody: generateSubscriptionReportRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/data/v1/subscription',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(generateSubscriptionReportRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get job information based on a job ID.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobInformation: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getJobInformation', 'id', id)
            const localVarPath = `/data/v1/jobs/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
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
                pathTemplate: '/data/v1/jobs/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get information from a job listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobInformation_1: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/data/v1/jobs`;
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
                pathTemplate: '/data/v1/jobs',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Reset cache for data service end points.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetCacheForServiceEndPoints: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/data/v1/util/cache`;
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
                pathTemplate: '/data/v1/util/cache',
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
 * DataApi - functional programming interface
 * @export
 */
export const DataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DataApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Download a report based on job ID.
         * @param {DataApiDownloadReportByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downloadReportById(requestParameters: DataApiDownloadReportByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.downloadReportById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Generates a revenue report
         * @param {DataApiGenerateRevenueReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateRevenueReport(requestParameters: DataApiGenerateRevenueReportRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DataGenerateRevenueReportResponse>> {
            const generateRevenueReportRequest: GenerateRevenueReportRequest = {
                filter: requestParameters.filter,
                reportColumns: requestParameters.reportColumns,
                groupBy: requestParameters.groupBy,
                pageCount: requestParameters.pageCount,
                pageNumber: requestParameters.pageNumber,
                async: requestParameters.async,
                notificationEmails: requestParameters.notificationEmails
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateRevenueReport(generateRevenueReportRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Generates a subscription report
         * @param {DataApiGenerateSubscriptionReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateSubscriptionReport(requestParameters: DataApiGenerateSubscriptionReportRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DataGenerateSubscriptionReportResponse>> {
            const generateSubscriptionReportRequest: GenerateSubscriptionReportRequest = {
                filter: requestParameters.filter,
                reportColumns: requestParameters.reportColumns,
                groupBy: requestParameters.groupBy,
                pageCount: requestParameters.pageCount,
                pageNumber: requestParameters.pageNumber,
                async: requestParameters.async,
                notificationEmails: requestParameters.notificationEmails
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateSubscriptionReport(generateSubscriptionReportRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get job information based on a job ID.
         * @param {DataApiGetJobInformationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJobInformation(requestParameters: DataApiGetJobInformationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJobInformation(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get information from a job listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJobInformation_1(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJobInformation_1(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Reset cache for data service end points.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetCacheForServiceEndPoints(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetCacheForServiceEndPoints(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DataApi - factory interface
 * @export
 */
export const DataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DataApiFp(configuration)
    return {
        /**
         * 
         * @summary Download a report based on job ID.
         * @param {DataApiDownloadReportByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadReportById(requestParameters: DataApiDownloadReportByIdRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.downloadReportById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Generates a revenue report
         * @param {DataApiGenerateRevenueReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateRevenueReport(requestParameters: DataApiGenerateRevenueReportRequest, options?: AxiosRequestConfig): AxiosPromise<DataGenerateRevenueReportResponse> {
            return localVarFp.generateRevenueReport(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Generates a subscription report
         * @param {DataApiGenerateSubscriptionReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateSubscriptionReport(requestParameters: DataApiGenerateSubscriptionReportRequest, options?: AxiosRequestConfig): AxiosPromise<DataGenerateSubscriptionReportResponse> {
            return localVarFp.generateSubscriptionReport(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get job information based on a job ID.
         * @param {DataApiGetJobInformationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobInformation(requestParameters: DataApiGetJobInformationRequest, options?: AxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.getJobInformation(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get information from a job listing.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobInformation_1(options?: AxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.getJobInformation_1(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Reset cache for data service end points.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetCacheForServiceEndPoints(options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.resetCacheForServiceEndPoints(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for downloadReportById operation in DataApi.
 * @export
 * @interface DataApiDownloadReportByIdRequest
 */
export type DataApiDownloadReportByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof DataApiDownloadReportById
    */
    readonly id: string
    
}

/**
 * Request parameters for generateRevenueReport operation in DataApi.
 * @export
 * @interface DataApiGenerateRevenueReportRequest
 */
export type DataApiGenerateRevenueReportRequest = {
    
} & GenerateRevenueReportRequest

/**
 * Request parameters for generateSubscriptionReport operation in DataApi.
 * @export
 * @interface DataApiGenerateSubscriptionReportRequest
 */
export type DataApiGenerateSubscriptionReportRequest = {
    
} & GenerateSubscriptionReportRequest

/**
 * Request parameters for getJobInformation operation in DataApi.
 * @export
 * @interface DataApiGetJobInformationRequest
 */
export type DataApiGetJobInformationRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof DataApiGetJobInformation
    */
    readonly id: string
    
}

/**
 * DataApiGenerated - object-oriented interface
 * @export
 * @class DataApiGenerated
 * @extends {BaseAPI}
 */
export class DataApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Download a report based on job ID.
     * @param {DataApiDownloadReportByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApiGenerated
     */
    public downloadReportById(requestParameters: DataApiDownloadReportByIdRequest, options?: AxiosRequestConfig) {
        return DataApiFp(this.configuration).downloadReportById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Generates a revenue report
     * @param {DataApiGenerateRevenueReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApiGenerated
     */
    public generateRevenueReport(requestParameters: DataApiGenerateRevenueReportRequest, options?: AxiosRequestConfig) {
        return DataApiFp(this.configuration).generateRevenueReport(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Generates a subscription report
     * @param {DataApiGenerateSubscriptionReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApiGenerated
     */
    public generateSubscriptionReport(requestParameters: DataApiGenerateSubscriptionReportRequest, options?: AxiosRequestConfig) {
        return DataApiFp(this.configuration).generateSubscriptionReport(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get job information based on a job ID.
     * @param {DataApiGetJobInformationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApiGenerated
     */
    public getJobInformation(requestParameters: DataApiGetJobInformationRequest, options?: AxiosRequestConfig) {
        return DataApiFp(this.configuration).getJobInformation(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get information from a job listing.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApiGenerated
     */
    public getJobInformation_1(options?: AxiosRequestConfig) {
        return DataApiFp(this.configuration).getJobInformation_1(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Reset cache for data service end points.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApiGenerated
     */
    public resetCacheForServiceEndPoints(options?: AxiosRequestConfig) {
        return DataApiFp(this.configuration).resetCacheForServiceEndPoints(options).then((request) => request(this.axios, this.basePath));
    }
}
