import LineDivider from 'components/atoms/LineDivider';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import TeamCard from 'components/molecules/Card/TeamCard';
import RigCard from 'components/molecules/Card/RigCard';
import PageSentence from 'components/molecules/PageSentence';
import SectionSentence from 'components/molecules/SectionSentence';
import LogoList from 'components/organisms/LogoList';
import StatisticList from 'components/organisms/StatisticList';
import PageTemplate from 'components/templates/PageTemplate';
import Image from 'next/image';
import React from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import NextJsImage from 'components/atoms/NextJsImage';

const photos = [
  {
    src: '/images/rig/panorama.jpg',
    width: 1462,
    height: 742,
    title: 'Entire Rig',
    description:
      'The entire rig except the LED lights (which you can barely see the back of on the far right of the photo',
  },
  {
    src: '/images/rig/top-tower.jpg',
    width: 1462,
    height: 1096,
    title: 'Top of the tower',
    description: 'How water enters the towers',
  },
  {
    src: '/images/rig/towers-front.jpg',
    width: 1166,
    height: 1554,
    title: 'Crops',
    description: 'Photos of our variety of crops',
  },
  {
    src: '/images/rig/towers.jpg',
    width: 1166,
    height: 1554,
    title: 'Crops',
    description: 'Photos of our variety of crops',
  },
  {
    src: '/images/rig/towers4.jpg',
    width: 874,
    height: 1554,
    title: 'Crops',
    description: 'Photos of our variety of crops',
  },
  {
    src: '/images/rig/towers2.jpg',
    width: 1166,
    height: 1554,
    title: 'Lettuce',
    description: 'let us eat lettuce',
  },
  // {
  //   src: '/images/rig/towers3.jpg',
  //   width: 1166,
  //   height: 1554,
  //   description:
  //     'The entire rig except the LED lights (which you can barely see the back of on the far right of the photo',
  // },

  {
    src: '/images/rig/all-but-towers.jpg',
    width: 754,
    height: 1554,
    title: 'Control Center',
    description: 'the electronics, holding tank, and reservoir mixing tank',
  },
  {
    src: '/images/rig/box.jpg',
    width: 3024,
    height: 4032,
    title: 'Control Box',
    description: 'one of our boxes containing some of our custom controllers',
  },
  {
    src: '/images/rig/computer.jpg',
    width: 1950,
    height: 1462,
    title: 'Computer',
    description:
      'our POE ethernet switch and NUC computer which controls the rig (and compiles our microcontrollers)',
  },
  {
    src: '/images/rig/electronics-and-mix.jpg',
    width: 1462,
    height: 1100,
    title: 'Controls and mixers',
    description:
      'Our Atlas Scientific PH, EC, and temp sensor on the left, with our chemicals that get mixed into the tanks via automation',
  },
  {
    src: '/images/rig/fan-and-plant.jpg',
    width: 1166,
    height: 1554,
    title: 'Fans',
    description: 'Our fans that strengthen the plants',
  },
  {
    src: '/images/rig/fan-plant.jpg',
    width: 1462,
    height: 1096,
    title: 'Fans',
    description: 'Our fans that strengthen the plants',
  },
  {
    src: '/images/rig/ha-dash.jpg',
    width: 1462,
    height: 760,
    title: 'dashboard',
    description:
      'Dashboard that give us insights into the system and allows us to override the behavior',
  },
  // {
  //   src: '/images/rig/image(13).jpg',
  //   width: 1292,
  //   height: 1280,
  //   title: 'dashboard',
  //   description:
  //     'Dashboard that give us insights into the system and allows us to override the behavior',
  // },
  {
    src: '/images/rig/lettuce.jpg',
    width: 874,
    height: 1554,
    title: 'Lettuce',
    description: 'Let us eat lettuce',
  },
  {
    src: '/images/rig/node-red-1.png',
    width: 2554,
    height: 1752,
    title: 'Software',
    description: 'A snipped of the software that drives the system',
  },
  {
    src: '/images/rig/node-red2.jpg',
    width: 2772,
    height: 1044,
    title: 'Software',
    description: 'A snipped of the software that drives the system',
  },
  {
    src: '/images/rig/node-red3.png',
    width: 2562,
    height: 1651,
    title: 'Software',
    description: 'A snipped of the software that drives the system',
  },
  {
    src: '/images/rig/plants1.jpg',
    width: 1166,
    height: 1554,
    title: 'plants',
    description: 'more plants',
  },
  {
    src: '/images/rig/roots.jpg',
    width: 874,
    height: 1554,
    title: 'roots',
    description: 'voluptuous plant roots',
  },
];
function Gallery() {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <PhotoAlbum
        spacing={30}
        columns={containerWidth => {
          if (containerWidth < 200) return 2;
          if (containerWidth < 400) return 2;
          if (containerWidth < 800) return 3;
          return 4;
        }}
        layout="rows"
        photos={photos}
        targetRowHeight={500}
        onClick={({index: current}) => setIndex(current)}
      />

      <Lightbox
        plugins={[Captions]}
        index={index}
        slides={photos}
        open={index >= 0}
        render={{slide: NextJsImage}}
        close={() => setIndex(-1)}
      />
    </>
  );
}

const Welcome = () => {
  return (
    <PageTemplate title="Welcome - AutomataCultiva">
      {/* <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside className="w-full" data-aos="fade-down-right">
          <div className="w-full h-[480px] relative">
            <Image
              src={'/images/about-illustration.webp'}
              layout="fill"
              objectFit="contain"
              quality={80}
              alt="Programmers when coding in their laptop"
              
            />
          </div>
        </aside>
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos="fade-up-left"
        >
          <PageSentence
            badge="ABOUT"
            title="We are creative, smart and hardworking nerds"
            description={`We are two shmucks who built a gadget it a garage. Stop by to check it out and have some YAG BOMBS washed down with keystone light`}
          />
        </aside>
      </section> */}
      {/* <LineDivider /> */}
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up">
          <SectionSentence
            badge="Welcome"
            title="As we build out our site, please enjoy photos of our current system!"
          />
        </div>
      </section>
      <LineDivider />

      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up">
          <SectionSentence badge="Photos" title="" />
        </div>

        <div className="w-full relative">
          <Gallery />
        </div>
        <LineDivider />

        <div className="w-full grid gap-14">
          <div data-aos="fade-right">
            <StatisticList />
          </div>
          {/* <LogoList /> */}
        </div>
      </section>
    </PageTemplate>
  );
};

export default Welcome;
