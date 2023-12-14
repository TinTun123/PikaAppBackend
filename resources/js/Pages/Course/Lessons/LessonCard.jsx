import React from 'react';

const LessonCard = ({lesson, handleEdit}) => {

    return (
        <div>
            {/*800946029*/}
            {/*894419244*/}
            <iframe
                src={`https://player.vimeo.com/video/${lesson.video}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                width="350" height="197" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"
            ></iframe>
            <div onClick={() => handleEdit(lesson)}>
                Edit
            </div>
        </div>
    );
};

export default LessonCard;
