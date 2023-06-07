import { SelectedPage } from "@/shared/types"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import ActionButton from "@/components/ActionButton"
import { ActionButtonVariants } from "@/shared/types"
import HomePageGraphics from "@/assets/HomePageGraphic.png"
import SponsorRedbull from "@/assets/SponsorRedbull.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    reference: (el: HTMLElement) => void;
}

const Home = ({ setSelectedPage, reference }: Props) => {
    const isLargeScreen = useMediaQuery('(min-width: 1100px)')

    return (
        <motion.section 
            id='home' 
            className="gap-16 md:h-full md:pb-0 pt-[88px]"
            ref={reference}
        >
            <div className="w-5/6 mx-auto flex items-center justify-center flex-col md:flex-row md:pb-8">
                <motion.div
                    className="md:basis-3/5 z-10"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <h1 className="mt-20 md:mt-0 relative before:absolute before:-left-14 before:-top-32 before:invisible md:before:visible before:content-['EVOGYM'] before:font-montserrat before:font-bold before:text-[150px] before:text-gray-50 before:z-[-1]">
                        <span className='text-7xl font-bold font-montserrat uppercase'>Evogym</span>
                        <br />
                        <span className='inline-block text-4xl mt-2 font-light font-montserrat uppercase'>лучший фитнес.</span>
                    </h1>
                    <p className="mt-8 text-sm">
                        Наш тренажерный зал предлагает вам не только современное оборудование и просторное пространство для тренировок, но и уютную и дружественную атмосферу. Независимо от вашего уровня подготовки или опыта, у нас вы найдете все необходимое для успешной тренировки.
                    </p>
                    <motion.div
                        className="mt-8 flex items-center gap-8 flex-wrap"
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Присоединиться сейчас
                        </ActionButton>
                        <ActionButton setSelectedPage={setSelectedPage} variant={ActionButtonVariants.outlined}>
                            Узнать больше
                        </ActionButton>
                    </motion.div>
                </motion.div>
                <img
                    className='md:ml-16 md:mt-16 md:z-10 w-3/5 md:w-2/5 max-w-[576px] md:justify-items-end'
                    src={HomePageGraphics}
                    alt="Фото на главной странице"
                />
            </div>
            {isLargeScreen && (
                <div className="h-[150px] w-full bg-primary-100 py-10">
                    <div className="w-5/6 flex mx-auto items-center gap-32">
                        <motion.img
                            src={SponsorRedbull}
                            alt="Redbull спонсор"
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        />
                        <motion.img
                            src={SponsorFortune}
                            alt="Fortune спонсор"
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        />
                        <motion.img
                            src={SponsorForbes}
                            alt="Forbes спонсор"
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, y: -50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        />
                    </div>
                </div>
            )}
        </motion.section>
    )
}

export default Home