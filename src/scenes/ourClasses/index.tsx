import SectionHeader from '@/components/SectionHeader';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { ClassType } from '@/shared/types';
import ClassItem from './ClassItem';
import { motion } from 'framer-motion';

type Props = {
    reference: (ref: HTMLElement) => void;
}

const classList: ClassType[] = [
    {
        name: "Силовые залы",
        description:
          "Здесь каждый может найти зал по душе",
        image: image1,
      },
      {
        name: "Йога залы",
        description:
          "Здесь каждый может найти зал по душе",
        image: image2,
      },
      {
        name: "Залы для пресса",
        description:
          "Здесь каждый может найти зал по душе",
        image: image3,
      },
      {
        name: "Приключенческие залы",
        description:
          "Здесь каждый может найти зал по душе",
        image: image4,
      },
      {
        name: "Фитнес залы",
        image: image5,
      },
      {
        name: "Тренировочные залы",
        description:
          "Здесь каждый может найти зал по душе",
        image: image6,
      },
];

const OurClasses = ({reference}: Props) => {
  return (
    <section id='ourClasses' ref={reference} className='bg-primary-100 py-32'>
        <div className='w-5/6 mx-auto'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
            }}
          >
            <SectionHeader>Наши спортзалы</SectionHeader>
            <p className='mt-8 md:w-3/5'>Откройте двери к своему идеальному телу вместе с нашими спортзалами! Мы предлагаем не просто тренировки, а полноценный фитнес-опыт, который поможет вам достичь новых высот в своей форме и самочувствии. Наши современные и просторные залы оснащены самым передовым оборудованием, чтобы вы могли эффективно тренироваться и получить максимум от каждой минуты, проведенной здесь.  У нас также проводятся разнообразные групповые занятия, включая йогу, пилатес, функциональную тренировку и многое другое, чтобы вы могли найти именно то, что подходит вам. Присоединяйтесь к нашему спортивному сообществу и превратите свои фитнес-цели в реальность. Начните сегодня и обретите свою лучшую форму жизни!</p>
          </motion.div>
          <div className='mt-10 h-[383px] w-full overflow-x-auto overflow-y-hidden'>
              <ul className='w-[2800px] whitespace-nowrap'>
                  {classList.map(item => (
                      <ClassItem key={item.name} {...item}/>
                  ))}
              </ul>
          </div>
        </div>
    </section>
  )
}

export default OurClasses