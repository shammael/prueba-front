import Crypto from "./interfaces/Crypto";

interface GetAllCryptoResponse {
  id: string;
  metrics: {
    marketData: {
      priceUSD: string;
      realVolumeLast24h: string;
      percentChangeUSDLast1H: string;
      percentChangeUSDLast24H: string;
    };
    marketcap: {
      currentMarketcapUSD: string;
    };
  };
  slug: string;
  symbol: string;
}

const getAllCryptosAdapter = (resp: GetAllCryptoResponse[]): Crypto[] => {
  return resp.map((resp) => ({
    id: resp.id,
    price: parseFloat(resp.metrics.marketData.priceUSD),
    slug: resp.slug,
    symbol: resp.symbol,
    percentChangeUSDLast1h: parseFloat(
      resp.metrics.marketData.percentChangeUSDLast1H
    ),
    percentChangeUSDLast24h: parseFloat(
      resp.metrics.marketData.percentChangeUSDLast24H
    ),
    realVolumeLast24h: parseFloat(resp.metrics.marketData.realVolumeLast24h),
    reportedMarketcap: parseFloat(resp.metrics.marketcap.currentMarketcapUSD),
  }));
};

export default getAllCryptosAdapter;
