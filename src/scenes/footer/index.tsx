import Logo from '@/assets/Logo.png'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className='mx-auto w-5/6 gap-16 md:flex'>
        <motion.div className="mt-16 basis-1/2 md:mt-0"
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <img src={Logo} alt="Логотип" />
          <p className='py-5'>
            Мы предлагаем разнообразные программы тренировок, составленные нашими опытными инструкторами, чтобы подходить как новичкам, так и опытным спортсменам. Вы найдете информацию о наших тренажерах и оборудовании, которые помогут вам развить силу, выносливость и гибкость.
          </p>
          <p>Ⓒ Все права защищены</p>
        </motion.div>
        <motion.div className="mt-16 basis-1/4 md:mt-0"
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h4 className='font-bold'>Контакты</h4>
          <p className="my-5">Мы всегда ждем вашего звонка!</p>
          <p className="my-5">+7 (999) 324-50-69</p>
        </motion.div>
        <motion.div className="mt-16 basis-1/4 md:mt-0"
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h4 className='font-bold'>Ссылки</h4>
          <p className="my-5">Телеграм</p>
          <p className="my-5">Вконтакте</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer