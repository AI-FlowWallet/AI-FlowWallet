/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Account, AccountInterface } from "../../../contracts/aa/Account";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "functionType",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "argument",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOp",
        name: "userop",
        type: "tuple",
      },
    ],
    name: "entrypoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAddressOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPassKeyOwner",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "pubKeyX",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pubKeyY",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "keyId",
            type: "string",
          },
        ],
        internalType: "struct PassKeyId",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "functionType",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "argument",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOp",
        name: "userop",
        type: "tuple",
      },
    ],
    name: "getUserOpHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "pubKeyX",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pubKeyY",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "keyId",
            type: "string",
          },
        ],
        internalType: "struct PassKeyId",
        name: "anOwner",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "passKeyOwnerEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608080604052346100c1576000549060ff8260081c1661006f575060ff80821603610034575b60405161242590816100c78239f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a138610025565b62461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fdfe6080604052600436101561001b575b361561001957600080fd5b005b6000803560e01c908163759a68c01461008e575080638fb4107214610089578063b627e20f14610084578063be9ef8431461007f578063d087d2881461007a578063f0f05cef146100755763fd5c8d720361000e5761055a565b610475565b6103e9565b6103a8565b610353565b610296565b3461013e577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6020813601126101325760043567ffffffffffffffff9182821161013a576060908236030112610136576100e860e0604052565b8060040135608052602481013560a052604481013591821161013657013660238201121561013257610124903690602460048201359101610237565b60c05261012f6106d1565b80f35b5080fd5b8280fd5b8380fd5b80fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6060810190811067ffffffffffffffff82111761018c57604052565b610141565b6080810190811067ffffffffffffffff82111761018c57604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761018c57604052565b604051906101fb82610170565b565b67ffffffffffffffff811161018c57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b929192610243826101fd565b9161025160405193846101ad565b82948184528183011161026e578281602093846000960137010152565b600080fd5b60005b8381106102865750506000910152565b8181015183820152602001610276565b3461026e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261026e576060604080516102d481610170565b60008152600060208201520152604060a06102ed6105cd565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84519485936020855280516020860152602081015182860152015160608085015261034a8151809281608088015260208888019101610273565b01168101030190f35b3461026e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261026e57602073ffffffffffffffffffffffffffffffffffffffff60005460101c16604051908152f35b3461026e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261026e57602060ff600454166040519015158152f35b3461026e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261026e576020600554604051908152f35b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc9060208282011261026e576004359167ffffffffffffffff831161026e578260809203011261026e5760040190565b3461026e5761048336610425565b61049561048f826114a6565b15610b9a565b6104a76104a18261184f565b15610c25565b60038135801561053d575b60018114610520575b60028114610503575b146104dd575b6100196104d8600554610d30565b600555565b6104f86104f18260206104fd940190610cb0565b3691610237565b610ee4565b386104ca565b61051b6105166104f16020860186610cb0565b610d67565b6104c4565b6105386105336104f16020860186610cb0565b61133d565b6104bb565b6105556105506104f16020860186610cb0565b61104c565b6104b2565b3461026e57602061057261056d36610425565b611a8d565b604051908152f35b90600182811c921680156105c3575b602083101461059457565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f1691610589565b604051906105da82610170565b816001908154815260025460209081830152604051928391600091600354906106028261057a565b80865291818116908115610694575060011461062f575b5050506040929161062b9103846101ad565b0152565b909493925060036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b946000915b81831061067c5750939450919250908201018161062b6040610619565b8654888401850152958601958794509183019161065f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016848701525050151560051b83010190508161062b6040610619565b60005460ff8160081c16158091819261086c575b811561084c575b50156107c8578061072360017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff006000541617600055565b610792575b61073061087a565b61073657565b6107637fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff60005416600055565b604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602090a1565b6107c36101007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff6000541617600055565b610728565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152fd5b303b1591508161085e575b50386106ec565b6001915060ff161438610857565b600160ff82161091506106e5565b6001807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff006004541617600455608051815560a05160025560c0519081519167ffffffffffffffff831161018c576108db836108d660035461057a565b610a1a565b60209081601f85116001146109545750600091849182610929575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff91921b9260031b1c191617600355565b015191507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff386108f6565b9190847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0819596166109a860036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90565b946000905b88838310610a0057505050106109c9575b505050811b01600355565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c191690553880806109be565b8587015188559096019594850194879350908101906109ad565b601f8111610a26575050565b600090600382527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b906020601f850160051c83019410610a81575b601f0160051c01915b828110610a7657505050565b818155600101610a6a565b9092508290610a61565b8051600190815560406020928381015160025501519182519267ffffffffffffffff841161018c57610ac2846108d660035461057a565b81601f8511600114610b0c57506000918491826109295750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff91921b9260031b1c191617600355565b9190847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081959616610b6060036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90565b946000905b88838310610b8057505050106109c957505050811b01600355565b858701518855909601959485019487935090810190610b65565b15610ba157565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4163636f756e743a205369676e617475726520766572696669636174696f6e2060448201527f6661696c656400000000000000000000000000000000000000000000000000006064820152fd5b15610c2c57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4163636f756e743a204e6f6e636520766572696669636174696f6e206661696c60448201527f65640000000000000000000000000000000000000000000000000000000000006064820152fd5b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18136030182121561026e570180359067ffffffffffffffff821161026e5760200191813603831361026e57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9060018201809211610d3e57565b610d01565b604051906020820182811067ffffffffffffffff82111761018c5760405260008252565b600160ff60045416151503610e1b576014610dee910151610da6610d896101ee565b6000815260006020820152610d9c610d43565b6040820152610a8b565b7fffffffffffffffffffff0000000000000000000000000000000000000000ffff75ffffffffffffffffffffffffffffffffffffffff00006000549260101b16911617600055565b6101fb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0060045416600455565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4163636f756e743a20416c72656164792061646472657373206f776e6572206560448201527f6e61626c656400000000000000000000000000000000000000000000000000006064820152fd5b81601f8201121561026e578051610eb5816101fd565b92610ec360405194856101ad565b8184526020828401011161026e57610ee19160208085019101610273565b90565b60ff60045416610faa57805181019060608183031261026e5760208101519060408101519060608101519067ffffffffffffffff821161026e576020610f329281610f7a9701920101610e9f565b90610f3b6101ee565b92835260208301526040820152610f757fffffffffffffffffffff0000000000000000000000000000000000000000ffff60005416600055565b610a8b565b6101fb60017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff006004541617600455565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4163636f756e743a20416c726561647920706173736b6579206f776e6572206560448201527f6e61626c656400000000000000000000000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff81160361026e57565b8051810160608282031261026e576020820151906110698261102e565b604083015190606084015167ffffffffffffffff811161026e576101fb9460206110ad928173ffffffffffffffffffffffffffffffffffffffff9501920101610e9f565b9216611486565b67ffffffffffffffff811161018c5760051b60200190565b81601f8201121561026e578051916110e3836110b4565b926110f160405194856101ad565b808452602092838086019260051b82010192831161026e578301905b82821061111b575050505090565b8151815290830190830161110d565b9080601f8301121561026e57815190611142826110b4565b9261115060405194856101ad565b828452602092838086019160051b8301019280841161026e57848301915b84831061117e5750505050505090565b825167ffffffffffffffff811161026e5786916111a084848094890101610e9f565b81520192019161116e565b909160608284031261026e5781519167ffffffffffffffff9283811161026e5781019380601f8601121561026e5784516111e4816110b4565b906111f260405192836101ad565b808252602096878084019260051b8201019184831161026e5788809201905b83821061124a57505050509482015184811161026e57816112339184016110cc565b93604083015190811161026e57610ee1920161112a565b82809183516112588161102e565b815201910190611211565b1561126a57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e67746873000000000000000000000000006044820152fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610d3e5760010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b80518210156113385760209160051b010190565b6112f5565b61135090602080825183010191016111ab565b92919061136a825185518091149081611416575b50611263565b80516113cc575060005b81518110156113c657806113bc6113ab6113916113c19486611324565b5173ffffffffffffffffffffffffffffffffffffffff1690565b6113b58388611324565b5190611435565b6112c8565b611374565b50509050565b929060005b815181101561140f57806113bc6113ee61139161140a9486611324565b6113f88389611324565b516114038488611324565b5191611486565b6113d1565b5050509050565b835180159250821561142b575b505038611364565b1490503880611423565b600091829182602083519301915af13d1561147e573d90611455826101fd565b9161146360405193846101ad565b82523d6000602084013e5b156114765750565b602081519101fd5b60609061146e565b916000928392602083519301915af13d1561147e573d90611455826101fd565b6114af81611a8d565b60045460ff16156114f3576114e1906114d26104f18460606114e5960190610cb0565b906114db6105cd565b91611997565b1590565b6114ee57600090565b600190565b61159461157b61154173ffffffffffffffffffffffffffffffffffffffff937f19457468657265756d205369676e6564204d6573736167653a0a333200000000600052601c52603c60002090565b6115756104f161156a60005473ffffffffffffffffffffffffffffffffffffffff9060101c1690565b966060810190610cb0565b906115a0565b73ffffffffffffffffffffffffffffffffffffffff1690565b9116036114ee57600090565b610ee1916115ad91611777565b9190916115ee565b600511156115bf57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6115f7816115b5565b806115ff5750565b611608816115b5565b6001810361166f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b611678816115b5565b600281036116df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b806116eb6003926115b5565b146116f257565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608490fd5b9060418151146000146117a5576117a1916020820151906060604084015193015160001a906117bb565b9091565b5050600090600290565b6040513d6000823e3d90fd5b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116118435791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa1561183e57815173ffffffffffffffffffffffffffffffffffffffff811615611838579190565b50600190565b6117af565b50505050600090600390565b60406005549101351461186157600190565b600090565b90604051916020830152602082526040820182811067ffffffffffffffff82111761018c57604052565b906118a360209282815194859201610273565b0190565b6101fb9193929360405194859183516118c881602096878088019101610273565b83016118dc82518093878085019101610273565b016118ef82518093868085019101610273565b010380855201836101ad565b60406101fb919392938151948161191c879351809260208087019101610273565b82019060208201520360208101855201836101ad565b1561193957565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4b6579206e6f7420666f756e64000000000000000000000000000000000000006044820152fd5b90815182019060209260c08185850194031261026e5760408101519160608201519360808301519267ffffffffffffffff9384811161026e5782886119de92840101610e9f565b9360a082015181811161026e5783896119f992850101610e9f565b9360c083015191821161026e578894611a2f611a2a611a2460009789611a3597611a41990101610e9f565b93611866565b611bcb565b906118a7565b60405191828092611890565b039060025afa1561183e576000611a5e611a3586938351906118fb565b039060025afa1561183e57610ee193611a8360005194820151151580611a8857611932565b611c7d565b611932565b611a9a6020820182610cb0565b9081604051918237206040805192602084019281358452828501520135606083015260608252608082019082821067ffffffffffffffff83111761018c5781604052825190209160a081019283523060c082015260e04691015260608152611b0181610191565b51902090565b60405190611b1482610170565b604082527f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392d5f6040837f4142434445464748494a4b4c4d4e4f505152535455565758595a61626364656660208201520152565b908160031b9180830460081490151715610d3e57565b90611b86826101fd565b611b9360405191826101ad565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0611bc182946101fd565b0190602036910137565b805115611c7457611bda611b07565b611c00611bf1611bea8451611b66565b6006900490565b835160069006611c6657611b7c565b91602083019181805101925b838310611c1a575050505090565b6004906003809401938451600190603f9082828260121c16880101518553828282600c1c16880101518386015382828260061c1688010151600286015316850101519082015301611c0c565b611c6f906112c8565b611b7c565b50610ee1610d43565b92919080158015611e98575b8015611e6e575b8015611e44575b611e3b57610ee193611e30611caa612015565b91611cb36101ee565b600081526000602082015260006040820152835260208151910151611cd66101ee565b918252602082015260016040820152611cf560208401918083526120a4565b90611e21611d0b6040860193808552835161205a565b9260608601938452611e11611e01611d216101ee565b7f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c29681527f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5602082015260016040820152611d8460808a019180835287519061205a565b60a08a0152611d96815185519061205a565b60c08a0152611da8815188519061205a565b60e08a0152611db781516120a4565b90611dcc6101008b019280845288519061205a565b6101208b0152611ddf825186519061205a565b6101408b0152611df2825189519061205a565b6101608b01525190519061205a565b610180880194818652519061205a565b6101a0870152825190519061205a565b6101c08501525190519061205a565b6101e0820152611ea0565b50505050600090565b507fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551821015611c97565b507fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551811015611c90565b508115611c89565b939290917fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63255190818410801590611fb0575b611fa657611edf829161236e565b809309918309600080918193608091825b611f0857505050611f03939495506120c4565b501490565b85611f84575b888160fe1c600c8460fc1c161780611f3b575b5050611f3490600292831b921b92611fcb565b9182611ef0565b611f779397611f34976040611f6e611f5685879b989b611fba565b5151946020611f658289611fba565b51015196611fba565b5101519461219b565b9590945090928838611f21565b9294611f959194611f9b93966122b8565b916122b8565b949193909392611f0e565b5060009450505050565b5081811015611ed1565b9060108110156113385760051b0190565b8015610d3e577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b6040519061200382610170565b60006040838281528260208201520152565b6040519061020080830183811067ffffffffffffffff82111761018c576040528260005b82811061204557505050565b602090612050611ff6565b8184015201612039565b61208791612066611ff6565b5081519160406020820151910151825191604060208501519401519461219b565b906040519261209584610170565b83526020830152604082015290565b612087906120b0611ff6565b5080519060406020820151910151916122b8565b929190811561218f578160007fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8481809611612185575b505060405191602083526020808401526020604084015260608301527fffffffff00000001000000000000000000000000fffffffffffffffffffffffd60808301528360a083015260208260c08160057ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1561013e575082905181808280098097099509900990565b06915083386120fb565b50509050600090600090565b9395939190816121ad57505050929190565b909291949586156122ae577fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9586858196958280838199099b818d999781868180808f9d888009809d099c8d99099c81878d0990099c0990099308958181106122a7575b03958280808960020980099281808481878d09938181106122a0575b036002099481868009980996828089600209830890818110612299575b039b8c936002090994818110612292575b03900997828910612289575b859182910892800995828710612280575b960394030990565b95840195612278565b97850197612267565b830161225b565b830161224a565b820161222d565b8301612211565b5094505091929190565b9290917fffffffff00000001000000000000000000000000ffffffffffffffffffffffff809181858009958280808080808c87096004099a800960080992818080808089800980097fffffffff00000001000000000000000000000000fffffffffffffffffffffffc0992800960030908818960020982828009818110612367575b038981809b10612360575b039009818110612359575b03940960020990565b8301612350565b8301612345565b830161233a565b7fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63255180821161240f575b60405191602083526020808401526020604084015260608301527fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63254f608083015260a082015260208160c08160057ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1561026e575190565b8091069061239756fea164736f6c6343000813000a";

type AccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Account__factory extends ContractFactory {
  constructor(...args: AccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Account> {
    return super.deploy(overrides || {}) as Promise<Account>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Account {
    return super.attach(address) as Account;
  }
  override connect(signer: Signer): Account__factory {
    return super.connect(signer) as Account__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccountInterface {
    return new utils.Interface(_abi) as AccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Account {
    return new Contract(address, _abi, signerOrProvider) as Account;
  }
}
