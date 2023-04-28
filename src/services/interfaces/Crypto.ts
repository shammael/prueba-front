interface Crypto {
  id: string;
  price: number;
  slug: string;
  symbol: string;
  percentChangeUSDLast1h: number;
  percentChangeUSDLast24h: number;
  reportedMarketcap: number;
  realVolumeLast24h: number;
}

export default Crypto;
