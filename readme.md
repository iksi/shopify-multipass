# shopify-multipass

https://shopify.dev/docs/api/multipass

## Usage

```js
const shopifyMultipass = new ShopifyMultipass(
	'your-secret',
	'https://your-store.myshopify.com/'
);

const url = shopifyMultipass.generateUrl({
	email: 'name@example.com',
});
```
