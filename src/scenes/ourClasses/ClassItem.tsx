import { ClassType } from "@/shared/types"

const ClassItem = ({ name, description, image }: ClassType) => {
    const overlayStyles = `box-border p-5 absolute z-30 flex h-[337px] w-[450px]
    flex-col items-center justify-center whitespace-normal 
    bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`

    return (
        <li className="box-border relative mx-5 inline-block h-[337px] w-[450px]">
            <div className={overlayStyles}>
                <h3 className="font-bold text-2xl">{name}</h3>
                <p className="mt-5">{description}</p>
            </div>
            <img src={image} alt={`Картинка ${name}`} />
        </li>
    )
}

export default ClassItem