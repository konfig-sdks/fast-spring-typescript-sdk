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
import type * as buffer from "buffer"

import { AddressResponse } from './address-response';
import { ContactResponse } from './contact-response';
import { ItemResponse } from './item-response';
import { Link } from './link';
import { StatusHistoryResponse } from './status-history-response';
import { TagResponse } from './tag-response';

/**
 * 
 * @export
 * @interface QuoteResponse
 */
export interface QuoteResponse {
    /**
     * 
     * @type {Array<TagResponse>}
     * @memberof QuoteResponse
     */
    'tags'?: Array<TagResponse>;
    /**
     * The quote id
     * @type {string}
     * @memberof QuoteResponse
     */
    'id'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof QuoteResponse
     */
    'buyerGenerated'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'coupon'?: string;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'created'?: string;
    /**
     * 
     * @type {ContactResponse}
     * @memberof QuoteResponse
     */
    'createdBy'?: ContactResponse;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'currency'?: string;
    /**
     * 
     * @type {number}
     * @memberof QuoteResponse
     */
    'discount'?: number;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'discountDisplay'?: string;
    /**
     * 
     * @type {number}
     * @memberof QuoteResponse
     */
    'discountInPayoutCurrency'?: number;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'discountInPayoutCurrencyDisplay'?: string;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'expires'?: string;
    /**
     * 
     * @type {number}
     * @memberof QuoteResponse
     */
    'expirationDateDays'?: number;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'fulfillmentTerm'?: QuoteResponseFulfillmentTermEnum;
    /**
     * 
     * @type {Array<ItemResponse>}
     * @memberof QuoteResponse
     */
    'items'?: Array<ItemResponse>;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'notes'?: string;
    /**
     * 
     * @type {number}
     * @memberof QuoteResponse
     */
    'netTermsDays'?: number;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'quoteUrl'?: string;
    /**
     * 
     * @type {ContactResponse}
     * @memberof QuoteResponse
     */
    'recipient'?: ContactResponse;
    /**
     * 
     * @type {AddressResponse}
     * @memberof QuoteResponse
     */
    'recipientAddress'?: AddressResponse;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'siteId'?: string;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'status'?: QuoteResponseStatusEnum;
    /**
     * 
     * @type {Set<StatusHistoryResponse>}
     * @memberof QuoteResponse
     */
    'statusHistory'?: Set<StatusHistoryResponse>;
    /**
     * 
     * @type {number}
     * @memberof QuoteResponse
     */
    'subtotal'?: number;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'subtotalDisplay'?: string;
    /**
     * 
     * @type {number}
     * @memberof QuoteResponse
     */
    'subtotalInPayoutCurrency'?: number;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'subtotalInPayoutCurrencyDisplay'?: string;
    /**
     * 
     * @type {number}
     * @memberof QuoteResponse
     */
    'tax'?: number;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'taxType'?: string;
    /**
     * 
     * @type {number}
     * @memberof QuoteResponse
     */
    'total'?: number;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'totalDisplay'?: string;
    /**
     * 
     * @type {number}
     * @memberof QuoteResponse
     */
    'totalInPayoutCurrency'?: number;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'totalInPayoutCurrencyDisplay'?: string;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'updated'?: string;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'taxId'?: string;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'source'?: string;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'sourceIP'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof QuoteResponse
     */
    'isGrossTax'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof QuoteResponse
     */
    'invoiceId'?: string;
    /**
     * 
     * @type {Array<Link>}
     * @memberof QuoteResponse
     */
    'links'?: Array<Link>;
}

type QuoteResponseFulfillmentTermEnum = 'ON_PAYMENT' | 'ON_QUOTE_ACCEPTANCE'
type QuoteResponseStatusEnum = 'OPEN' | 'CANCELED' | 'AWAITING_PAYMENT' | 'COMPLETED' | 'EXPIRED'


