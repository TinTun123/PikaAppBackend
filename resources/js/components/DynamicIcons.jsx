import React from "react";
import {AiOutlineUser} from "react-icons/ai";
import {MdOutlinePlayLesson, MdOutlineReviews} from "react-icons/md";
import {IoShareSocialOutline} from "react-icons/io5";
import {TfiLayoutSliderAlt} from "react-icons/tfi";
import {BsChatLeftText} from "react-icons/bs";
import {RxDashboard} from "react-icons/rx";

const DynamicIcons = (props) => {
    const icons = {
        RxDashboard,
        MdOutlinePlayLesson,
        MdOutlineReviews,
        IoShareSocialOutline,
        TfiLayoutSliderAlt,
        BsChatLeftText
    };

    const TagComponent = icons[props.name];
    return <TagComponent  {...props} />
};

export default DynamicIcons;
