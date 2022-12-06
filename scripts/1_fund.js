const IERC20 = require('@openzeppelin/contracts/build/contracts/ERC20.json')
const IUniswapV2Router02 = require('@uniswap/v2-periphery/build/IUniswapV2Router02.json')

const uRouter = new web3.eth.Contract(IUniswapV2Router02.abi, '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D')
const WETH = new web3.eth.Contract(IERC20.abi, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')

const UNLOCKED_ACCOUNT = '0x2fEb1512183545f48f6b9C5b4EbfCaF49CfCa6F3'

module.exports = async function (callback) {
    const [deployer, 
           account1,
           account2,
           account3,
           account4,
           account5,
           account6,
           account7,
           account8,
           account9
        ] = await web3.eth.getAccounts()

    const WETHAmount = web3.utils.toWei('40', 'ether')

    const amount = web3.utils.toWei('40', 'ether')

    await WETH.methods.transfer(deployer, amount).send({ from: UNLOCKED_ACCOUNT })
    await WETH.methods.transfer(account1, amount).send({ from: UNLOCKED_ACCOUNT })
    await WETH.methods.transfer(account2, amount).send({ from: UNLOCKED_ACCOUNT })
    await WETH.methods.transfer(account3, amount).send({ from: UNLOCKED_ACCOUNT })
    await WETH.methods.transfer(account4, amount).send({ from: UNLOCKED_ACCOUNT })
    await WETH.methods.transfer(account5, amount).send({ from: UNLOCKED_ACCOUNT })
    await WETH.methods.transfer(account6, amount).send({ from: UNLOCKED_ACCOUNT })
    await WETH.methods.transfer(account7, amount).send({ from: UNLOCKED_ACCOUNT })
    await WETH.methods.transfer(account8, amount).send({ from: UNLOCKED_ACCOUNT })
    await WETH.methods.transfer(account9, amount).send({ from: UNLOCKED_ACCOUNT })

    await WETH.methods.approve(uRouter._address, WETHAmount).send({ from: deployer })
    await WETH.methods.approve(uRouter._address, WETHAmount).send({ from: account1 })
    await WETH.methods.approve(uRouter._address, WETHAmount).send({ from: account2 })
    await WETH.methods.approve(uRouter._address, WETHAmount).send({ from: account3 })
    await WETH.methods.approve(uRouter._address, WETHAmount).send({ from: account4 })
    await WETH.methods.approve(uRouter._address, WETHAmount).send({ from: account5 })
    await WETH.methods.approve(uRouter._address, WETHAmount).send({ from: account6 })
    await WETH.methods.approve(uRouter._address, WETHAmount).send({ from: account7 })
    await WETH.methods.approve(uRouter._address, WETHAmount).send({ from: account8 })
    await WETH.methods.approve(uRouter._address, WETHAmount).send({ from: account9 })

    const deployerBalance = await WETH.methods.balanceOf(deployer).call()
    console.log(`WETH amount in deployer: ${deployerBalance / 1e18}\n`)

    const account1Balance = await WETH.methods.balanceOf(account1).call()
    console.log(`WETH amount in account1: ${account1Balance / 1e18}\n`)
    
    const account2Balance = await WETH.methods.balanceOf(account2).call()
    console.log(`WETH amount in account2: ${account2Balance / 1e18}\n`)

    const account3Balance = await WETH.methods.balanceOf(account3).call()
    console.log(`WETH amount in account3: ${account3Balance / 1e18}\n`)

    const account4Balance = await WETH.methods.balanceOf(account4).call()
    console.log(`WETH amount in account4: ${account4Balance / 1e18}\n`)

    const account5Balance = await WETH.methods.balanceOf(account5).call()
    console.log(`WETH amount in account5: ${account5Balance / 1e18}\n`)

    const allowence = await WETH.methods.allowance(deployer,uRouter._address).call()
    console.log("Value of allowence",allowence)

    const allowenceaccount1 = await WETH.methods.allowance(account1,uRouter._address).call()
    console.log("Value of allowence1",allowenceaccount1)

    const allowenceaccount2 = await WETH.methods.allowance(account2,uRouter._address).call()
    console.log("Value of allowence2",allowenceaccount2)

    const allowenceaccount3 = await WETH.methods.allowance(account3,uRouter._address).call()
    console.log("Value of allowence3",allowenceaccount3)

    const allowenceaccount4 = await WETH.methods.allowance(account4,uRouter._address).call()
    console.log("Value of allowence4",allowenceaccount4)

    const allowenceaccount5 = await WETH.methods.allowance(account5,uRouter._address).call()
    console.log("Value of allowence5",allowenceaccount5)

    const allowenceaccount6 = await WETH.methods.allowance(account6,uRouter._address).call()
    console.log("Value of allowence6",allowenceaccount6)


    callback()
}