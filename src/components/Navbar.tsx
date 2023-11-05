import { WatchIcon } from './icons/watch';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <div className='flex w-full items-center justify-between p-5'>
      <div className='flex space-x-3'>
        <WatchIcon />
        <h1 className='scroll-m-20 text-xl font-extrabold tracking-tight'>
          Time
        </h1>
      </div>
      <Button>Logout</Button>
    </div>
  );
}
