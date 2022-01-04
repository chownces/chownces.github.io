import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavigationBar from '../navigationBar/NavigationBar';
import Landing from '../landing/Landing';
import About from '../about/About';
import styles from './App.module.css';
import Portfolio from '../portfolio/Portfolio';

function App() {
  const landingRef = React.useRef();
  const navbarRef = React.useRef();
  const aboutRef = React.useRef();
  const portfolioRef = React.useRef();

  const [visibleSection, setVisibleSection] = React.useState();

  const sectionRefs = React.useMemo(
    () => [
      { section: 'Landing', ref: landingRef },
      { section: 'About', ref: aboutRef },
      { section: 'Portfolio', ref: portfolioRef }
    ],
    []
  );

  React.useEffect(() => {
    AOS.init();
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const { height: navbarHeight } = getDimensions(navbarRef.current);
      let scrollPosition = window.scrollY;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        const { offsetBottom, offsetTop } = getDimensions(ele);

        if (ele) {
          if (section !== 'Landing') {
            scrollPosition += navbarHeight;
          }
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
        return false;
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSection, sectionRefs]);

  return (
    <div className="App">
      <Landing sectionRef={landingRef} />
      <div className={styles.contentContainer}>
        <NavigationBar section={visibleSection} sectionRef={navbarRef} />
        <About sectionRef={aboutRef} />
        <Portfolio sectionRef={portfolioRef} />
      </div>
    </div>
  );
}

const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom
  };
};

export default App;
