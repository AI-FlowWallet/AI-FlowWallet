/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Swapper, SwapperInterface } from "../../../contracts/aa/Swapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "busd",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountBNB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBUSD",
        type: "uint256",
      },
    ],
    name: "swapBNBToBUSD",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountBUSD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBNB",
        type: "uint256",
      },
    ],
    name: "swapBUSDToBNB",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "transferBNB",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "transferBUSD",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60803461007a57601f6106cd38819003918201601f19168301916001600160401b0383118484101761007f5780849260209460405283398101031261007a57516001600160a01b0381169081900361007a5760018060a01b031933816000541617600055600154161760015560405161063790816100968239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60406080815260049081361015610020575b5050361561001e57600080fd5b005b600091823560e01c9083826320507ebb1461038257508163ab27021e14610245578163c4f90e1d146100d7575063eefd3d9a0361001157346100d357817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100d3578180808073ffffffffffffffffffffffffffffffffffffffff8154166100ac8133146105c5565b47908282156100ca575bf1156100c0575080f35b51903d90823e3d90fd5b506108fc6100b6565b5080fd5b90503461024157827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102415773ffffffffffffffffffffffffffffffffffffffff91828454169261012d8433146105c5565b60015416928151927f70a082310000000000000000000000000000000000000000000000000000000084523081850152856020958686602481845afa9586156102375790829188959493976101fd575b509060449291865197889586947fa9059cbb00000000000000000000000000000000000000000000000000000000865285015260248401525af19081156101f457506101c7578280f35b816101e692903d106101ed575b6101de818361053d565b8101906105ad565b5038808280f35b503d6101d4565b513d85823e3d90fd5b85819493969298503d8311610230575b610217818361053d565b8101031261022c57905194869390604461017d565b8380fd5b503d61020d565b85513d84823e3d90fd5b8280fd5b83915061025136610479565b9173ffffffffffffffffffffffffffffffffffffffff80855416926102778432146104b2565b340361032557928592602092866102ed9660015416928651978895869485937f23b872dd0000000000000000000000000000000000000000000000000000000085523391850160409194939294606082019573ffffffffffffffffffffffffffffffffffffffff80921683521660208201520152565b03925af190811561031c5750610301575080f35b6103189060203d81116101ed576101de818361053d565b5080f35b513d84823e3d90fd5b60648260208851917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601760248201527f496e76616c6964205472616e7366657220616d6f756e740000000000000000006044820152fd5b915061041e602061039236610479565b9373ffffffffffffffffffffffffffffffffffffffff8681815416916103b98332146104b2565b60015416928951968795869485937f23b872dd0000000000000000000000000000000000000000000000000000000085523390850160409194939294606082019573ffffffffffffffffffffffffffffffffffffffff80921683521660208201520152565b03925af1801561046f57839283928392610451575b50818115610448575b3390f1156100c0575080f35b506108fc61043c565b6104689060203d81116101ed576101de818361053d565b5038610433565b84513d85823e3d90fd5b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc60409101126104ad576004359060243590565b600080fd5b156104b957565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f537761707065723a205478206e6f7420696e69746961746564206279206f776e60448201527f65720000000000000000000000000000000000000000000000000000000000006064820152fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761057e57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b908160209103126104ad575180151581036104ad5790565b156105cc57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f537761707065723a2053656e646572206e6f74206f776e6572000000000000006044820152fdfea164736f6c6343000813000a";

type SwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Swapper__factory extends ContractFactory {
  constructor(...args: SwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    busd: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Swapper> {
    return super.deploy(busd, overrides || {}) as Promise<Swapper>;
  }
  override getDeployTransaction(
    busd: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(busd, overrides || {});
  }
  override attach(address: string): Swapper {
    return super.attach(address) as Swapper;
  }
  override connect(signer: Signer): Swapper__factory {
    return super.connect(signer) as Swapper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapperInterface {
    return new utils.Interface(_abi) as SwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Swapper {
    return new Contract(address, _abi, signerOrProvider) as Swapper;
  }
}
