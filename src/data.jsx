import { nanoid } from 'nanoid';

import {
    Fa500Px,
    FaAccusoft,
    FaAdversal,
    FaAvianex,
    FaBtc,
    FaBitcoin,
    FaCodiepie,
    FaDocker,
    FaGithubSquare
} from "react-icons/fa";



export let subLinks = [

    {
        pageId: nanoid(),
        page: 'product',
        link: [
            {
                id: nanoid(),
                label: 'community',
                icon: <Fa500Px />,
                url: 'product/community'
            },
            {
                id: nanoid(),
                label: 'contact',
                icon: <FaAccusoft />,
                url: 'product/contact'
            },
            {
                id: nanoid(),
                label: 'roles',
                icon: <FaAdversal />,
                url: 'product/roles'
            }
        ]

    },

    {
        pageId: nanoid(),
        page: 'solutions',
        link: [
            {
                id: nanoid(),
                label: 'developers',
                icon: <FaAvianex />,
                url: 'product/community'
            },
            {
                id: nanoid(),
                label: 'content managers',
                icon: <FaBtc />,
                url: 'product/managers'
            },
            {
                id: nanoid(),
                label: 'bussines team',
                icon: <FaBitcoin />,
                url: 'product/bussines'
            },
            {
                id: nanoid(),
                label: 'ecommerce',
                icon: <FaCodiepie />,
                url: 'product/ecommerce'
            }
        ]
    },

    {
        pageId: nanoid(),
        page: 'resources',
        link: [
            {
                id: nanoid(),
                label: 'starter',
                icon: <FaDocker />,
                url: 'product/starter'
            },
            {
                id: nanoid(),
                label: 'showcase',
                icon: <FaGithubSquare />,
                url: 'product/showcase'
            },

        ]
    }

]
