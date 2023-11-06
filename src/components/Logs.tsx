import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useLogStore } from '@/store';

export default function Logs() {
  //const logs = useLogStore((state) => state.logs);
  return (
    <Table>
      <TableCaption>A list of your recent logs.</TableCaption>
      <TableHeader>
        <TableRow className='tracking-widest'>
          <TableHead className='w-1/3 text-slate-500'>Date</TableHead>
          <TableHead className='w-1/3 text-slate-500'>Hours</TableHead>
          <TableHead className='w-1/3 text-slate-500'>Note</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className='font-medium'>
            {new Date().toDateString()}
          </TableCell>
          <TableCell>10</TableCell>
          <TableCell>This is a placeholder</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
