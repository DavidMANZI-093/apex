import { LucideIcon, MapPin } from 'lucide-react'
import React from 'react'

type Props = {
    icon: LucideIcon;
    title: string;
    description: string;
    deliverables: string[];
}

const Card = (props: Props) => {
  return (
    <div className='flex flex-col !p-8 gap-6 !rounded-lg !bg-white !border !border-french-grey/30 !shadow-lg'>
        <div className='flex flex-col w-fit justify-center !p-3 !rounded-lg !bg-verdigris/10'>
            <props.icon className='w-6 h-6 text-verdigris' />
        </div>
        <div className='flex flex-col justify-center gap-1'>
            <h3 className='!text-lg !font-medium !text-midnight-green/70'>{props.title}</h3>
            <p className='text-french-grey leading-relaxed'>{props.description}</p>
        </div>

        <div className='flex flex-col gap-1'>
            <h4 className='!text-lg !font-medium !text-midnight-green/70'>Applications:</h4>
            <ul className='!list-disc !list-inside !text-verdigris/70'>
                {props.deliverables.map((deliverable, index) => (
                    <li key={index}>
                        <span className='!text-french-grey'>{deliverable}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

type PropsEx = {
    name: string;
    location: string;
    services: string[];
    timeline: string;
    outcomes: string;
    image: string;
}

const CardEx = (props: PropsEx) => {
    return (
      <div className='grid grid-rows-2 !rounded-lg !bg-white !border !border-french-grey/30 !shadow-lg'>
          <div className='aspect-[4/3] max-w-full rounded-t-lg w-full bg-placeholder'></div>
        
          <div className='flex flex-col justify-center gap-1'>
            <h4>{props.name}</h4>
            <div className='flex items-center gap-2'>
                <MapPin className='w-6 h-6 text-verdigris' />
                <p>{props.location}</p>
            </div>
          </div>

          <div>
            <h5>Services Rendered:</h5>
            <ul>
                {props.services.map((service, index) => (
                    <li className='!p-1 rounded bg-verdigris/10' key={index}>{service}</li>
                ))}
            </ul>
          </div>
          
          <p>{props.timeline}</p>
          <p>{props.outcomes}</p>
      </div>
    )
  }

export {Card, CardEx};