/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Lock, LockInterface } from "../../contracts/Lock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461002757600080546001600160a01b0319163317905560fc908161002d8239f35b600080fdfe60806040526004361015601157600080fd5b6000803560e01c80633ccfd60b14608157638da5cb5b14603057600080fd5b34607e57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112607e5773ffffffffffffffffffffffffffffffffffffffff6020915416604051908152f35b80fd5b5034607e57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112607e578080808073ffffffffffffffffffffffffffffffffffffffff815416479082821560e7575bf11560db5780f35b604051903d90823e3d90fd5b506108fc60d356fea164736f6c6343000813000a";

type LockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Lock__factory extends ContractFactory {
  constructor(...args: LockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Lock> {
    return super.deploy(overrides || {}) as Promise<Lock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Lock {
    return super.attach(address) as Lock;
  }
  override connect(signer: Signer): Lock__factory {
    return super.connect(signer) as Lock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LockInterface {
    return new utils.Interface(_abi) as LockInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Lock {
    return new Contract(address, _abi, signerOrProvider) as Lock;
  }
}