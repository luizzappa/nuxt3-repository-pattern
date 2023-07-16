// 3rd's
import { $Fetch, FetchOptions } from 'ofetch';

/*
 The HttpFactory acts as a wrapper around an HTTP client. 
 It encapsulates the functionality for making API requests asynchronously 
 through the call function, utilizing the provided HTTP client.
*/
class FetchFactory<T> {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  /**
   * The HTTP client is utilized to control the process of making API requests.
   * @param method the HTTP method (GET, POST, ...)
   * @param url the endpoint url
   * @param data the body data
   * @param fetchOptions fetch options
   * @returns 
   */
  async call(
    method: string,
    url: string,
    data?: object,
    fetchOptions?: FetchOptions<'json'>
  ): Promise<T> {
    return this.$fetch<T>(
      url, 
      { 
        method, 
        body: data, 
        ...fetchOptions 
      }
    )
  }
}

export default FetchFactory;
