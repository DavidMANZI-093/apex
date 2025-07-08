import { Calendar, ChartNoAxesCombined, MapPin, Quote, Star } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { CardExProps, CardProps, CardSxProps, CardTxProps } from '@/types';

const Card = (props: CardProps) => {
  return (
    <div className='flex flex-col !p-8 gap-6 !rounded-lg !bg-white !shadow-slate-gray/20 !shadow-md !max-w-116 group hover:!shadow-lg hover:!scale-101 ease-in-out transition-all duration-200'>
        <div className="flex flex-col w-fit justify-center !p-3 !rounded-lg !bg-gradient-to-br from-indigo-dye/20 to-indigo-dye/80 group-hover:!scale-110 transition-all delay-100 duration-200">
            <props.icon className='w-8 h-8 text-white' />
        </div>
        <div className='flex flex-col justify-center gap-1'>
            <h3 className='!text-lg !font-medium !text-indigo-dye/85'>{props.title}</h3>
            <p className='text-slate-gray/80 leading-relaxed'>{props.description}</p>
        </div>

        <div className='flex flex-col gap-1'>
            <h4 className='!text-base !font-medium !text-indigo-dye/85'>Key Applications:</h4>
            <ul className='!list-disc !list-inside text-slate-gray !ml-2'>
                {props.deliverables.map((deliverable, index) => (
                    <li className='' key={index}>
                        <span className='!text-slate-gray/80'>{deliverable}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
};

const CardEx = (props: CardExProps) => {
    return (
      <div className='grid grid-rows-[5fr_6fr] !rounded-lg !bg-white !shadow-md !max-w-128 !shadow-slate-gray/20 group hover:!shadow-lg hover:!scale-101 ease-in-out transition-all duration-200'>
          <div className='flex gap-2 rounded-t-lg w-full bg-placeholder overflow-hidden'>
            {props.image && <Image className='!w-full !h-full !object-cover !rounded-t-lg group-hover:!scale-110 transition-all duration-3000 ease-in-out' src={props.image} alt={props.title} width={500} height={500} blurDataURL={props.blurhash} placeholder="blur" />}
            <span className='absolute text-xs !py-0.5 !px-2.5 !ml-2 !mt-2 rounded-xl font-medium !text-white bg-indigo-dye'>{props.category}</span>
          </div>
        
          <div className='flex flex-col gap-6 !p-6'>
            <div className='flex flex-col justify-center gap-1'>
                <h4 className='!text-xl !font-medium !text-indigo-dye/85'>{props.title}</h4>
                <ul className='flex gap-2 flex-wrap'>
                    {props.services.map((service, index) => (
                        <li className='text-xs !py-0.5 !px-2.5 rounded-xl font-medium !text-indigo-dye/70 bg-indigo-dye/5' key={index}>{service}</li>
                    ))}
                </ul>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='flex gap-2 items-start'>
                    <MapPin className='w-4 h-4 text-slate-gray' />
                    <p className='text-sm text-indigo-dye/85'>Client:</p>
                    <p className='text-sm text-slate-gray/80'>{props.client}</p>
                </div>

                <div className='flex gap-2 items-start'>
                    <Calendar className='w-4 h-4 text-slate-gray' />
                    <p className='text-sm text-indigo-dye/85'>Timeline:</p>
                    <p className='text-sm text-slate-gray/80'>{props.timeline}</p>
                </div>

                <div className='flex gap-2 items-start'>
                    <ChartNoAxesCombined className='w-4 h-4 text-slate-gray' />
                    <p className='text-sm text-indigo-dye/85'>Metrics:</p>
                    <p className='text-sm text-slate-gray/80'>{props.metrics}</p>
                </div>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <h5 className='!font-medium !text-indigo-dye/85'>Key Outcomes:</h5>
                </div>
                <ul className='!list-disc !list-inside !ml-2 !text-slate-gray'>
                    {props.outcomes.map((outcome, index) => (
                        <li key={index}>
                            <span className='!text-sm !text-slate-gray/80'>{outcome}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
      </div>
      
    )
  };


  const CardSx = (props: CardSxProps) => {
    return (
        <div className='flex flex-col !p-6 justify-between gap-4 !rounded-lg !bg-white max-w-96 !shadow-md shadow-slate-gray/20 group hover:!shadow-lg hover:!scale-101 ease-in-out transition-all duration-200'>
            <div className='flex justify-between'>
                <div className="flex flex-col w-fit justify-center !p-3 !rounded-lg bg-indigo-dye/50 group-hover:!scale-110 transition-all delay-100 duration-200">
                    <props.icon className='w-8 h-8 text-white' />
                </div>
                <span className={`text-xs !py-0.5 !px-2.5 max-w-fit max-h-fit !ml-2 !mt-2 rounded-xl font-medium !text-white ${props.sector === "Government" ? "bg-indigo-dye/80" : "bg-dutch-white"}`}>{props.sector}</span>
            </div>

            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-2'>
                    <h3 className='!text-lg !font-semibold !text-indigo-dye/85'>{props.acronym}</h3>
                    <hr className='!border-t-dutch-white/60 w-full' />
                </div>

                <h4 className='!text-sm !font-medium !text-indigo-dye/75'>{props.name}</h4>
            </div>

            <p className='!text-sm text-slate-gray/80 leading-relaxed'>{props.description}</p>

            <div className='flex flex-col gap-2'>
                <h4 className='!text-xs !font-medium !text-indigo-dye/85'>SERVICES PROVIDED</h4>
                <ul className='flex gap-2 flex-wrap'>
                    {props.services.map((service, index) => (
                        <li className='text-xs !py-0.5 !px-2.5 rounded-xl font-medium !text-indigo-dye/70 bg-indigo-dye/5' key={index}>{service}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
  }

  const CardTx = (props: CardTxProps) => {
    return (
      <div className='flex flex-col !p-6 justify-between gap-4 !rounded-lg !bg-white max-w-128 !shadow-md shadow-slate-gray/20 group hover:!shadow-lg hover:!scale-101 ease-in-out transition-all duration-200'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
                {Array.from({ length: (props.rating) }, (_, index) => (
                    <Star key={index} className='w-4 h-4 fill-amber-500 text-transparent' />
                ))}
                {Array.from({ length: (5 - props.rating) }, (_, index) => (
                    <Star key={index} className='w-4 h-4 fill-slate-gray/20 text-transparent' />
                ))}<span className='leading-relaxed text-xs text-slate-gray/80'>({props.rating}/5)</span>
            </div>
          
            <Quote className='w-9 h-9 text-indigo-dye/60' />

            <p className='italc !font-caveat !font-medium !text-xl !text-slate-gray/80 group-hover:!text-indigo-dye transition-color duration-200'>&quot;{props.quote}&quot;</p>
          </div>
          
          <div className='flex flex-col gap-4'>
            <hr className="!border-t-slate-gray/20" />
            
            <div className='flex flex-col gap-1 !ml-2'>
                <h4 className='!font-medium !text-indigo-dye/85'>{props.author}</h4>
                <p className='text-sm text-slate-gray/80'>{props.position}, {props.company}</p>
            </div>
          </div>
      </div>
    )
  };

export {Card, CardEx, CardSx, CardTx};
