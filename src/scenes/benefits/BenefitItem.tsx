import { BenefitItemType, SelectedPage } from "@/shared/types"
import ActionButton from "@/components/ActionButton"
import { ActionButtonVariants } from "@/shared/types"
import { motion } from "framer-motion"

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const BenefitItem = ({icon, title, content, setSelectedPage}: BenefitItemType & Props) => {
  return (
    <motion.div 
      className="mt-5 rounded-md border-2 border-gray-100 px-5 md:px-10 py-16 text-center w-full"
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
        <div className="inline-flex justify-center items-center rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
        <h2 className="mt-5 font-montserrat font-bold">{title}</h2>
        <p className="my-3 text-sm">{content}</p>
        <ActionButton setSelectedPage={setSelectedPage} variant={ActionButtonVariants.outlined}>Узнать больше</ActionButton>
    </motion.div>
  )
}

export default BenefitItem