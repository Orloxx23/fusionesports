import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, FreeMode } from "swiper";
// import 'swiper/swiper.min.css';

import "./home.css";
import "./homeMobile.css";
import "swiper/css";

import video from "../../assets/video/header.mp4";
import slide1 from "../../assets/img/header/slide1.jpg";
import slide2 from "../../assets/img/header/slide2.jpg";

import igtest1 from "../../assets/img/igtest/igtest1.jpg";
import igtest2 from "../../assets/img/igtest/igtest2.jpg";
import igtest3 from "../../assets/img/igtest/igtest3.jpg";
import igtest4 from "../../assets/img/igtest/igtest4.jpg";

import { Helmet } from "react-helmet";
import {
  Button,
  Hashtag,
  InstagramPost,
  Teams,
  VideoCard,
  VideoModal,
} from "../../components";
import { getVideos } from "../../utils/youtube";

const posts = [
  {
    id: 1,
    img: igtest1,
    url: "https://www.instagram.com/fusionfsgg/",
  },
  {
    id: 2,
    img: igtest2,
    url: "https://www.instagram.com/fusionfsgg/",
  },
  {
    id: 3,
    img: igtest3,
    url: "https://www.instagram.com/fusionfsgg/",
  },
  {
    id: 4,
    img: igtest4,
    url: "https://www.instagram.com/fusionfsgg/",
  },
];

export default function Home() {
  const [videos, setVideos] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [videoSelected, setVideoSelected] = React.useState({});

  useEffect(() => {
    (async () => {
      const res = await getVideos();
      setVideos(res);
    })();
  }, []);

  const handleVideoSelected = (video) => {
    setVideoSelected(video);
    setOpen(true);
    document.body.classList.add("no-scroll");
  };

  return (
    <>
      <Helmet>
        <title>Fusion eSports | Home</title>
      </Helmet>
      <VideoModal
        open={open}
        setOpen={setOpen}
        videoId={videoSelected?.snippet?.resourceId?.videoId}
        setVideoSelected={setVideoSelected}
      />
      <main>
        <header>
          <div className="header__container">
            <div className="header__left">
              <h1>THE GOLDEN YEAR</h1>
              <div className="video-whit-ambient">
                <video
                  src={video}
                  className="header__left__video main-video"
                  autoPlay
                  muted
                  loop
                />
                <video
                  src={video}
                  className="header__left__video ambient-video"
                  autoPlay
                  muted
                  loop
                />
              </div>
            </div>
            <Swiper
              spaceBetween={10}
              centeredSlides={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={true}
              loop={true}
              modules={[Autoplay, Navigation]}
              className="header__right"
            >
              <SwiperSlide>
                <img
                  src={slide1}
                  alt="slide 1"
                  className="header__right__slide"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={slide2}
                  alt="slide 2"
                  className="header__right__slide"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </header>
        <Hashtag />
        <Teams />
        <section className="content-section">
          <div className="content-section__youtube">
            <div className="content-section__youtube__head">
              <h2>Our latest videos</h2>
              <a href="https://www.youtube.com/@fusionfsgg" target="_blank" rel="noreferrer">
                <Button text="see our youtube channel" />
              </a>
            </div>
            <Swiper
              slidesPerView={2.45}
              spaceBetween={0}
              freeMode={true}
              modules={[FreeMode]}
              className="content-section__youtube__body onlyDesktop"
            >
              {videos.map((video) => (
                <SwiperSlide key={video.id}>
                  <VideoCard video={video} action={handleVideoSelected} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="content-section__youtube__body__mobile onlyMobile">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  action={handleVideoSelected}
                />
              ))}
            </div>
          </div>
          <div className="content-section__instagram">
            <div className="content-section__instagram__head">
              <h2>Our latest posts</h2>
            </div>
            <div className="content-section__instagram__body">
              {posts.map((post) => (
                <InstagramPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
