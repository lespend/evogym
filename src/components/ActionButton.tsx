import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import classnames from 'classnames'
import { ActionButtonVariants } from "@/shared/types"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    variant?: ActionButtonVariants;
    children: React.ReactNode;
    className?: string;
}

const ActionButton = ({ children, setSelectedPage, variant = ActionButtonVariants.filled, className }: Props) => {
    const ActionButtonClasses = classnames(className, {        
        'rounded-md bg-secondary-500 font-bold px-10 py-2 hover:bg-primary-500 hover:text-white': variant === ActionButtonVariants.filled,
        'underline text-primary-500 font-bold hover:text-secondary-500': variant === ActionButtonVariants.outlined,
    })

    return (
        <AnchorLink
            className={ActionButtonClasses}
            onClick={() => setSelectedPage(SelectedPage.contact)}
            href='#contact'
        >
            {children}
        </AnchorLink>
    )
}

export default ActionButton