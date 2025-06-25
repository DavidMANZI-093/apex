import { LucideIcon } from 'lucide-react'
import React from 'react'

type Props = {
    icon: LucideIcon;
    title: string;
    description: string;
    deliverables: string[];
}

const card = (props: Props) => {
  return (
    <div className='flex flex-col !p-4 !rounded-lg !bg-white !border !border-french-grey/20 !shadow-lg'>
        <div className='flex items-center gap-2'>
            <props.icon className='w-6 h-6 text-verdigris' />
            <h3 className='!text-lg !font-medium !text-midnight-green/70'>{props.title}</h3>
        </div>

        <p className='text-french-grey leading-relaxed'>{props.description}</p>
        <h4 className='!text-lg !font-medium !text-midnight-green/70'>Applications:</h4>
        <ul className='list-disc list-inside text-french-grey'>
            {props.deliverables.map((deliverable, index) => (
                <li key={index}>{deliverable}</li>
            ))}
        </ul>
    </div>
  )
}

export default card