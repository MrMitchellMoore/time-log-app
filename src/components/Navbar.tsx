import Link from 'next/link';
import { WatchIcon } from './icons/watch';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <div className='flex w-full items-center justify-between p-5'>
      <Link href='/' className='flex space-x-1'>
        <WatchIcon />
        <h1 className='scroll-m-20 text-xl font-extrabold tracking-wider text-yellow-400'>
          Time
        </h1>
      </Link>
      <Button>Logout</Button>
    </div>
  );
}
