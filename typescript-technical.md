# Technical TypeScript Test

Bootstrap a bun project using:

```bash
bun init -y
```

Create a function called `fetchBalance`.

```typescript
async function fetchBalance(address: `0x${string}`): Promise<bigint>;
```

This function should fetch the balance of an Ethereum Address and return a promise that resolves to the balance of the address in wei (bigint). You are not allowed to use **any** other library than the native Bun APIs.

You can use this Infura RPC endpoint: `https://mainnet.infura.io/v3/f1b70935143f4b22b3c165d6bdfd3021`

Your function should be able to batch requests and return the balance of multiple addresses in a single HTTP request.

For example this code should only do a single HTTP request:

```typescript
const addresses = [
  "0xF7B31119c2682c88d88D455dBb9d5932c65Cf1bE",
  "0x3CBdeD43EFdAf0FC77b9C55F6fC9988fCC9b757d",
  "0x53b6936513e738f44FB50d2b9476730C0Ab3Bfc1",
  "0x72a5843cc08275C8171E582972Aa4fDa8C397B2A",
  "0x1da5821544e25c636c1417Ba96Ade4Cf6D2f9B5A",
] as const;

const balances = await Promise.all(addresses.map(fetchBalance));
```

and this example should only send 3 HTTP requests:

```typescript
const addresses = [
  "0xF7B31119c2682c88d88D455dBb9d5932c65Cf1bE",
  "0x3CBdeD43EFdAf0FC77b9C55F6fC9988fCC9b757d",
  "0x53b6936513e738f44FB50d2b9476730C0Ab3Bfc1",
  "0x72a5843cc08275C8171E582972Aa4fDa8C397B2A",
  "0x1da5821544e25c636c1417Ba96Ade4Cf6D2f9B5A",
] as const;

const balances = await Promise.all(addresses.map(fetchBalance));

const balances_2 = await Promise.all(addresses.map(fetchBalance));

const balances_3 = await Promise.all([...addresses.map(fetchBalance), ...addresses.map(fetchBalance)]);
```
