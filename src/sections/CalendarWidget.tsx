import { useLanguage } from '../translation/index.ts'

export default function CalendarWidget() {
  const { t } = useLanguage()
  return (
    <section className="flex flex-col-reverse md-plus:flex-row w-full items-center justify-center mt-28 lg:mt-37 rounded-3xl bg-white max-h-[100vh]">
      Calendar widget
    </section>

  );
}