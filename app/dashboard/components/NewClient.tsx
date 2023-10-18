import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "Anuj Sharma",
    paymentStatus: "10th July",
    totalAmount: "30000",
    paymentMethod: "Stocks",
  },
  {
    invoice: "Vishwas Dhabhai",
    paymentStatus: "12th July",
    totalAmount: "500000",
    paymentMethod: "Gold",
  },
  {
    invoice: "Devansh Jain",
    paymentStatus: "14th July",
    totalAmount: "30000",
    paymentMethod: "Stocks",
  },
];

export function TableDemoyes() {
  return (
    <Table>
      <TableCaption>A list of requests by Clients</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">CustomerName</TableHead>
          <TableHead>Requested</TableHead>
          <TableHead>InvestmentType</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableDemoyes;
