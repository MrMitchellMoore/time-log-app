import Calendar from '@/components/Calendar';
import Logs from '@/components/Logs';
import { NewLog } from '@/components/Newlog';

export default function Home() {
  return (
    <div className='p-5'>
      <div className='space-y-10'>
        <NewLog />
        <Calendar />
        <Logs />
      </div>
    </div>
  );
}
