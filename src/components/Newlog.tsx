'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AddBtn } from './icons/addition';
import { DatePicker } from './DatePicker';
import { useLogStore } from '@/store';
import { useToast } from '@/components/ui/use-toast';
import dayjs from 'dayjs';

export function NewLog() {
  const { toast } = useToast();
  const log = useLogStore((state) => state.log);
  const setLog = useLogStore((state) => state.setLog);
  const setLogs = useLogStore((state) => state.setLogs);
  const logs = useLogStore((state) => state.setLogs);

  const closeDialog = () => {
    document.getElementById('close-btn')?.click();
  };

  const validateLog = () => {
    if (!log.date || !log.hour || log.hour === 0) {
      throw 'Date or hour can not be empty';
    } else if (log.hour >= 24) {
      throw 'Hour can not be greater than or equal to 24!';
    }
  };

  const submitLog = () => {
    try {
      validateLog();
      setLogs(log, dayjs(log.date).format('YYYY-MM-DD'));
      toast({
        title: 'Successfully created log',
        description: `${log.hour} in ${log.date.toDateString()}`,
        style: { color: 'green' },
      });
      closeDialog();
    } catch (error) {
      toast({
        title: 'Failed to create log',
        description: error as string,
        variant: 'destructive',
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='flex w-full cursor-pointer items-center justify-center rounded-md border border-dashed py-3 hover:border-blue-500 sm:w-72'>
          <AddBtn />
        </div>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Create Log</DialogTitle>
          <DialogDescription>
            {
              'Remember, time is your most valuable asset invest it wisely with our Time Log App!'
            }
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='date' className='text-right'>
              Date{' '}
            </Label>
            <DatePicker />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='hour' className='text-right'>
              Hour
            </Label>
            <Input
              id='hour'
              type='number'
              className='col-span-3'
              value={log.hour}
              onChange={(e) =>
                setLog({ ...log, hour: parseInt(e.target.value) })
              }
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='note' className='text-right'>
              Note
            </Label>
            <Input
              id='note'
              type='text'
              placeholder='Add a note...'
              className='col-span-3'
              value={log.note}
              onChange={(e) => setLog({ ...log, note: e.target.value })}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit' onClick={submitLog}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
