import './portfolio.scss';
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "Zyphr~Estate",
        img: "https://i.postimg.cc/KjXqNNqC/ZyEs.png",
        desc: "Zyphr Estate is a cutting-edge real estate web application developed on the MERN (MongoDB, Express, React, Node.js) stack. It offers an immersive and feature-rich platform designed to facilitate the process of discovering, exploring, and managing real estate properties.",
    },
    {
        id: 2,
        title: "Zeflix~Netflix Clone",
        img: "https://i.postimg.cc/R07NhVrf/Zf.png",
        desc: "Zetflix is a remarkable Netflix clone project crafted with React.js and the Material-UI library. This web application emulates the renowned Netflix platform, offering users an immersive streaming experience. With an array of features and a polished user interface, Zetflix brings the world of entertainment to your screen.",
    },
    {
        id: 3,
        title: "Weather Master",
        img: "https://i.postimg.cc/7LHy1xGS/Weather-mas.png",
        desc: "Weather Master is a user-friendly web application that provides up-to-date weather information for any location. Built with JavaScript, HTML, and CSS, it offers a seamless experience for users to check current weather conditions, forecasts, and more.",
    },
    {
        id: 4,
        title: "Virtual Drum Kit",
        img: "https://i.postimg.cc/NjVzFB8g/drumkit.png",
        desc: "The Virtual Drum Kit is an interactive and fun web application that emulates a real drum kit. Developed using JavaScript, HTML, and CSS, this project provides an enjoyable and educational experience for music enthusiasts and drummers of all levels.",
    }
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><a href='https://github.com/CraZyphr?tab=repositories'>Visit Git!</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

function Portfolio() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
}

export default Portfolio;
