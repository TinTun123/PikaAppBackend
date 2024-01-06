import React from "react";
import {MdOutlinePlayLesson, MdOutlineReviews} from "react-icons/md";
import {RxDashboard} from "react-icons/rx";
import { PiUsers } from "react-icons/pi";
import { BsSliders2 } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { PiApplePodcastsLogoThin } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { MdOutlinePolicy } from "react-icons/md";


const DynamicIcons = (props) => {
    const icons = {
        RxDashboard,
        MdOutlinePlayLesson,
        MdOutlineReviews,
        PiUsers,
        BsSliders2,
        MdOutlineCategory,
        PiApplePodcastsLogoThin,
        FaRegStar,
        FaRegShareFromSquare, 
        FiSettings,
        MdOutlinePolicy,
    };

    const TagComponent = icons[props.name];
    return <TagComponent  {...props} />
};

export default DynamicIcons;
