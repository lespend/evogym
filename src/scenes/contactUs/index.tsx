import SectionHeader from '@/components/SectionHeader';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import { motion } from 'framer-motion';

type Props = {
    reference: (ref: HTMLElement) => void;
}

const ContactUs = ({ reference }: Props) => {
    const conctactSchema = yup.object({
        name: yup.string().required('Поле Имя обязательно'),
        email: yup.string().email('Некорректный email').required('Поле Email обязательно'),
        message: yup.string().required('Поле Сообщение обязательно').max(200, 'Максимальная длина строки 200 символов')
    })
    type FormData = yup.InferType<typeof conctactSchema>;

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(conctactSchema)
    });

    const onSubmit = (data: any) => console.log(data);

    const inputClasses = 'bg-primary-300 rounded-md p-4 w-full text-white placeholder:text-white text-xl mt-3 focus:outline-gray-500'

    return (
        <section id='contact' ref={reference}>
            <div className='w-5/6 mx-auto py-32 md:flex items-end justify-center gap-16'>
                <div>
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
                        <SectionHeader><span className='text-primary-500'>Присоединяйтесь<br /></span> сейчас чтобы быть в  форме</SectionHeader>
                        <p className='mt-5'>Заполните форму и мы с вами свяжемся. Это маленький шаг на пути к своим целям и мечтам. Наша команда экспертов готова помочь вам создать персонализированную программу тренировок, а также предоставить советы по питанию и здоровому образу жизни. Мы верим, что каждый человек способен достичь своих целей, и мы готовы быть вашими партнерами и поддержкой на этом пути. Не откладывайте свои мечты на потом, начните прямо сейчас. Позвольте нам помочь вам стать лучшей версией себя!</p>
                    </motion.div>
                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        className='w-full mt-8'
                        initial='hidden'
                        whileInView='visible'
                        transition={{ when: 'beforeChildren', staggerChildren: 0.4 }}
                    >
                        <motion.div
                            transition={{ duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <input type="text" className='bg-primary-300 rounded-md p-4 w-full text-white placeholder:text-white text-xl' {...register('name')} placeholder='Имя' />
                            <p>{errors.name?.message}</p>
                        </motion.div>

                        <motion.div
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <input type="text" className={inputClasses} {...register('email')} placeholder='Email' />
                            <p>{errors.email?.message}</p>
                        </motion.div>

                        <motion.div
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <textarea rows={6} className={`${inputClasses} resize-none height-auto`} {...register('message')} placeholder='Сообщение' />
                            <p>{errors.message?.message}</p>
                        </motion.div>

                        <motion.div
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <button className='block mx-auto px-10 py-2 bg-secondary-500 rounded-md hover:bg-primary-500 hover:text-white'>Отправить</button>
                        </motion.div>



                    </motion.form>
                </div>

                <img src={ContactUsPageGraphic} alt="Картинка страницы контакты" className='mx-auto mt-20 md:mt-0' />
            </div>
        </section>
    )
}

export default ContactUs