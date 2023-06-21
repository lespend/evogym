export enum SelectedPage {
    home = 'Главная',
    benefits = 'Преимущества',
    ourClasses = 'Наши занятия',
    contact = 'Контакты',
}

export enum NavigationLinkToLabel {
    '#home' = 'Главная',
    '#benefits' = 'Преимущества',
    '#our-classes' = 'Наши занятия',
    '#contact' = 'Контакты',
}

export type BenefitItemType = {
    icon: React.ReactNode;
    title: string;
    content: string;
}

export enum ActionButtonVariants {
    outlined = 'outlined',
    filled = 'filled',
}

export type ClassType = {
    name: string;
    description?: string;
    image: string;
}