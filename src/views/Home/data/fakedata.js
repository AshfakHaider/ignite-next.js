import cause1 from '../../../assets/images/cause-1.jpg';
import cause2 from '../../../assets/images/cause-2.jpg';
import cause3 from '../../../assets/images/cause-3.jpg';
import { faSchool,faUserGraduate,faLightbulb,faHandsHelping} from '@fortawesome/free-solid-svg-icons';

export const causeData = [
    {
        id: "1",
        title: "Back To School",
        details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam dolorem dolorum eum eligendi minima maiores quaerat unde, deserunt nam!",
        raised: 7000,
        goal: 11000,
        image:cause1

    },
    {
        id: "2",
        title: "Back To School",
        details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam dolorem dolorum eum eligendi minima maiores quaerat unde, deserunt nam!",
        raised: 5000,
        goal: 11000,
        image:cause2

    },
    {
        id: "3",
        title: "Back To School",
        details:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam dolorem dolorum eum eligendi minima maiores quaerat unde, deserunt nam!",
        raised: 3000,
        goal: 11000,
        image:cause3

    },
]



export const couterData = [
    {
        id: "1",
        title: "School",
        icon:faSchool,
        number:1
    },
    {
        id: "2",
        title: "Students",
        icon:faUserGraduate,
        number:75
    },
    {
        id: "3",
        title: "Projects",
        icon:faLightbulb,
        number:6
    },
    {
        id: "4",
        title: "Changemaker",
        icon:faHandsHelping,
        number:23,
        suffix:'k+'
    },
]