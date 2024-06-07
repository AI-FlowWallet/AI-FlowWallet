# AI Flow Wallet

## Vision
To revolutionize the digital finance landscape by leveraging cutting-edge artificial intelligence and intent-based architecture, providing users with an unparalleled level of security, efficiency, and seamless transaction experiences across multiple blockchain networks.

## AI Flow Wallet pages

![AI Flow Wallet home page](https://github.com/samarabdelhameed/pics/blob/main/AI_Flow_Logo.png
)

## Description
AI Flow Wallet is an advanced crypto wallet designed with intent-based architecture and account abstraction, utilizing artificial intelligence to transform user interactions with digital assets.

### Features:
- **AI-Driven Transactions:** Execute transactions via a powerful GPT-based AI chatbot.
- **Passkey Security:** Private keyless, passkeys-based transaction approvals.
- **Gasless Transactions:** Cost-effective transactions with no gas fees.
- **Cross-Chain Compatibility:** Instant transfers between OPBNB and BSC testnets.
- **User-Centric Design:** Real-time insights and personalized recommendations from the AI chatbot.

## AI Flow Wallet Architecture

### High-Level Architecture and Detailed Components

![AI Flow Wallet Architecture](https://github.com/samarabdelhameed/pics/blob/main/di2.svg)

[ [View fullscreen](https://github.com/samarabdelhameed/pics/blob/main/di2.svg) 

## AI Flow Wallet pages

![AI Flow Wallet home page](https://github.com/samarabdelhameed/pics/blob/main/dd.png)




## Problem Statement
In the current digital finance ecosystem, users face complexities in managing transactions, high gas fees, and security risks associated with private keys. Cross-chain transfers are often cumbersome, requiring multiple steps and higher transaction costs.

## Solution
AI Flow Wallet addresses these issues by introducing an AI-driven, intent-based architecture with account abstraction. This approach simplifies transaction management, eliminates gas fees for users, enhances security with passkeys, and provides seamless cross-chain compatibility. The AI chatbot empowers users by automating complex transactions and offering personalized financial insights.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- Yarn package manager

### Environment Variables
Create two environment variable files: `.env.local` in `packages/client` and `.env` in `packages/shared`.

#### packages/client
Copy the contents of `.env.example` to `.env.local`.

Use a new account for `NEXT_PUBLIC_DEPLOYER` and fund it with at least 1 BNB on both BSC testnet and OPBNB testnet chains to ensure the contract address is the same on both chains.

```plaintext
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
NEXT_PUBLIC_DEPLOYER=private key
OPENAI_KEY=
```

#### packages/shared
Copy the contents of `.env.example` to `.env`.

```plaintext
DEPLOYER_PRIVATE_KEY=Same as NEXT_PUBLIC_DEPLOYER
```

### Installation
In the root directory, run:
```bash
yarn install
```

### Deploying Contracts
In the root directory, run:
```bash
yarn shared:deploy
```

### Building Shared Package
In the root directory, run:
```bash
yarn shared:build
```

### Configuring Client
Copy the `AccountFactory address`, `BUSD address`, and `Swapper Address` from the terminal to the respective variables at the top of the file `packages/client/src/services/passkeyService`.

### Running Frontend
In the root directory, run:
```bash
yarn client:dev
```

## Architecture Overview

### System Overview
AI Flow Wallet employs an intent-based architecture with account abstraction to enhance user experience and security. It leverages AI to automate transactions and ensure seamless cross-chain interactions.

### Components
1. **AI Bot:** Uses a GPT-based chatbot with intent architecture to execute transactions.
2. **Passkey Service:** Manages passkeys-based transaction approvals.
3. **Transaction Manager:** Handles gasless and batch transactions.
4. **Cross-Chain Service:** Facilitates instant transfers between OPBNB and BSC testnets.





