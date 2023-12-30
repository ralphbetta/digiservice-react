//  Fi-icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';


//  icons
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillCiCircle,
  AiOutlineStar,
  AiFillStar
} from 'react-icons/ai';

// companies icons
import Bemis from './assets/brand/brand1.png';
import Magento from './assets/brand/brand2.png';
import Spotify from './assets/brand/brand3.png';
import Tropicana from './assets/brand/brand5.png';
import Allianz from './assets/brand/brand4.png';

// section images
import Section1 from './assets/home/home1.png';
import Section2 from './assets/home/home2.png';
import Section3 from './assets/home/home3.png';

// section images
import Marketing from './assets/marketing.png';
import Design from './assets/design.png';
import SEO from './assets/seo.png';

export const HeroImage = Section1;
export const Teams = Section2;
export const Review = Section3;


// logo -banner - about
export const Logo = 'https://img.icons8.com/ios-filled/50/FD620C/amazon-alexa-logo.png';


export const logoCaption = "DigiService";



export const icons = { menu: <AiOutlineMenu />, close: <AiOutlineClose />, circle: <AiFillCiCircle /> }

// navigation
export const navigation = [
  {
    name: 'Home',
    href: 'home',
  },
  {
    name: 'Feature',
    href: 'feature',
  },
  {
    name: 'About',
    href: 'about',
  },
  {
    name: 'Contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: '',
  },
  {
    icon: <FiInstagram />,
    href: '',
  },
  {
    icon: <FiGithub />,
    href: '',
  },
  {
    icon: <FiDribbble />,
    href: '',
  },
];

// companies
export const brands = [
  {
    img: Bemis,
    href: '',
  },
  {
    img: Magento,
    href: '',
  },
  {
    img: Spotify,
    href: '',
  },
  {
    img: Tropicana,
    href: '',
  },
  {
    img: Allianz,
    href: '',
  },
];

// projects
export const offers = [
  {
    id: '1',
    image: Marketing,
    title: 'Digital Marketing Training',
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, ",
  },
  {
    id: '2',
    image: Design,
    title: 'Digital Marketing Training',
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,",
  },
  {
    id: '3',
    image: SEO,
    title: 'Digital Marketing Training',
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, ",
  },
];



