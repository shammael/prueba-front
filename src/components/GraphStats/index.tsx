import Box from "../Box";
import AppTable from "./Components/Table";
import TableProvider from "./context/table.provider";

const GraphStats = () => {
  return (
    <Box>
      <TableProvider>
        <AppTable />
      </TableProvider>
    </Box>
  );
};

export default GraphStats;
