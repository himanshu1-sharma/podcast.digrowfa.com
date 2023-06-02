import React, { useState } from 'react'
import Stories from "react-insta-stories";
import styles from '@/styles/HeaderStory.module.css'

export default function HeaderStory() {





    return (
        <>
            <div className={styles.storyBox} id="storyBox">
                <Stories
                    stories={stories}
                    defaultInterval={4000}
                    width={436}
                    height={780}
                    loop
                    keyboardNavigation
                    // onStoryEnd={(s, st) => console.log("story ended", s, st)}
                    // onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
                    // onStoryStart={(s, st) => console.log("story started", s, st)}
                    isPaused={true}
                    action="play"
                />
            </div>
        </>
    )
};


const stories = [

    {
        content: ({ action }) => {
            action('play');
            return (
                <>
                    <div style={{ background: "MediumSlateBlue", padding: 20 }}>
                        <h1 style={{ marginTop: "100%", marginBottom: 0 }}>🌝</h1>
                        <h1 style={{ marginTop: 5, color: "white" }}>
                            Here we have to add some content
                        </h1>
                    </div>
                </>
            )
        },

    },
    {
        // url: "/video/test.mp4",
        type: "video",
        header: {
            heading: 'Himanshu Sharma',
            subheading: 'Posted 30s ago',
            profileImage: 'https://picsum.photos/100/100',
        },
    },
    {
        // url: "/video/test2.mp4",
        type: "video",
        header: {
            heading: 'Bhavuk Mundey',
            subheading: 'Posted 1m ago',
            profileImage: 'https://picsum.photos/100/100',
        },

    },


];