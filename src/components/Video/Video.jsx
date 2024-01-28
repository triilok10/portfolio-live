import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import axios from 'axios';
import { sliderSettings } from '../../utils/data';
import { footerVariants, staggerChildren } from '../../utils/motion';
import css from './Video.module.scss';

const Video = () => {
    const [data, setData] = useState([]);
    const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
                params: {
                    part: 'snippet',
                    maxResults: 20,
                    playlistId: 'UUZYbdpG4VSnXwaxfa5gKW1w',
                    key: 'AIzaSyAR6iwWeomGsOor8t0mZdG7yZD1zmKQlCc',
                },
            });

            setData(response.data.items);
        } catch (error) {
            console.error('Error fetching videos:', error);
            setError('Error fetching videos. Please try again later. Network Issue');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleVideoStart = (url) => {
        if (currentlyPlaying && currentlyPlaying !== url) {
            setCurrentlyPlaying(null);
        }
        setCurrentlyPlaying(url);
    };

    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`innerWidth ${css.wrapper}`}
        >
            <a className="anchor" id="vlogs"></a>
            <h2 className={`primaryText flexCenter ${css.text}`}>Vlogs</h2>
            <motion.div
                variants={footerVariants}
                className={`yPaddings ${css.vdomp}`}
            >
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <Slider {...sliderSettings} className={` ${css.Slider}`}>
                        {data.map((video, i) => (
                            <div className={`paddings flexCenter ${css.video}`} key={i}>
                                <ReactPlayer
                                    url={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                                    controls
                                    width="100%"
                                    height="auto"
                                    playing={
                                        currentlyPlaying ===
                                        `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`
                                    }
                                    volume={1}
                                    muted
                                    onStart={() =>
                                        handleVideoStart(
                                            `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`
                                        )
                                    }
                                    config={{
                                        youtube: {
                                            playerVars: { origin: window.location.origin },
                                            preload: true,
                                            attributes: { crossOrigin: 'anonymous' },
                                        },
                                    }}
                                />

                                <div className={css.line}></div>
                                <div className={css.title}>
                                    <span>{video.snippet.title}</span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
            </motion.div>
        </motion.section>
    );
};

export default Video;
