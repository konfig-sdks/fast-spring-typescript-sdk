<div align="left">

[![Visit Fastspring](./header.png)](https://fastspring.com&#x2F;)

# [Fastspring](https://fastspring.com&#x2F;)<a id="fastspring"></a>

The FastSpring API and its supported requests, data, endpoints, and rate limits.

The FastSpring API is a backend service you can use to communicate with your FastSpring Store programmatically. It requires basic understanding of HTTP communication methods. The primary API communication methods include:
- **GET** - request data from your store
- **POST** - send data to your store, such as creating a new product record
- **DELETE** - remove data from your store

The structure of the JSON data sent and received using the API is very similar to Webhooks. However, using the FastSpring API, you initiate all communication with your FastSpring Store.

If you prefer a client-side method of communicating with your FastSpring Store and generating dynamic webpage content, check out the [Store Builder Library](https://fastspring.com/docs/get-started-with-store-builder-library/).

## Access the API<a id="access-the-api"></a>

#### API Credentials and Authentication<a id="api-credentials-and-authentication"></a>

FastSpring API credentials consist of a single username and password for your entire Store. The username and password are used for [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) when making requests to the API.

#### Obtain Your API Credentials<a id="obtain-your-api-credentials"></a>

1. Log on to the FastSpring App and navigate to [Integrations](https://fastspring.com/docs/integrations) > **API Credentials**. Initially, the only option on this page is the **Create** command.

2. Click **Create** to generate your API **Username** and **Password**. The page automatically refreshes, and then your credentials are displayed.

3. Make a note of the credentials and store them securely.

The API credentials allow complete access and control over your FastSpring Store. You will not be able to view the password in the FastSpring App after this session. If you forget your API credentials, you can reset them, however any of your stored procedures that rely on API access must be updated immediately with the new credentials. Otherwise, the API requests will fail.

## API Requests<a id="api-requests"></a>

**Make all requests to https://api.fastspring.com**

When you make your requests, consider the following:
- Ensure that the HTTP methods for all calls use uppercase letters (“GET,” “POST,” “DELETE”) Lowercase letters may result in a 404 error response.
- FastSpring requires TLS 1.2 (or later) encryption for all calls to the FastSpring API. 
- The API requires a **User-Agent** header in all requests. If your request does not include it, you may receive an 401 error message when attempting to make API requests.
- The API uses basic authentication and does not support URL-encoded authentication. Use **Base64** to encode your username and password in the header.


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`fastspring.accounts.createNewAccount`](#fastspringaccountscreatenewaccount)
  * [`fastspring.accounts.getAccountById`](#fastspringaccountsgetaccountbyid)
  * [`fastspring.accounts.getAuthenticatedManagementUrl`](#fastspringaccountsgetauthenticatedmanagementurl)
  * [`fastspring.accounts.getByParameter`](#fastspringaccountsgetbyparameter)
  * [`fastspring.accounts.updateAccountById`](#fastspringaccountsupdateaccountbyid)
  * [`fastspring.coupons.assignCodesToCoupon`](#fastspringcouponsassigncodestocoupon)
  * [`fastspring.coupons.createNewCoupon`](#fastspringcouponscreatenewcoupon)
  * [`fastspring.coupons.deleteAssociatedCodes`](#fastspringcouponsdeleteassociatedcodes)
  * [`fastspring.coupons.getCodesAssignedToCoupon`](#fastspringcouponsgetcodesassignedtocoupon)
  * [`fastspring.coupons.getDetails`](#fastspringcouponsgetdetails)
  * [`fastspring.data.downloadReportById`](#fastspringdatadownloadreportbyid)
  * [`fastspring.data.generateRevenueReport`](#fastspringdatageneraterevenuereport)
  * [`fastspring.data.generateSubscriptionReport`](#fastspringdatageneratesubscriptionreport)
  * [`fastspring.data.getJobInformation`](#fastspringdatagetjobinformation)
  * [`fastspring.data.getJobInformation_0`](#fastspringdatagetjobinformation_0)
  * [`fastspring.data.resetCacheForServiceEndPoints`](#fastspringdataresetcacheforserviceendpoints)
  * [`fastspring.events.getProcessedEvents`](#fastspringeventsgetprocessedevents)
  * [`fastspring.events.getUnprocessedEvents`](#fastspringeventsgetunprocessedevents)
  * [`fastspring.events.updateEventById`](#fastspringeventsupdateeventbyid)
  * [`fastspring.orders.getByDateRange`](#fastspringordersgetbydaterange)
  * [`fastspring.orders.getByEndDate`](#fastspringordersgetbyenddate)
  * [`fastspring.orders.getById`](#fastspringordersgetbyid)
  * [`fastspring.orders.getByProductPath`](#fastspringordersgetbyproductpath)
  * [`fastspring.orders.getByProductPathAndDateRange`](#fastspringordersgetbyproductpathanddaterange)
  * [`fastspring.orders.getOrdersWithReturns`](#fastspringordersgetorderswithreturns)
  * [`fastspring.orders.updateTagsAndAttributes`](#fastspringordersupdatetagsandattributes)
  * [`fastspring.products.createAndUpdate`](#fastspringproductscreateandupdate)
  * [`fastspring.products.createOrUpdateOffers`](#fastspringproductscreateorupdateoffers)
  * [`fastspring.products.deleteProductById`](#fastspringproductsdeleteproductbyid)
  * [`fastspring.products.getAllOffersByType`](#fastspringproductsgetalloffersbytype)
  * [`fastspring.products.getAllProductIds`](#fastspringproductsgetallproductids)
  * [`fastspring.products.getAllProductPrices`](#fastspringproductsgetallproductprices)
  * [`fastspring.products.getAllProductPricesByCountry`](#fastspringproductsgetallproductpricesbycountry)
  * [`fastspring.products.getAllProductPricesByCountryAndCurrency`](#fastspringproductsgetallproductpricesbycountryandcurrency)
  * [`fastspring.products.getByProductPath`](#fastspringproductsgetbyproductpath)
  * [`fastspring.products.getPriceById`](#fastspringproductsgetpricebyid)
  * [`fastspring.products.getProductPriceByCountry`](#fastspringproductsgetproductpricebycountry)
  * [`fastspring.products.getProductPriceByCountryAndCurrency`](#fastspringproductsgetproductpricebycountryandcurrency)
  * [`fastspring.quotes.cancelQuoteById`](#fastspringquotescancelquotebyid)
  * [`fastspring.quotes.createNewQuote`](#fastspringquotescreatenewquote)
  * [`fastspring.quotes.deleteQuoteById`](#fastspringquotesdeletequotebyid)
  * [`fastspring.quotes.getAllQuotes`](#fastspringquotesgetallquotes)
  * [`fastspring.quotes.getById`](#fastspringquotesgetbyid)
  * [`fastspring.quotes.updateQuoteById`](#fastspringquotesupdatequotebyid)
  * [`fastspring.returns.createNewReturn`](#fastspringreturnscreatenewreturn)
  * [`fastspring.returns.getById`](#fastspringreturnsgetbyid)
  * [`fastspring.sessions.createNewSession`](#fastspringsessionscreatenewsession)
  * [`fastspring.subscriptions.cancelSubscriptionById`](#fastspringsubscriptionscancelsubscriptionbyid)
  * [`fastspring.subscriptions.convertExpiredTrialWithoutPaymentMethod`](#fastspringsubscriptionsconvertexpiredtrialwithoutpaymentmethod)
  * [`fastspring.subscriptions.getAllSubscriptions`](#fastspringsubscriptionsgetallsubscriptions)
  * [`fastspring.subscriptions.getById`](#fastspringsubscriptionsgetbyid)
  * [`fastspring.subscriptions.getEntries`](#fastspringsubscriptionsgetentries)
  * [`fastspring.subscriptions.getPlanChangeHistory`](#fastspringsubscriptionsgetplanchangehistory)
  * [`fastspring.subscriptions.pauseSubscription`](#fastspringsubscriptionspausesubscription)
  * [`fastspring.subscriptions.previewPlanChange`](#fastspringsubscriptionspreviewplanchange)
  * [`fastspring.subscriptions.rebillManagedSubscription`](#fastspringsubscriptionsrebillmanagedsubscription)
  * [`fastspring.subscriptions.removeScheduledPause`](#fastspringsubscriptionsremovescheduledpause)
  * [`fastspring.subscriptions.resumeSubscription`](#fastspringsubscriptionsresumesubscription)
  * [`fastspring.subscriptions.updateSubscription`](#fastspringsubscriptionsupdatesubscription)
  * [`fastspring.webhooks.updateWebhookKeySecret`](#fastspringwebhooksupdatewebhookkeysecret)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=FastSpring&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { FastSpring } from "fast-spring-typescript-sdk";

const fastspring = new FastSpring({
  // Defining the base path is optional and defaults to https://api.fastspring.com
  // basePath: "https://api.fastspring.com",
});

const createNewAccountResponse = await fastspring.accounts.createNewAccount({});

console.log(createNewAccountResponse);
```

## Reference<a id="reference"></a>


### `fastspring.accounts.createNewAccount`<a id="fastspringaccountscreatenewaccount"></a>

Create an account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewAccountResponse = await fastspring.accounts.createNewAccount({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contact: `ContactRequest`<a id="contact-contactrequest"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.accounts.getAccountById`<a id="fastspringaccountsgetaccountbyid"></a>

Get an account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAccountByIdResponse = await fastspring.accounts.getAccountById({
  accountId: "accountId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

Account Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{account_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.accounts.getAuthenticatedManagementUrl`<a id="fastspringaccountsgetauthenticatedmanagementurl"></a>

Get authenticated account management URL

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAuthenticatedManagementUrlResponse =
  await fastspring.accounts.getAuthenticatedManagementUrl({
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

Account Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{account_id}/authenticate` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.accounts.getByParameter`<a id="fastspringaccountsgetbyparameter"></a>

If no parameters are sent, the operation will return a list of accountIDs.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByParameterResponse = await fastspring.accounts.getByParameter({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

Account email

##### custom: `string`<a id="custom-string"></a>

Account custom key

##### global: `string`<a id="global-string"></a>

Account global key

##### orderID: `string`<a id="orderid-string"></a>

Order id

##### orderReference: `string`<a id="orderreference-string"></a>

Order Reference

##### subscriptionId: `string`<a id="subscriptionid-string"></a>

Subscription ID

##### products: `string`<a id="products-string"></a>

Product ID

##### subscriptions: `string`<a id="subscriptions-string"></a>

\"active\", \"ended\", \"canceled\", \"started\" will return accounts with subscriptions in the corresponding state

##### refunds: `string`<a id="refunds-string"></a>

true

##### limit: `number`<a id="limit-number"></a>

integer value indicating the maximum number of records to be returned Or, when used together with page, the maximum number of records to be returned per page

##### page: `number`<a id="page-number"></a>

Integer value that must be used in conjunction with limit to specify which page of results should be returned

#### 🔄 Return<a id="🔄-return"></a>

[AccountsGetByParameterResponse](./models/accounts-get-by-parameter-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.accounts.updateAccountById`<a id="fastspringaccountsupdateaccountbyid"></a>

Update account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAccountByIdResponse = await fastspring.accounts.updateAccountById({
  accountId: "accountId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

Account Id

##### contact: `ContactRequest`<a id="contact-contactrequest"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{account_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.coupons.assignCodesToCoupon`<a id="fastspringcouponsassigncodestocoupon"></a>

Assign codes to a coupon

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const assignCodesToCouponResponse =
  await fastspring.coupons.assignCodesToCoupon({
    couponId: "couponId_example",
    codes: ["codes_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### codes: `string`[]<a id="codes-string"></a>

##### couponId: `string`<a id="couponid-string"></a>

Coupon Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/coupons/{coupon_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.coupons.createNewCoupon`<a id="fastspringcouponscreatenewcoupon"></a>

Create a coupon

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewCouponResponse = await fastspring.coupons.createNewCoupon();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/coupons` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.coupons.deleteAssociatedCodes`<a id="fastspringcouponsdeleteassociatedcodes"></a>

Delete all codes associated with a coupon

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteAssociatedCodesResponse =
  await fastspring.coupons.deleteAssociatedCodes({
    couponId: "couponId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### couponId: `string`<a id="couponid-string"></a>

Coupon Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/coupons/{coupon_id}/codes` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.coupons.getCodesAssignedToCoupon`<a id="fastspringcouponsgetcodesassignedtocoupon"></a>

Get coupon codes assigned to a coupon

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCodesAssignedToCouponResponse =
  await fastspring.coupons.getCodesAssignedToCoupon({
    couponId: "couponId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### couponId: `string`<a id="couponid-string"></a>

Coupon Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/coupons/{coupon_id}/codes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.coupons.getDetails`<a id="fastspringcouponsgetdetails"></a>

Retrieve coupon details

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await fastspring.coupons.getDetails({
  couponId: "couponId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### couponId: `string`<a id="couponid-string"></a>

Coupon Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/coupons/{coupon_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.data.downloadReportById`<a id="fastspringdatadownloadreportbyid"></a>

Download a report based on job ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadReportByIdResponse = await fastspring.data.downloadReportById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data/v1/downloads/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.data.generateRevenueReport`<a id="fastspringdatageneraterevenuereport"></a>

Generates a revenue report

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateRevenueReportResponse =
  await fastspring.data.generateRevenueReport({
    pageCount: 30,
    pageNumber: 0,
    async: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filter: [`FilterRevenueReportRequest`](./models/filter-revenue-report-request.ts)<a id="filter-filterrevenuereportrequestmodelsfilter-revenue-report-requestts"></a>

##### reportColumns: `string`[]<a id="reportcolumns-string"></a>

##### groupBy: `string`[]<a id="groupby-string"></a>

##### pageCount: `number`<a id="pagecount-number"></a>

##### pageNumber: `number`<a id="pagenumber-number"></a>

##### async: `boolean`<a id="async-boolean"></a>

##### notificationEmails: `string`[]<a id="notificationemails-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DataGenerateRevenueReportResponse](./models/data-generate-revenue-report-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data/v1/revenue` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.data.generateSubscriptionReport`<a id="fastspringdatageneratesubscriptionreport"></a>

Generates a subscription report

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateSubscriptionReportResponse =
  await fastspring.data.generateSubscriptionReport({
    pageCount: 30,
    pageNumber: 0,
    async: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filter: [`FilterSubscriptionReportRequest`](./models/filter-subscription-report-request.ts)<a id="filter-filtersubscriptionreportrequestmodelsfilter-subscription-report-requestts"></a>

##### reportColumns: `string`[]<a id="reportcolumns-string"></a>

##### groupBy: `string`[]<a id="groupby-string"></a>

##### pageCount: `number`<a id="pagecount-number"></a>

##### pageNumber: `number`<a id="pagenumber-number"></a>

##### async: `boolean`<a id="async-boolean"></a>

##### notificationEmails: `string`[]<a id="notificationemails-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DataGenerateSubscriptionReportResponse](./models/data-generate-subscription-report-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data/v1/subscription` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.data.getJobInformation`<a id="fastspringdatagetjobinformation"></a>

Get job information based on a job ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJobInformationResponse = await fastspring.data.getJobInformation({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data/v1/jobs/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.data.getJobInformation_0`<a id="fastspringdatagetjobinformation_0"></a>

Get information from a job listing.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJobInformation_0Response = await fastspring.data.getJobInformation_0();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data/v1/jobs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.data.resetCacheForServiceEndPoints`<a id="fastspringdataresetcacheforserviceendpoints"></a>

Reset cache for data service end points.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resetCacheForServiceEndPointsResponse =
  await fastspring.data.resetCacheForServiceEndPoints();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data/v1/util/cache` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.events.getProcessedEvents`<a id="fastspringeventsgetprocessedevents"></a>

Get processed events

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProcessedEventsResponse = await fastspring.events.getProcessedEvents({
  days: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### days: `number`<a id="days-number"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/events/processed` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.events.getUnprocessedEvents`<a id="fastspringeventsgetunprocessedevents"></a>

Get unprocessed events

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUnprocessedEventsResponse =
  await fastspring.events.getUnprocessedEvents({
    begin: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### begin: `number`<a id="begin-number"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/events/unprocessed` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.events.updateEventById`<a id="fastspringeventsupdateeventbyid"></a>

Update an event

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEventByIdResponse = await fastspring.events.updateEventById({
  eventId: "eventId_example",
  processed: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### processed: `boolean`<a id="processed-boolean"></a>

##### eventId: `string`<a id="eventid-string"></a>

Event Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/events/{event_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.orders.getByDateRange`<a id="fastspringordersgetbydaterange"></a>

Get orders by date range

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByDateRangeResponse = await fastspring.orders.getByDateRange({
  beginDate: "beginDate_example",
  endDate: "endDate_example",
  limit: 3.14,
  page: 3.14,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### beginDate: `string`<a id="begindate-string"></a>

filters results to include transactions after the specified begin date (must be at least one day before the specified end date), the format must be MM/DD/YY

##### endDate: `string`<a id="enddate-string"></a>

filters results to include transactions before the specified end date, the format must be MM/DD/YY

##### limit: `number`<a id="limit-number"></a>

integer limits the number of order records returned per page (default is 50 records)

##### page: `number`<a id="page-number"></a>

specifies page number of results to be returned; used together with limit to control pagination

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orders?begin&#x3D;{begin_date}&amp;end&#x3D;{end_date}&amp;limit&#x3D;{limit}&amp;page&#x3D;{page}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.orders.getByEndDate`<a id="fastspringordersgetbyenddate"></a>

Get orders by end date

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByEndDateResponse = await fastspring.orders.getByEndDate({
  endDate: "endDate_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### endDate: `string`<a id="enddate-string"></a>

filters results to include transactions before the specified end date, the format must be MM/DD/YY

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orders?end&#x3D;{end_date}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.orders.getById`<a id="fastspringordersgetbyid"></a>

Get orders by ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await fastspring.orders.getById({
  orderId: "orderId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### orderId: `string`<a id="orderid-string"></a>

Order Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orders/{order_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.orders.getByProductPath`<a id="fastspringordersgetbyproductpath"></a>

Get orders by product path

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByProductPathResponse = await fastspring.orders.getByProductPath({
  productPath: "productPath_example",
  limit: 3.14,
  page: 3.14,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### productPath: `string`<a id="productpath-string"></a>

Product path

##### limit: `number`<a id="limit-number"></a>

integer limits the number of order records returned per page (default is 50 records)

##### page: `number`<a id="page-number"></a>

specifies page number of results to be returned; used together with limit to control pagination

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orders?products&#x3D;{product_path}&amp;limit&#x3D;{limit}&amp;page&#x3D;{page}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.orders.getByProductPathAndDateRange`<a id="fastspringordersgetbyproductpathanddaterange"></a>

Get orders by product path AND date range

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByProductPathAndDateRangeResponse =
  await fastspring.orders.getByProductPathAndDateRange({
    productPath: "productPath_example",
    beginDate: "beginDate_example",
    endDate: "endDate_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### productPath: `string`<a id="productpath-string"></a>

Product path

##### beginDate: `string`<a id="begindate-string"></a>

filters results to include transactions after the specified begin date (must be at least one day before the specified end date), the format must be yyyy-mm-dd

##### endDate: `string`<a id="enddate-string"></a>

filters results to include transactions before the specified end date, the format must be yyyy-mm-dd

##### limit: `number`<a id="limit-number"></a>

integer limits the number of order records returned per page (default is 50 records)

##### page: `number`<a id="page-number"></a>

specifies page number of results to be returned; used together with limit to control pagination

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orders?products&#x3D;{product_path}&amp;begin&#x3D;{begin_date}&amp;end&#x3D;{end_date}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.orders.getOrdersWithReturns`<a id="fastspringordersgetorderswithreturns"></a>

Get orders with returns only

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrdersWithReturnsResponse =
  await fastspring.orders.getOrdersWithReturns({
    beginDate: "beginDate_example",
    endDate: "endDate_example",
    _return: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### beginDate: `string`<a id="begindate-string"></a>

filters results to include transactions after the specified begin date (must be at least one day before the specified end date), the format must be MM/DD/YY

##### endDate: `string`<a id="enddate-string"></a>

filters results to include transactions before the specified end date, the format must be MM/DD/YY

##### _return: `boolean`<a id="_return-boolean"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orders?begin&#x3D;{begin_date}&amp;end&#x3D;{end_date}&amp;returns&#x3D;{return}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.orders.updateTagsAndAttributes`<a id="fastspringordersupdatetagsandattributes"></a>

Update order tags and attributes

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTagsAndAttributesResponse =
  await fastspring.orders.updateTagsAndAttributes();
```

#### 🔄 Return<a id="🔄-return"></a>

[OrdersUpdateTagsAndAttributesResponse](./models/orders-update-tags-and-attributes-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/orders` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.products.createAndUpdate`<a id="fastspringproductscreateandupdate"></a>

Create and update products

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAndUpdateResponse = await fastspring.products.createAndUpdate({
  products: [
    {
      description: {
        summary: {
          en: "String",
        },
        action: {
          en: "String",
        },
        full: {
          en: "String",
        },
      },
      product: "{product_path}",
      display: {
        en: "String",
      },
      fulfillment: {
        instructions: {
          en: "String",
          es: "String",
        },
      },
      image:
        "https://d8y8nchqlnmka.cloudfront.net/NVaGM-nhSpQ/-FooqIP-R84/photio-imac-hero.png",
      format: "digital",
      sku: "string",
      attributes: {
        key1: "value1",
        key2: "value2",
      },
      pricing: {
        trial: 2,
        interval: "month",
        intervalLength: 1,
        quantityBehavior: "allow",
        quantityDefault: 1,
        price: {
          USD: 14.95,
          EUR: 10.99,
        },
        quantityDiscounts: {
          key: 3.14,
        },
        discountReason: {
          en: "The Reason",
        },
        discountDuration: 1,
      },
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### products: [`Product`](./models/product.ts)[]<a id="products-productmodelsproductts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ProductsCreateAndUpdateResponse](./models/products-create-and-update-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.products.createOrUpdateOffers`<a id="fastspringproductscreateorupdateoffers"></a>

Create or Update Product offers

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOrUpdateOffersResponse =
  await fastspring.products.createOrUpdateOffers({
    productPath: "productPath_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### productPath: `string`<a id="productpath-string"></a>

Product path

#### 🔄 Return<a id="🔄-return"></a>

[ProductsCreateOrUpdateOffersResponse](./models/products-create-or-update-offers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products/offers/{product_path}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.products.deleteProductById`<a id="fastspringproductsdeleteproductbyid"></a>

Delete products

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteProductByIdResponse = await fastspring.products.deleteProductById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Product Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.products.getAllOffersByType`<a id="fastspringproductsgetalloffersbytype"></a>

Get all offers for a product by offer type

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllOffersByTypeResponse = await fastspring.products.getAllOffersByType(
  {
    productPath: "productPath_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### productPath: `string`<a id="productpath-string"></a>

Product path

##### type: `string`<a id="type-string"></a>

Offer Type

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products/offers/{product_path}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.products.getAllProductIds`<a id="fastspringproductsgetallproductids"></a>

Get all product IDs

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllProductIdsResponse = await fastspring.products.getAllProductIds();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.products.getAllProductPrices`<a id="fastspringproductsgetallproductprices"></a>

Get all product prices

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllProductPricesResponse =
  await fastspring.products.getAllProductPrices();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products/price` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.products.getAllProductPricesByCountry`<a id="fastspringproductsgetallproductpricesbycountry"></a>

Get all product prices in specified country

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllProductPricesByCountryResponse =
  await fastspring.products.getAllProductPricesByCountry({
    country: "country_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

Country code

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products/price?country&#x3D;{country}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.products.getAllProductPricesByCountryAndCurrency`<a id="fastspringproductsgetallproductpricesbycountryandcurrency"></a>

Get all product prices in specified country and currency

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllProductPricesByCountryAndCurrencyResponse =
  await fastspring.products.getAllProductPricesByCountryAndCurrency({
    country: "country_example",
    currency: "currency_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

Country code

##### currency: `string`<a id="currency-string"></a>

Currency code

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products/price?country&#x3D;{country}&amp;currency&#x3D;{currency}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.products.getByProductPath`<a id="fastspringproductsgetbyproductpath"></a>

Get products by path

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByProductPathResponse = await fastspring.products.getByProductPath({
  productPath: "productPath_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### productPath: `string`<a id="productpath-string"></a>

Product path

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products/{product_path}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.products.getPriceById`<a id="fastspringproductsgetpricebyid"></a>

Get a product price

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPriceByIdResponse = await fastspring.products.getPriceById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Product Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products/price/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.products.getProductPriceByCountry`<a id="fastspringproductsgetproductpricebycountry"></a>

Get a product price in a specified country

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProductPriceByCountryResponse =
  await fastspring.products.getProductPriceByCountry({
    id: "id_example",
    country: "country_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Product Id

##### country: `string`<a id="country-string"></a>

country code

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products/price/{id}?country&#x3D;{country}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.products.getProductPriceByCountryAndCurrency`<a id="fastspringproductsgetproductpricebycountryandcurrency"></a>

Get a product price in a specified country and currency

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProductPriceByCountryAndCurrencyResponse =
  await fastspring.products.getProductPriceByCountryAndCurrency({
    id: "id_example",
    country: "country_example",
    currency: "currency_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Product Id

##### country: `string`<a id="country-string"></a>

Country code

##### currency: `string`<a id="currency-string"></a>

currency code

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/products/price/{id}?country&#x3D;{country}&amp;currency&#x3D;{currency}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.quotes.cancelQuoteById`<a id="fastspringquotescancelquotebyid"></a>

Cancel a quote

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelQuoteByIdResponse = await fastspring.quotes.cancelQuoteById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

A unique identifier for the quote

#### 🔄 Return<a id="🔄-return"></a>

[QuoteResponse](./models/quote-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/quotes/{id}/cancel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.quotes.createNewQuote`<a id="fastspringquotescreatenewquote"></a>

Create a quote

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewQuoteResponse = await fastspring.quotes.createNewQuote({
  coupon: "TENOFF",
  currency: "USD",
  expirationDateDays: 30,
  items: [
    {
      product: "product_example",
    },
  ],
  name: "Quote for ABC Company",
  notes: "This is a Note",
  recipientAddress: {
    addressLine1: "801 Garden St",
    addressLine2: "Suite 201",
    city: "Santa Barbara",
    country: "US",
    postalCode: "93101",
    region: "California",
  },
  recipient: {
    company: "ABC Company",
    email: "ne1@all.com",
    first: "Leeroy",
    last: "Jenkins",
    phone: "+1254789654",
  },
  taxId: "BE09999999XX",
  source: "MANAGER",
  sourceIP: "181.55.25.101",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### items: [`ItemRequest`](./models/item-request.ts)[]<a id="items-itemrequestmodelsitem-requestts"></a>

##### name: `string`<a id="name-string"></a>

##### recipientAddress: [`AddressRequest`](./models/address-request.ts)<a id="recipientaddress-addressrequestmodelsaddress-requestts"></a>

##### recipient: [`ContactRequest`](./models/contact-request.ts)<a id="recipient-contactrequestmodelscontact-requestts"></a>

##### tags: [`TagRequest`](./models/tag-request.ts)[]<a id="tags-tagrequestmodelstag-requestts"></a>

##### coupon: `string`<a id="coupon-string"></a>

##### currency: `string`<a id="currency-string"></a>

##### expirationDateDays: `number`<a id="expirationdatedays-number"></a>

##### fulfillmentTerm: `string`<a id="fulfillmentterm-string"></a>

##### notes: `string`<a id="notes-string"></a>

##### netTermsDays: `number`<a id="nettermsdays-number"></a>

##### taxId: `string`<a id="taxid-string"></a>

##### source: `string`<a id="source-string"></a>

##### sourceIP: `string`<a id="sourceip-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[QuoteResponse](./models/quote-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/quotes` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.quotes.deleteQuoteById`<a id="fastspringquotesdeletequotebyid"></a>

Delete a quote

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteQuoteByIdResponse = await fastspring.quotes.deleteQuoteById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

A unique identifier for the quote

#### 🔄 Return<a id="🔄-return"></a>

[QuoteResponse](./models/quote-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/quotes/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.quotes.getAllQuotes`<a id="fastspringquotesgetallquotes"></a>

Get all quotes

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllQuotesResponse = await fastspring.quotes.getAllQuotes({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### createdBegin: `string`<a id="createdbegin-string"></a>

The format must be YYYY-MM-DD

##### createdEnd: `string`<a id="createdend-string"></a>

The format must be YYYY-MM-DD

##### createdEmail: `string`<a id="createdemail-string"></a>

##### expiresBegin: `string`<a id="expiresbegin-string"></a>

The format must be YYYY-MM-DD

##### expiresEnd: `string`<a id="expiresend-string"></a>

The format must be YYYY-MM-DD

##### searchParam: `string`<a id="searchparam-string"></a>

##### expiredBefore: `string`<a id="expiredbefore-string"></a>

The format must be YYYY-MM-DD

##### onlyQuoteId: `boolean`<a id="onlyquoteid-boolean"></a>

##### statuses: `string`[]<a id="statuses-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CollectionModelQuoteResponse](./models/collection-model-quote-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/quotes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.quotes.getById`<a id="fastspringquotesgetbyid"></a>

Get a quote

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await fastspring.quotes.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[QuoteResponse](./models/quote-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/quotes/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.quotes.updateQuoteById`<a id="fastspringquotesupdatequotebyid"></a>

Update a quote

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateQuoteByIdResponse = await fastspring.quotes.updateQuoteById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

A unique identifier for the quote

##### updateQuoteRequest: [`UpdateQuoteRequest`](./models/update-quote-request.ts)<a id="updatequoterequest-updatequoterequestmodelsupdate-quote-requestts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[QuoteResponse](./models/quote-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/quotes/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.returns.createNewReturn`<a id="fastspringreturnscreatenewreturn"></a>

Create returns

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewReturnResponse = await fastspring.returns.createNewReturn();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/returns` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.returns.getById`<a id="fastspringreturnsgetbyid"></a>

Get returns

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await fastspring.returns.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/returns/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.sessions.createNewSession`<a id="fastspringsessionscreatenewsession"></a>

Create a session

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewSessionResponse = await fastspring.sessions.createNewSession({
  account: "uKj7izONRfanVwBL9eiG_A",
  items: [
    {
      product: "{product_path}",
      quantity: 1,
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### account: `string`<a id="account-string"></a>

##### items: [`Item2`](./models/item2.ts)[]<a id="items-item2modelsitem2ts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sessions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.subscriptions.cancelSubscriptionById`<a id="fastspringsubscriptionscancelsubscriptionbyid"></a>

Cancel a subscription

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelSubscriptionByIdResponse =
  await fastspring.subscriptions.cancelSubscriptionById({
    subscriptionId: "subscriptionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscriptionId: `string`<a id="subscriptionid-string"></a>

Subscription Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/subscriptions/{subscription_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.subscriptions.convertExpiredTrialWithoutPaymentMethod`<a id="fastspringsubscriptionsconvertexpiredtrialwithoutpaymentmethod"></a>

Convert an Expired Trial Subscription without a Payment Method

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const convertExpiredTrialWithoutPaymentMethodResponse =
  await fastspring.subscriptions.convertExpiredTrialWithoutPaymentMethod({
    subscriptionId: "subscriptionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscriptionId: `string`<a id="subscriptionid-string"></a>

Subscription Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/subscriptions/{subscription_id}/convert` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.subscriptions.getAllSubscriptions`<a id="fastspringsubscriptionsgetallsubscriptions"></a>

Get all subscriptions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllSubscriptionsResponse =
  await fastspring.subscriptions.getAllSubscriptions();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/subscriptions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.subscriptions.getById`<a id="fastspringsubscriptionsgetbyid"></a>

Get a subscription

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await fastspring.subscriptions.getById({
  subscriptionId: "subscriptionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscriptionId: `string`<a id="subscriptionid-string"></a>

Subscription Id

##### accountId: `string`<a id="accountid-string"></a>

specify a specific customer account whose subscriptions you want to retrieve

##### begin: `string`<a id="begin-string"></a>

specify the beginning of a date range in yyyy-mm-dd-format

##### end: `string`<a id="end-string"></a>

specify the end of a date range in yyyy-mm-dd format

##### event: `string`<a id="event-string"></a>

In each event, use begin and end to retrieve the corresponding subscriptions

##### products: `string`<a id="products-string"></a>

enter one or more product ids to filter the response to include only subscriptions for the specified products; use commas to separate multiple values

##### scope: `string`<a id="scope-string"></a>



##### status: `string`<a id="status-string"></a>



#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/subscriptions/{subscription_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.subscriptions.getEntries`<a id="fastspringsubscriptionsgetentries"></a>

Get subscription entries

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEntriesResponse = await fastspring.subscriptions.getEntries({
  subscriptionId: "subscriptionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscriptionId: `string`<a id="subscriptionid-string"></a>

Subscription Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/subscriptions/{subscription_id}/entries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.subscriptions.getPlanChangeHistory`<a id="fastspringsubscriptionsgetplanchangehistory"></a>

Get subscription plan change history

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPlanChangeHistoryResponse =
  await fastspring.subscriptions.getPlanChangeHistory({
    subscriptionId: "subscriptionId_example",
    scope: "base_plan",
    order: "increasing",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscriptionId: `string`<a id="subscriptionid-string"></a>

Subscription Id

##### scope: `'base_plan' | 'add_on'`<a id="scope-base_plan--add_on"></a>

Type of items to return

##### order: `'increasing' | 'decreasing'`<a id="order-increasing--decreasing"></a>

Sort Order for the results

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/subscriptions/{subscription_id}/history` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.subscriptions.pauseSubscription`<a id="fastspringsubscriptionspausesubscription"></a>

Pause a subscription

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const pauseSubscriptionResponse =
  await fastspring.subscriptions.pauseSubscription({
    subscriptionId: "subscriptionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscriptionId: `string`<a id="subscriptionid-string"></a>

Subscription Id

##### pausePeriodCount: `number`<a id="pauseperiodcount-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/subscriptions/{subscription_id}/pause` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.subscriptions.previewPlanChange`<a id="fastspringsubscriptionspreviewplanchange"></a>

Preview a proposed prorated plan change

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const previewPlanChangeResponse =
  await fastspring.subscriptions.previewPlanChange({
    subscription: "subscription_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscription: `string`<a id="subscription-string"></a>

##### product: `string`<a id="product-string"></a>

##### quantity: `number`<a id="quantity-number"></a>

##### pricing: `Price`<a id="pricing-price"></a>

##### addons: [`SubscriptionAddon`](./models/subscription-addon.ts)[]<a id="addons-subscriptionaddonmodelssubscription-addonts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/subscriptions/estimate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.subscriptions.rebillManagedSubscription`<a id="fastspringsubscriptionsrebillmanagedsubscription"></a>

Rebill a managed subscription

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const rebillManagedSubscriptionResponse =
  await fastspring.subscriptions.rebillManagedSubscription();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/subscriptions/charge` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.subscriptions.removeScheduledPause`<a id="fastspringsubscriptionsremovescheduledpause"></a>

Remove a scheduled pause

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeScheduledPauseResponse =
  await fastspring.subscriptions.removeScheduledPause({
    subscriptionId: "subscriptionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscriptionId: `string`<a id="subscriptionid-string"></a>

Subscription Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/subscriptions/{subscription_id}/resume` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.subscriptions.resumeSubscription`<a id="fastspringsubscriptionsresumesubscription"></a>

Resume a canceled subscription

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resumeSubscriptionResponse =
  await fastspring.subscriptions.resumeSubscription({
    subscriptionId: "subscriptionId_example",
    subscriptions: [
      {
        subscription: "{subscription_id}",
        deactivation: "deactivation_example",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscriptions: [`Subscription6`](./models/subscription6.ts)[]<a id="subscriptions-subscription6modelssubscription6ts"></a>

##### subscriptionId: `string`<a id="subscriptionid-string"></a>

Subscription Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/subscriptions/{subscription_id}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.subscriptions.updateSubscription`<a id="fastspringsubscriptionsupdatesubscription"></a>

Update a subscription

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSubscriptionResponse =
  await fastspring.subscriptions.updateSubscription({
    subscriptions: [
      {
        subscription: "{subscription_id}",
        product: "{subscription_product_path}",
        quantity: 1,
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscriptions: [`Subscription`](./models/subscription.ts)[]<a id="subscriptions-subscriptionmodelssubscriptionts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/subscriptions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `fastspring.webhooks.updateWebhookKeySecret`<a id="fastspringwebhooksupdatewebhookkeysecret"></a>

Update a webhook key secret

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWebhookKeySecretResponse =
  await fastspring.webhooks.updateWebhookKeySecret({
    url: "url_example",
    hmacSecret: "hmacSecret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

The URL associated with the webhook.

##### hmacSecret: `string`<a id="hmacsecret-string"></a>

The new HMAC Secret key.

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksUpdateWebhookKeySecretResponse](./models/webhooks-update-webhook-key-secret-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/keys` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
