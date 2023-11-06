import dayjs from 'dayjs';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { cn } from '@/lib/utils';

export default function Calendar() {
  function getDateInMonth(year = dayjs().year(), month = dayjs().month()) {
    const startDate = dayjs().year(year).month(month).date(1);
    const endDate = startDate.endOf('month');

    const datesArray = [];

    for (let i = startDate.date(); i <= endDate.date(); i++) {
      datesArray.push(startDate.date(i).format('YYYY-MM-DD'));
    }

    return datesArray;
  }

  const getColor = (value: number) => {
    if (value === 0) {
      return 'bg-gray-100';
    } else if (value <= 5) {
      return 'bg-blue-500';
    } else if (value <= 10) {
      return 'bg-green-500';
    } else {
      return 'bg-purple-500';
    }
  };

  const hour = 0;

  return (
    <div>
      <h1 className='my-2 text-center text-3xl text-yellow-400 md:text-5xl'>
        Calendar
      </h1>
      <div className='flex flex-wrap justify-center gap-2 rounded-md border border-dashed p-10 hover:border-blue-500'>
        {getDateInMonth().map((value, index) => {
          return (
            <HoverCard key={index}>
              <HoverCardTrigger>
                <div
                  className={cn(
                    'h-5 w-5 cursor-pointer rounded-sm',
                    getColor(hour || 0)
                  )}
                ></div>
              </HoverCardTrigger>
              <HoverCardContent>
                {hour || 0} hours on {value}
              </HoverCardContent>
            </HoverCard>
          );
        })}
      </div>
    </div>
  );
}
