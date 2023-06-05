import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '@/shared/types'

type Props = {
    page: SelectedPage;
    href: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, href, selectedPage, setSelectedPage }: Props) => {
    return (
        <AnchorLink
            className={`${selectedPage === page ? 'text-primary-500' : ''} transition duration-500 hover:text-primary-300`}
            href={href}
            onClick={() => setSelectedPage(page)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link