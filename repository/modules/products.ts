// 3rd's
import { FetchOptions } from 'ofetch';
import { AsyncDataOptions } from '#app';

// locals
import FetchFactory from '../factory';

type IProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

class ProductsModule extends FetchFactory {
  private RESOURCE = '/products';

  /**
   * Return the products as array 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async getProducts(
    asyncDataOptions?: AsyncDataOptions<IProduct[]>
  ) {

    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Accept-Language': 'en-US'
          }
        };
        return this.call<IProduct[]>(
          'GET',
          `${this.RESOURCE}`,
          undefined, // body
          fetchOptions
        )
      },
      asyncDataOptions
    ) 
  }

  /**
   * Return a single product
   * @param asyncDataOptions options for `useAsyncData`
   */
  async getProduct(
    productId: Ref<number>,
    asyncDataOptions?: AsyncDataOptions<IProduct>
  ) {

    return useAsyncData<IProduct>(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Accept-Language': 'en-US'
          }
        };
        return this.call<IProduct>(
          'GET',
          `${this.RESOURCE}/${productId.value}`,
          undefined, // body
          fetchOptions
        )
      },
      asyncDataOptions
    ) 
  }
}

export default ProductsModule;
