import { useLanguage } from '../translation/index.ts'
import { useEffect, useRef, useState } from 'react'
import Facebook from '../assets/facebook.svg?react'
import Instagram from '../assets/instagram.svg?react'
import ExMark from '../assets/exMark.svg?react'
import CheckMark from '../assets/checkMark.svg?react'


export default function Contacts() {
  const { t } = useLanguage()

  const formRef = useRef<HTMLFormElement>(null)
  const [result, setResult] = useState<string>('')
  const [resultClass, setResultClass] = useState<string>('text-white')

  useEffect(() => { //this runs when the component is done rendering
    const form = formRef.current
    if (!form) return //safety check: if form doesn't exist yet stop here

    //when you click the submit button
    const handleSubmit = async (event: Event) => {
      event.preventDefault()
      event.stopPropagation()

      //Check native browser validity first
      if (!form.checkValidity()) {
        const firstInvalid = form.querySelector(':invalid') as HTMLElement
        firstInvalid?.focus() //if firstInvalid field exists move cursor to it
        //Add the 'was-validated' class AFTER checking validity but BEFORE showing errors
        //This allows the CSS rules to display the feedback messages correctly
        form.classList.add('was-validated') //show the message
        setResult('') //clear any previous success/error messages on validation failure
        setResultClass('text-white') //reset message color
        return //stop execution if validation fails
      }

      //if form is valid, remove the validation class to clear any previous error states
      form.classList.remove('was-validated')

      //and proceed to submit it
      const formData = new FormData(form) //FormData is a browser API that collects all the data from a form automatically
      const object: { [key: string]: FormDataEntryValue } = {} //FormDataEntryValue is either str or file
      formData.forEach((value, key) => {
        object[key] = value
      })
      const json = JSON.stringify(object) //wbe3forms API expects json

      setResult(t('sections.contacts.form.loading'))
      setResultClass('text-white')

      //send data to the web3forms server
      try {
        const response = await fetch('https://api.web3forms.com/submit', { //fetch is a browser API
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', //I'm sending json
            'Accept': 'application/json' //I expect json back
          },
          body: json
        })

        if (response.status === 200) {
          setResult(t('sections.contacts.form.submitted'))
          setResultClass('text-[var(--text-highlight)]')
          form.reset() //browser method that clears all the fields
          //I won't add 'was-validated' here to keep the form clean after reset

          //after 10 seconds clear the success message
          setTimeout(() => {
            setResult('')
          }, 10000)
        } else {
          console.log(response)
          setResult(t('sections.contacts.form.failed'))
          setResultClass('text-red-500')
        }
      } catch (error) {
        console.log(error)
        setResult(t('sections.contacts.form.failed'))
        setResultClass('text-red-500')
      }
    }

    form.addEventListener('submit', handleSubmit) //when do I run the handleSubit function? Every time the form is submitted.

    return () => {
      form.removeEventListener('submit', handleSubmit) //cleanup to prevent memory leak
    }
  }, [t])

  return (
    <section id='contacts' className="scroll-mt-28 lg:scroll-mt-37 mt-28 lg:mt-37 flex flex-col gap-8">
      <h2 className='text-center whitespace-pre-line mb-8 sm:mb-16'>{t('sections.contacts.h2')}</h2>




      <div className="bg-[var(--feather-blue)] rounded-3xl flex flex-col lg:flex-row items-center justify-center p-8 gap-8">
        <div className="flex flex-col gap-4 flex-2 lg:max-w-[60%]">
          <div className="text-center">
            <h3 className="text-3xl text-white mb-4">
              {t('sections.contacts.form.title')}
            </h3>
          </div>
          {/*action and method here on the form element are fallback options. preventDefaults() in the form submission logic (handleSubmit function) stops them from being used */}
          <form ref={formRef} action="https://api.web3forms.com/submit" method="POST" id="form" className="needs-validation" noValidate>
            <input type="hidden" name="access_key" value="NEW-KEY-WITH-CORRECT-MAIL-HERE" />
            <input type="hidden" name="subject" value="New Submission from Web3Forms" />
            <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />
  {/*Name*/}
            <div className="flex flex-col sm:flex-row mb-6 gap-4">
              <div className="w-full md:w-1/2">
                <label htmlFor="first_name" 
                      className="block mb-2 text-base text-white">
                        {t('sections.contacts.form.name.inputName')}
                </label>
                <input type="text" 
                      name="name" 
                      id="first_name" 
                      placeholder={t('sections.contacts.form.name.placeholder')} 
                      required 
                      className="w-full px-3 py-2 placeholder-[var(--text-light)] border-2 border-white bg-white rounded-2xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
                />
                <div className="empty-feedback invalid-feedback text-white text-sm mt-2">
                  <ExMark className="inline-block aspect-square mr-1" />
                  {t('sections.contacts.form.name.warning')}
                </div>
              </div>
    {/*Surame*/}
              <div className="w-full md:w-1/2">
                <label htmlFor="lname" 
                      className="block mb-2 text-base text-white">
                        {t('sections.contacts.form.surname.inputName')}</label>
                <input type="text" 
                      name="last_name" 
                      id="lname" 
                      placeholder={t('sections.contacts.form.surname.placeholder')} 
                      required 
                      className="w-full px-3 py-2 placeholder-[var(--text-light)] border-2 border-white bg-white rounded-2xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
                />
                <div className="empty-feedback invalid-feedback text-white text-sm mt-2">
                  <ExMark className="inline-block aspect-square mr-1" />
                  {t('sections.contacts.form.surname.warning')}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row mb-6 space-x-4">
    {/*Mail*/}
              <div className="w-full md:w-1/2">
                <label htmlFor="email" className="block mb-2 text-base text-white">{t('sections.contacts.form.mail.inputName')}</label>
                <input type="email" 
                      name="email" 
                      id="email" 
                      placeholder={t('sections.contacts.form.mail.placeholder')} 
                      required 
                      className="w-full px-3 py-2 placeholder-[var(--text-light)] border-2 border-white bg-white rounded-2xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                 />
                <div className="empty-feedback text-white text-sm mt-2">
                  <ExMark className="inline-block aspect-square mr-1" />
                  {t('sections.contacts.form.mail.warning')}
                </div>
                <div className="invalid-feedback text-white text-sm mt-2">
                  <ExMark className="inline-block aspect-square mr-1" />
                  {t('sections.contacts.form.mail.warning')}
                </div>
              </div>
    {/*Phone*/}
              <div className="w-full md:w-1/2">
                <label htmlFor="phone" 
                      className="block mb-2 text-base text-white">
                        {t('sections.contacts.form.phone.inputName')}
                </label>
                <input type="tel" 
                      name="phone" 
                      id="phone" 
                      placeholder={t('sections.contacts.form.phone.placeholder')}  
                      className="w-full px-3 py-2 placeholder-[var(--text-light)] border-2 border-white bg-white rounded-2xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                 />
              </div>
            </div>
    {/*Message*/}
            <div className="mb-6">
              <label htmlFor="message" 
              className="block mb-2 text-base text-white">
                {t('sections.contacts.form.message.inputName')}
              </label>

              <textarea rows={5} 
                        name="message" 
                        id="message" 
                        placeholder={t('sections.contacts.form.message.placeholder')} 
                        className="w-full min-h-40 px-3 py-2 placeholder-[var(--text-light)] border-2 border-white bg-white rounded-2xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
                        required>
              </textarea>
              <div className="empty-feedback invalid-feedback text-white text-sm mt-1">
                <ExMark className="inline-block aspect-square mr-1" />
                {t('sections.contacts.form.message.warning')}
              </div>
            </div>
            <button type="submit" 
                    className="px-8 py-4 text-white bg-[var(--blue-highlight)] rounded-3xl focus:bg-[var(--blue-highlight)] focus:outline-none"
                    >
                {t('sections.contacts.form.submit')}
            </button>
            {result && (
              <p className={`mt-8 mb-4 text-base text-center ${resultClass}`} id="result">
                {resultClass === 'text-[var(--text-highlight)]' && (
                  <CheckMark className="inline-block aspect-square mr-2" />
                )}
                {resultClass === 'text-red-500' && (
                  <ExMark className="inline-block aspect-square mr-2" />
                )}
                {result}
              </p>
            )}
          </form>
        </div>


        
        <div className='w-full flex flex-col gap-8 flex-1'>
          <div className='w-full'>
            <p className='text-center text-white mb-2'>{t('sections.contacts.callToAction1')}</p>
            <p className='text-[var(--text-highlight)] text-center text-[18px]'>naturopatagiglio@gmail.com</p>
          </div>

          <div className='flex flex-col gap-4 w-full'>
            <h3 className='text-white text-center'>{t('sections.contacts.callToAction2')}</h3>

            <div className='flex w-full items-center justify-center gap-4'>
              <a 
                href='https://www.instagram.com/naturopata.monica.giglio/' 
                target="_blank" 
                rel="noopener noreferrer" 
                className='bg-[var(--blue-highlight)] p-2 rounded-full inline-block'
              >
                <Instagram 
                  aria-hidden="true" 
                  className='w-8 h-8 block text-white hover:text-highlight'
                />
              </a>
              <a 
                href='https://www.facebook.com/monica.giglio.7' 
                target="_blank" 
                rel="noopener noreferrer" 
                className='bg-[var(--blue-highlight)] p-2 rounded-full inline-block'
              >
                <Facebook 
                  aria-hidden="true" 
                  className='w-8 h-8 block text-white hover:text-highlight'
                />
              </a>
            </div>
          </div> 
        </div>
        
    </div>

    <p className='text-center'>{t('sections.contacts.allRightsReserved')}</p>

    </section>

  );
}

//TODO generate new API key with correct mail