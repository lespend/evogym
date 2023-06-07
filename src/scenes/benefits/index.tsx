import SectionHeader from "@/components/SectionHeader";
import { SelectedPage } from "@/shared/types"
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/20/solid"
import { motion } from "framer-motion"
import { BenefitItemType } from "@/shared/types"
import BenefitItem from "./BenefitItem";
import ActionButton from "@/components/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'
import { useMouseCoordinates } from "@/hooks/useMouseCoordinates";
import { useEffect } from 'react'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  reference: (ref: HTMLElement) => void;
}

const benefits: BenefitItemType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'Современное оборудование',
    content: 'Откройте новый уровень тренировок с современным оборудованием в нашем спортзале. Мы предлагаем передовые тренажеры и инновационные решения, которые помогут вам достичь максимальных результатов. Будьте в форме, развивайте силу и выносливость с помощью нашего эффективного оборудования. Переведите свои тренировки на новый уровень и достигните своих целей быстрее и эффективнее.'
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: '10+ разнообразных залов',
    content: 'В нашем фитнес-клубе вы найдете разнообразные залы, включая просторный кардиозал с современными тренажерами для укрепления сердечно-сосудистой системы и повышения выносливости. У нас также есть силовой зал, оборудованный силовыми тренажерами и свободными весами, чтобы вы могли развивать силу и формировать мышцы по своим предпочтениям и целям.'
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Экспертные и профессиональные тренеры',
    content: 'Мы предлагаем персонализированные тренировки и поддержку тренеров, чтобы обеспечить вам максимальные результаты и мотивацию на каждом этапе вашего пути к фитнесу.'
  }
]

const Benefits = ({ setSelectedPage, reference }: Props) => {
  const [x, y] = useMouseCoordinates()

  return (
    <section
      id='benefits'
      className="bg-slate-50"
      ref={reference}
    >
      <div className="mx-auto w-5/6 py-20 ">
        <motion.div
          className="md:w-2/5 md:my-5"
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <SectionHeader>Больше чем просто спортзал</SectionHeader>
          <p className="my-5 text-sm">
            Мы предоставляем оборудование для фитнеса мирового класса, тренеров и залы,
            чтобы вы с легкостью достигли своих целей в фитнесе. Мы обеспечиваем заботу
            о каждом участнике.
          </p>
        </motion.div>

        <motion.div
          className="md:flex justify-center gap-8 mt-5"
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {benefits.map((benefit) => (
            <BenefitItem key={benefit.title} {...benefit} setSelectedPage={setSelectedPage} />
          ))}
        </motion.div>

        <div className="md:mt-32 mt-16 md:flex items-center justify-center gap-16">
          <motion.img
            className="mx-auto" src={BenefitsPageGraphic} alt="Картинка преимуществ"
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
          />
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            className="relative"
          >
            <div className="content-abstractwaves absolute" style={{ top: -y*0.05 - 40, left: -x*0.025 -40 }}></div>
            <SectionHeader>Тысячи довольных клиентов <span className="text-primary-500">EVOGYM</span></SectionHeader>
            <p className="mt-5">Мы гордимся тем, что создали уютную и мотивирующую обстановку для наших клиентов. Наша команда профессиональных тренеров всегда готова помочь вам достичь ваших фитнес-целей. Мы рады видеть довольных клиентов, которые регулярно посещают наш спортзал и заметно улучшают свою физическую форму.</p>
            <p className="mt-5">Каждый день мы слышим восторженные отзывы от наших довольных клиентов, которые делятся своими историями успеха. Они говорят о том, как наш спортзал изменил их жизнь, помог им снизить вес, улучшить физическую выносливость и повысить уровень энергии. Наша программа тренировок разнообразна и адаптирована к различным фитнес-уровням, позволяя каждому найти именно то, что ему подходит. Мы искренне верим в нашу способность вдохновить и помочь вам достичь ваших целей. Присоединяйтесь к нашему спортзалу и станьте частью нашего сообщества, где ваш успех становится нашим приоритетом.</p>
            <div className="relative">
              <div className="content-sparkles absolute" style={{ bottom: -y*0.07 - 40, right: -x*0.1 + 220 }}></div>
              <ActionButton className="mt-12 z-10 inline-block relative" setSelectedPage={setSelectedPage}>Присоединиться сейчас</ActionButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  )
}

export default Benefits