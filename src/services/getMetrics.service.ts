const getMetricsService = async (symbol: string) => {
  const resp = await fetch(
    `http://localhost:3000/api/v1/metrics?symbol=${symbol}`
  );
  console.log({ resp });
  const res = await resp.json();
  return res;
};

export default getMetricsService;
