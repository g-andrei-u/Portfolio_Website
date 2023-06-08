import ecom from '../../Images/ecom.png';
import insta from '../../Images/insta.png';
import ebike from '../../Images/ebike.png';
import api from '../../Images/API.png';
import clone from '../../Images/SpaceX.png';


export const projects = [
    {
        path: '/projects/ecommerce',
        title: 'Ecommerce Website',
        image: ecom,
        desc: 'A eCommerce Web App where you can choose to buy anything from a catalog of products.',
        stack: [' React ', ' Redux ', ' React-Router '],
        projectLink: 'https://valueondemand.netlify.app/',
        codeLink: 'https://github.com/g-andrei-u/Ecommerce_App'
    },

    {
        path: '/projects/insta',
        title: 'Instagram App',
        image: insta,
        desc: 'A clone of Instagram, were I have put in a lot of Creativity inside the project and it was very fun working on it. It was a challenge at some point using React but i had a lot to learn from it!',
        stack: [' React '],
        projectLink: 'https://customclone.netlify.app/',
        codeLink: 'https://github.com/g-andrei-u/Instagram_App'
    },

    {
        path: '/projects/clone',
        title: 'SpaceX Clone',
        image: clone,
        desc: 'A clone site of the official SpaceX Website, it is responsive and has the same interactive features as the Official site.',
        stack: [' Vanilla Javascript '],
        projectLink: 'https://g-andrei-u.github.io/SpaceX_Site_Clone/',
        codeLink: 'https://github.com/g-andrei-u/SpaceX_Site_Clone'
    },

    {
        path: '/projects/spotify',
        title: 'Spotify Playlist App',
        image: api,
        desc: `A Web Aplication that's connected with the Spotify APIs, where you can choose between different tracks and make multiples playlists.`,
        stack: [' React '],
        projectLink: 'https://stunnning.netlify.app/',
        codeLink: 'https://github.com/g-andrei-u/Stunnning'
    },

    {
        path: '/projects/ebikes',
        title: 'Site Main page',
        image: ebike,
        desc:  'A responsive Main Page with interactive features made for a company that rents electrical bikes in different european cities.',
        stack: [' Vanilla Javascript '],
        projectLink: 'https://g-andrei-u.github.io/Project_Ebikes/',
        codeLink: 'https://github.com/g-andrei-u/Project_Ebikes'
    }
]
