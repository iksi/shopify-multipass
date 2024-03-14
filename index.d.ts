export class ShopifyMultipass {
	constructor(multipassSecret: string, storeUrl: string);
	encryptionKey: Buffer;
	signatureKey: Buffer;
	storeUrl: URL;
	sign(ciphertext: Buffer): Buffer;
	encrypt(customerData: CustomerData): Buffer;
	generateToken(customerData: CustomerData): string;
	generateUrl(customerData: CustomerData): string;
}

export type CustomerAddress = {
	address1: string;
	city: string;
	country: string;
	first_name: string;
	last_name: string;
	phone: string;
	province: string;
	zip: string;
	province_code: string;
	country_code: string;
	default: boolean;
};

export type CustomerData = {
	email: string;
	created_at?: string;
	first_name?: string;
	last_name?: string;
	tag_string?: string;
	identifier?: string;
	remote_ip?: string;
	return_to?: string;
	addresses?: CustomerAddress[];
};
