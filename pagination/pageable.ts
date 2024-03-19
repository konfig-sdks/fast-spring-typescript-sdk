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

import { AxiosPromise } from "axios";
import {
  PageBase,
  PageInfo,
  PageParameterProperties,
  PageParameters,
} from "./page-types";

export type PageParametersBase<Parameters> = Parameters & {
  requestBody?: Parameters;
};
export type PageRequest<
  Data extends PageInfo,
  Parameters extends PageParameters
> = (parameters: Parameters) => AxiosPromise<Data>;

export abstract class Pageable<
  Data extends PageInfo,
  Parameters extends PageParameters
> {
  readonly data: Data;
  protected readonly initialParameters: Parameters;
  private readonly _request: PageRequest<Data, Parameters>;
  async previous(): Promise<PageBase<Data, Parameters>> {
    if (!this.hasPrevious()) return this;
    if (this.previousParameters === null) return this;
    const response = await this.makeRequest(this.previousParameters);
    return this.withData(response.data);
  }
  async next(): Promise<PageBase<Data, Parameters>> {
    if (!this.hasNext()) return this;
    if (this.nextParameters === null) return this;
    const response = await this.makeRequest(this.nextParameters);
    return this.withData(response.data);
  }

  /**
   * Generate minimal set of parameters needed to get the previous page
   */
  protected abstract get previousParameters(): PageParameterProperties | null;

  /**
   * Generate minimal set of parameters needed to get the next page
   */
  protected abstract get nextParameters(): PageParameterProperties | null;

  /**
   * Is there a previous page based on PageInfo?
   */
  abstract hasPrevious(): boolean;

  /**
   * Is there a next page based on PageInfo?
   */
  abstract hasNext(): boolean;

  /**
   * Helper for invoking a request. Handles request body and parameter based pagination
   */
  private makeRequest(parameters: PageParameterProperties): AxiosPromise<Data> {
    // Handle request body pagination
    if (this.initialParameters.requestBody !== undefined) {
      return this._request({
        ...this.initialParameters,
        requestBody: { ...this.initialParameters.requestBody, ...parameters },
      });
    }
    return this._request({ ...this.initialParameters, ...parameters });
  }

  /**
   * Helper for creating new page
   */
  private withData(data: Data): PageBase<Data, Parameters> {
    return this.make({
      data,
      initialParameters: this.initialParameters,
      request: this._request,
    });
  }

  constructor({
    data,
    initialParameters,
    request,
  }: {
    data: Data;
    initialParameters: Parameters;
    request: PageRequest<Data, Parameters>;
  }) {
    this.data = data;
    this._request = request;
    this.initialParameters = initialParameters;
  }

  abstract make(parameters: {
    data: Data;
    initialParameters: Parameters;
    request: PageRequest<Data, Parameters>;
  }): Pageable<Data, Parameters>;
}
