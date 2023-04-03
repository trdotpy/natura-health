import Client from "shopify-buy";

export const shopifyClient = Client.buildClient({
  domain: process.env.SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

export const parseShopifyResponse = (response) =>
  JSON.parse(JSON.stringify(response));
