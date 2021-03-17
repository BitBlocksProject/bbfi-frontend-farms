import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'BBFI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x12f169f23b2f35d75f99fc8b505d10348837e239',
    },
    tokenSymbol: 'BBFI',
    tokenAddresses: {
      97: '',
      56: '0x946aaa7a2c6221650c2bf1233ca41dbb4ddf9b78',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'BBFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x975860189ef67033cf2372875cD1B4f415A78C02',
    },
    tokenSymbol: 'BBFI',
    tokenAddresses: {
      97: '',
      56: '0x946aaa7a2c6221650c2bf1233ca41dbb4ddf9b78',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'WBBK-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x9AA308a70122Bc6453054E83285ed0dea507e967',
    },
    tokenSymbol: 'WBBK',
    tokenAddresses: {
      97: '',
      56: '0x9045b0eda6b6a556cf9b3d81c2db47411714f847',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 2,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },




]

export default farms
