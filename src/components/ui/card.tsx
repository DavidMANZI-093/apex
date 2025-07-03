import { Calendar, CheckCircle, LucideIcon, MapPin, Quote, Star } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

type Props = {
    icon: LucideIcon;
    title: string;
    description: string;
    deliverables: string[];
};

const Card = (props: Props) => {
  return (
    <div className='flex flex-col !p-8 gap-6 !rounded-lg !bg-white !shadow-slate-gray/20 !shadow-md group hover:!shadow-lg hover:!scale-101 transition-all duration-200'>
        <div className="flex flex-col w-fit justify-center !p-3 !rounded-lg !bg-gradient-to-br from-indigo-dye/20 to-indigo-dye/80 group-hover:!scale-110 transition-all delay-100 duration-200">
            <props.icon className='w-8 h-8 text-white' />
        </div>
        <div className='flex flex-col justify-center gap-1'>
            <h3 className='!text-lg !font-medium !text-indigo-dye/85'>{props.title}</h3>
            <p className='text-slate-gray/80 leading-relaxed'>{props.description}</p>
        </div>

        <div className='flex flex-col gap-1'>
            <h4 className='!text-base !font-medium !text-indigo-dye/85'>Key Applications:</h4>
            <ul className='!list-disc !list-inside !text-slate-gray'>
                {props.deliverables.map((deliverable, index) => (
                    <li key={index}>
                        <span className='!text-slate-gray/80'>{deliverable}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
};

type PropsEx = {
    title: string;
    category: string;
    client: string;
    timeline: string;
    services: string[];
    challenge: string;
    solution: string;
    outcomes: string[];
    metrics: string;
    icon: LucideIcon;
    image: string;
    blurhash: string;
};

const CardEx = (props: PropsEx) => {
    return (
      <div className='grid grid-rows-[5fr_6fr] !rounded-lg !bg-white !border !border-french-grey/30 !shadow-md'>
          <div className='flex rounded-t-lg w-full bg-placeholder'>
            <Image className='!w-full !h-full !object-cover !rounded-t-lg' src={props.image} alt={props.title} width={500} height={500} blurDataURL={props.blurhash} placeholder="blur" />
            <span className='absolute text-xs !py-0.5 !px-2.5 !ml-2 !mt-2 rounded-xl font-medium !text-white bg-indigo-dye'>{props.category}</span>
          </div>
        
          <div className='flex flex-col gap-4 !p-6'>
            <div className='flex flex-col justify-center gap-1'>
                <h4 className='!text-xl !font-medium !text-indigo-dye/85'>{props.title}</h4>
                <ul className='flex gap-2 flex-wrap'>
                    {props.services.map((service, index) => (
                        <li className='text-xs !py-0.5 !px-2.5 rounded-xl font-medium !text-indigo-dye/70 bg-indigo-dye/5' key={index}>{service}</li>
                    ))}
                </ul>
            </div>

            <div className='flex flex-col gap-2'>
                <h5 className='!font-medium !text-midnight-green/90'>{props.category}</h5>
                
            </div>

            <div className='flex gap-2'>
                <Calendar className='w-4 h-4 text-french-grey' />
                <p className='text-sm text-french-grey'>{props.timeline}</p>
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
  };

  type PropsTx = {
    quote: string;
    author: string;
    position: string;
    company: string;
    rating: number;
  };

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

          <p className='text-sm italic wra text-french-grey'>&quot;{props.quote}&quot;</p>
          
          <hr className="!border-t-french-grey/40" />
            
          <div className='flex flex-col gap-1 !ml-2'>
              <h4 className='!font-medium !text-midnight-green/90'>{props.author}</h4>
              <p className='text-sm text-french-grey'>{props.position}, {props.company}</p>
          </div>
      </div>
    )
  };

export {Card, CardEx, CardTx};
