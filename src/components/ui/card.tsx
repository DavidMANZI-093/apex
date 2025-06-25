import { Calendar, CheckCircle, LucideIcon, MapPin, Quote, Star } from 'lucide-react'
import React from 'react'

type Props = {
    icon: LucideIcon;
    title: string;
    description: string;
    deliverables: string[];
}

const Card = (props: Props) => {
  return (
    <div className='flex flex-col !p-8 gap-6 !rounded-lg !bg-white !border !border-french-grey/30 !shadow-md'>
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
      <div className='grid grid-rows-[5fr_6fr] !rounded-lg !bg-white !border !border-french-grey/30 !shadow-md'>
          <div className='rounded-t-lg w-full bg-placeholder'></div>
        
          <div className='flex flex-col gap-4 !p-6'>
            <div className='flex flex-col justify-center gap-1'>
                <h4 className='!text-xl !font-medium !text-midnight-green/90'>{props.name}</h4>
                <div className='flex items-center gap-2'>
                    <MapPin className='w-4 h-4 text-french-grey' />
                    <p className='text-sm text-french-grey'>{props.location}</p>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <h5 className='!font-medium !text-midnight-green/90'>Services Rendered</h5>
                <ul className='flex gap-2 flex-wrap'>
                    {props.services.map((service, index) => (
                        <li className='text-xs !py-0.5 !px-2.5 rounded-xl font-medium !text-verdigris bg-verdigris/10' key={index}>{service}</li>
                    ))}
                </ul>
            </div>

            <div className='flex gap-2'>
                <Calendar className='w-4 h-4 text-french-grey' />
                <p className='text-sm text-french-grey'>Timeline: {props.timeline}</p>
            </div>
          
            <div>
                <div className='flex items-center gap-2'>
                    <CheckCircle className='w-4 h-4 text-verdigris' />
                    <h5 className='!font-medium !text-midnight-green/90'>Key Outcomes:</h5>
                </div>
                <p className='!pl-6 !text-sm text-french-grey'>{props.outcomes}</p>
            </div>
          </div>
      </div>
      
    )
  }

  type PropsTx = {
    quote: string;
    author: string;
    position: string;
    company: string;
    rating: number;
  }

  const CardTx = (props: PropsTx) => {
    return (
      <div className='flex flex-col !p-6 gap-4 !rounded-lg !bg-white !border !border-french-grey/30 !shadow-md'>
          <div className='flex items-center gap-2'>
            {Array.from({ length: (props.rating) }, (_, index) => (
              <Star key={index} className='w-4 h-4 fill-amber-500 text-transparent' />
            ))}
            {Array.from({ length: (5 - props.rating) }, (_, index) => (
              <Star key={index} className='w-4 h-4 fill-french-grey/60 text-transparent' />
            ))}<span className='leading-relaxed text-xs text-french-grey'>({props.rating}/5)</span>

          </div>
          
          <Quote className='w-9 h-9 text-verdigris/50' />
          
          <p className='text-sm italic text-french-grey'>&quot;{props.quote}&quot;</p>

          <hr className="!border-t-french-grey/40" />

          <div className='flex flex-col'>
            <h4 className='!font-medium !text-midnight-green/90'>{props.author}</h4>
            <p className='text-sm text-french-grey'>{props.position}, {props.company}</p>
          </div>
      </div>
    )
  }

export {Card, CardEx, CardTx};