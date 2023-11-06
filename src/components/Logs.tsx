'use client';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { useLogStore } from '@/store';

export default function Logs() {
  const logs = useLogStore((state) => state.logs);

  return (
    <Table className='h-full'>
      <TableCaption>
        {Object.keys(logs).length === 0 ? '' : 'A list of your recent logs.'}
      </TableCaption>

      <TableHeader>
        <TableRow className='tracking-widest'>
          <TableHead className='w-1/3 text-slate-500'>Date</TableHead>
          <TableHead className='w-1/3 text-slate-500'>Hours</TableHead>
          <TableHead className='w-1/3 text-slate-500'>Note</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.keys(logs).map((key) => {
          const log = logs[key];
          return (
            <TableRow
              key={key}
              className={cn('font-bold text-black', {
                'bg-yellow-200': log.hour <= 5,
                'bg-green-400': log.hour > 5,
                'bg-orange-500': log.hour >= 10,
                'bg-red-600': log.hour >= 16,
              })}
            >
              <TableCell className='font-extrabold'>
                {log.date.toDateString()}
              </TableCell>
              <TableCell>{log.hour}</TableCell>
              <TableCell>{log.note}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
