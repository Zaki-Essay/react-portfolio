import {HOMEPAGE_URL} from "./constants.ts";


export interface NavItem {
    title: string;
    link: string;
}

export const navigationArray: NavItem[] = [
    { title: "Home", link: HOMEPAGE_URL },
    { title: "About", link: `${HOMEPAGE_URL}about` },
    { title: "Services", link: `${HOMEPAGE_URL}services` },
    { title: "Portfolio", link: `${HOMEPAGE_URL}portfolio` },
    { title: "Contact", link: `${HOMEPAGE_URL}contact` },
];
