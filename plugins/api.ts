// 3rd's
import { $fetch, FetchOptions } from 'ofetch';

// locals
import ProductsModule from '~/repository/modules/products';

interface IApiInstance {
  products: ProductsModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl
  };

  // Create a new instance of $fecther with custom option
  const apiFecther = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    products: new ProductsModule(apiFecther),
  };

  return {
    provide: {
      api: modules
    }
  };
});