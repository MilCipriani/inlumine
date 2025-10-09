import { useLanguage } from '../translation/index.ts'
import { useEffect, useRef, useState } from 'react'


export default function Contacts() {
  const { t } = useLanguage()

  const formRef = useRef<HTMLFormElement>(null)
  const [result, setResult] = useState<string>('')
  const [resultClass, setResultClass] = useState<string>('text-white')

  useEffect(() => {
    const form = formRef.current
    if (!form) return

    const handleSubmit = async (event: Event) => {
      event.preventDefault()
      event.stopPropagation()

      if (!form.checkValidity()) {
        const firstInvalid = form.querySelector(':invalid') as HTMLElement
        firstInvalid?.focus()
        form.classList.add('was-validated')
        return
      }

      // Form is valid, submit it
      const formData = new FormData(form)
      const object: { [key: string]: FormDataEntryValue } = {}
      formData.forEach((value, key) => {
        object[key] = value
      })
      const json = JSON.stringify(object)
      
      setResult('Please wait...')
      setResultClass('text-white')

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: json
        })

        const responseJson = await response.json()
        
        if (response.status === 200) {
          setResult(responseJson.message)
          setResultClass('text-green-500')
          form.reset()
          form.classList.remove('was-validated')
          
          // Hide result after 5 seconds
          setTimeout(() => {
            setResult('')
          }, 5000)
        } else {
          console.log(response)
          setResult(responseJson.message)
          setResultClass('text-red-500')
        }
      } catch (error) {
        console.log(error)
        setResult('Something went wrong!')
        setResultClass('text-red-500')
      }

      form.classList.add('was-validated')
    }

    form.addEventListener('submit', handleSubmit)

    return () => {
      form.removeEventListener('submit', handleSubmit)
    }
  }, [])

  return (
    <section id='contacts' className="scroll-mt-28 lg:scroll-mt-37 mt-28 lg:mt-37 flex flex-col gap-8">
      <h2 className='text-center whitespace-pre-line mb-16'>{t('sections.contacts.h2')}</h2>




      <div className="bg-[var(--feather-blue)] rounded-3xl">
        <div className="py-8 p-4 flex flex-col gap-4">
          <div className="text-center">
            <h3 className="text-3xl text-white mb-4">
              {t('sections.contacts.form.title')}
            </h3>
          </div>
          <form ref={formRef} action="https://api.web3forms.com/submit" method="POST" id="form" className="needs-validation" noValidate>
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            <input type="hidden" name="subject" value="New Submission from Web3Forms" />
            <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />
            {/*Name*/}
            <div className="flex flex-col sm:flex-row mb-6 space-x-4">
              <div className="w-full md:w-1/2">
                <label htmlFor="fname" 
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
                <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
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
                <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
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
                <div className="empty-feedback text-red-400 text-sm mt-1">
                  {t('sections.contacts.form.mail.warning')}
                </div>
                <div className="invalid-feedback text-red-400 text-sm mt-1">
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
            <div className="mb-6">
              <label htmlFor="message" 
              className="block mb-2 text-base text-white">
                {t('sections.contacts.form.message.inputName')}
              </label>

              <textarea rows={5} 
                        name="message" 
                        id="message" 
                        placeholder={t('sections.contacts.form.message.placeholder')} 
                        className="w-full px-3 py-2 placeholder-[var(--text-light)] border-2 border-white bg-white rounded-2xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" 
                        required>
              </textarea>
              <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                {t('sections.contacts.form.message.warning')}
              </div>
            </div>
            <div className="mb-6">
              <button type="submit" 
                      className="px-8 py-4 text-white bg-[var(--blue-highlight)] rounded-3xl focus:bg-[var(--blue-highlight)] focus:outline-none">
                      {t('sections.contacts.form.submit')}
              </button>
            </div>
            <p className={`text-base text-center ${resultClass}`} id="result">{result}</p>
          </form>
        </div>
    </div>


    </section>

  );
}