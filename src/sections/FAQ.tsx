import { useState } from 'react';
import { useLanguage } from '../translation/index.ts'
import { HashLink } from 'react-router-hash-link';

import Qmarks from '../assets/cloudQmarks.svg?react'
import Arrow from '../assets/smallArrow.svg?react'


export default function FAQ() {
  const { t } = useLanguage()
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [open5, setOpen5] = useState(false)
  return (
    <section id='FAQ' className="scroll-mt-24 lg:scroll-mt-37 flex flex-col w-full gap-8 sm:gap-16 items-center justify-center mt-16 lg:mt-37 rounded-3x min-h-150">
      <Qmarks aria-hidden="true" focusable="false" className='sm:hidden block w-40 h-auto'/>
      <h2>FAQ</h2>

      <div className='w-full flex flex-col sm:flex-row-reverse sm:justify-center sm:gap-32 sm:items-center'>
        <Qmarks aria-hidden="true" focusable="false" className='hidden sm:block w-80 h-auto'/>

        <div className='w-fit flex flex-col rounded-3xl'>
  
          <button onClick={() => setOpen1(!open1)} className={`gap-2 flex items-center justify-between text-start w-full bg-white py-3 px-4 transition-all duration-500 ${
              open1 ? 'rounded-t-3xl' : 'rounded-3xl'}`}>
            {t('sections.faq.questions.question1')} <div className='rotate-90 w-fit inline-block h-fit'><Arrow className='w-6 h-6'/></div>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out w-full ${
              open1 ? 'max-h-96' : 'max-h-0'
            } bg-blue-100 rounded-b-3xl`}
          >
            <div className="p-4"><p>{t('sections.faq.answers.answer1')}</p></div>
          </div>

          <button onClick={() => setOpen2(!open2)} className={`gap-2 flex items-center justify-between text-start w-full bg-white py-3 px-4 mt-2 transition-all duration-500 ${
              open2 ? 'rounded-t-3xl' : 'rounded-3xl'}`}>
            {t('sections.faq.questions.question2')} <div className='rotate-90 w-fit inline-block h-fit'><Arrow className='w-6 h-6'/></div>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out w-full ${
              open2 ? 'max-h-96' : 'max-h-0'
            } bg-blue-100 rounded-b-3xl`}
          >
            <div className="p-4"><p>{t('sections.faq.answers.answer2')}</p></div>
          </div>

          <button onClick={() => setOpen3(!open3)} className={`gap-2 flex items-center justify-between text-start w-full bg-white py-3 px-4 mt-2 transition-all duration-500 ${
              open3 ? 'rounded-t-3xl' : 'rounded-3xl'}`}>
            {t('sections.faq.questions.question3')} <div className='rotate-90 w-fit inline-block h-fit'><Arrow className='w-6 h-6'/></div>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out w-full ${
              open3 ? 'max-h-96' : 'max-h-0'
            } bg-blue-100 rounded-b-3xl`}
          >
            <div className="p-4"><p>{t('sections.faq.answers.answer3')}</p></div>
          </div>

          <button onClick={() => setOpen4(!open4)} className={`gap-2 flex items-center justify-between text-start w-full bg-white py-3 px-4 mt-2 transition-all duration-500 ${
              open4 ? 'rounded-t-3xl' : 'rounded-3xl'}`}>
            {t('sections.faq.questions.question4')} <div className='rotate-90 w-fit inline-block h-fit'><Arrow className='w-6 h-6'/></div>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out w-full ${
              open4 ? 'max-h-96' : 'max-h-0'
            } bg-blue-100 rounded-b-3xl`}
          >
            <div className="p-4"><p>{t('sections.faq.answers.answer4')}</p></div>
          </div>

          <button onClick={() => setOpen5(!open5)} className={`gap-2 flex items-center justify-between text-start w-full bg-white py-3 px-4 mt-2 transition-all duration-500 ${
              open5 ? 'rounded-t-3xl' : 'rounded-3xl'}`}>
            {t('sections.faq.questions.question5')} <div className='rotate-90 w-fit inline-block h-fit'><Arrow className='w-6 h-6'/></div>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out w-full ${
              open5 ? 'max-h-96' : 'max-h-0'
            } bg-blue-100 rounded-b-3xl`}
          >
            <div className="p-4"><p>{t('sections.faq.answers.answer5')}</p></div>
          </div>
          <div className='w-full flex flex-col mt-16 sm:flex-row items-center justify-between sm:justify-center gap-4 sm:gap-8'>
            <HashLink to='/#paths' className='button w-full sm:w-auto text-center'>{t('sections.faq.path')}</HashLink>
            <HashLink to='/#contacts' className='button-secondary text-center'>{t('sections.faq.contact')}</HashLink>
          </div>
        </div>
        

      </div>

      
      


      
    </section>

  );
}