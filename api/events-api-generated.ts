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
import { UpdateasingleeventRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EventsApi - axios parameter creator
 * @export
 */
export const EventsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get processed events
         * @param {number} days 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProcessedEvents: async (days: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'days' is not null or undefined
            assertParamExists('getProcessedEvents', 'days', days)
            const localVarPath = `/events/processed`;
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
            if (days !== undefined) {
                localVarQueryParameter['days'] = days;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/events/processed',
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
         * @summary Get unprocessed events
         * @param {number} begin 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUnprocessedEvents: async (begin: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'begin' is not null or undefined
            assertParamExists('getUnprocessedEvents', 'begin', begin)
            const localVarPath = `/events/unprocessed`;
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
            if (begin !== undefined) {
                localVarQueryParameter['begin'] = begin;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/events/unprocessed',
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
         * @summary Update an event
         * @param {string} eventId Event Id
         * @param {UpdateasingleeventRequest} updateasingleeventRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEventById: async (eventId: string, updateasingleeventRequest: UpdateasingleeventRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventId' is not null or undefined
            assertParamExists('updateEventById', 'eventId', eventId)
            // verify required parameter 'updateasingleeventRequest' is not null or undefined
            assertParamExists('updateEventById', 'updateasingleeventRequest', updateasingleeventRequest)
            const localVarPath = `/events/{event_id}`
                .replace(`{${"event_id"}}`, encodeURIComponent(String(eventId !== undefined ? eventId : `-event_id-`)));
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
                requestBody: updateasingleeventRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/events/{event_id}',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(updateasingleeventRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EventsApi - functional programming interface
 * @export
 */
export const EventsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EventsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get processed events
         * @param {EventsApiGetProcessedEventsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProcessedEvents(requestParameters: EventsApiGetProcessedEventsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProcessedEvents(requestParameters.days, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get unprocessed events
         * @param {EventsApiGetUnprocessedEventsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUnprocessedEvents(requestParameters: EventsApiGetUnprocessedEventsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUnprocessedEvents(requestParameters.begin, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update an event
         * @param {EventsApiUpdateEventByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateEventById(requestParameters: EventsApiUpdateEventByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const updateasingleeventRequest: UpdateasingleeventRequest = {
                processed: requestParameters.processed
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateEventById(requestParameters.eventId, updateasingleeventRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EventsApi - factory interface
 * @export
 */
export const EventsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EventsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get processed events
         * @param {EventsApiGetProcessedEventsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProcessedEvents(requestParameters: EventsApiGetProcessedEventsRequest, options?: AxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.getProcessedEvents(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get unprocessed events
         * @param {EventsApiGetUnprocessedEventsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUnprocessedEvents(requestParameters: EventsApiGetUnprocessedEventsRequest, options?: AxiosRequestConfig): AxiosPromise<any> {
            return localVarFp.getUnprocessedEvents(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update an event
         * @param {EventsApiUpdateEventByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEventById(requestParameters: EventsApiUpdateEventByIdRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateEventById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getProcessedEvents operation in EventsApi.
 * @export
 * @interface EventsApiGetProcessedEventsRequest
 */
export type EventsApiGetProcessedEventsRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof EventsApiGetProcessedEvents
    */
    readonly days: number
    
}

/**
 * Request parameters for getUnprocessedEvents operation in EventsApi.
 * @export
 * @interface EventsApiGetUnprocessedEventsRequest
 */
export type EventsApiGetUnprocessedEventsRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof EventsApiGetUnprocessedEvents
    */
    readonly begin: number
    
}

/**
 * Request parameters for updateEventById operation in EventsApi.
 * @export
 * @interface EventsApiUpdateEventByIdRequest
 */
export type EventsApiUpdateEventByIdRequest = {
    
    /**
    * Event Id
    * @type {string}
    * @memberof EventsApiUpdateEventById
    */
    readonly eventId: string
    
} & UpdateasingleeventRequest

/**
 * EventsApiGenerated - object-oriented interface
 * @export
 * @class EventsApiGenerated
 * @extends {BaseAPI}
 */
export class EventsApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Get processed events
     * @param {EventsApiGetProcessedEventsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApiGenerated
     */
    public getProcessedEvents(requestParameters: EventsApiGetProcessedEventsRequest, options?: AxiosRequestConfig) {
        return EventsApiFp(this.configuration).getProcessedEvents(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get unprocessed events
     * @param {EventsApiGetUnprocessedEventsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApiGenerated
     */
    public getUnprocessedEvents(requestParameters: EventsApiGetUnprocessedEventsRequest, options?: AxiosRequestConfig) {
        return EventsApiFp(this.configuration).getUnprocessedEvents(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update an event
     * @param {EventsApiUpdateEventByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApiGenerated
     */
    public updateEventById(requestParameters: EventsApiUpdateEventByIdRequest, options?: AxiosRequestConfig) {
        return EventsApiFp(this.configuration).updateEventById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}