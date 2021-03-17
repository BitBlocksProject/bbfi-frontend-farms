import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: "/",
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: "Exchange",
        href: "http://exchange.bitblocks.finance//#/swap",
      },
      {
        label: "Liquidity",
        href: "http://exchange.bitblocks.finance//#/pool",
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://bitblocksproject.gitbook.io/bitblocks-finance/',
      },
      {
        label: 'Github',
        href: 'https://github.com/BitBlocksProject',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x946aaa7a2c6221650c2bf1233ca41dbb4ddf9b78',
      },

    ],
  },
]

export default config
