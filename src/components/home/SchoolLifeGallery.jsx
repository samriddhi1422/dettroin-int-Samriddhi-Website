import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
} from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/src/assets/images/css.jpg",
    title: "Learning Together",
    category: "Classroom",
    width: "w-[270px] sm:w-[330px] lg:w-[390px]",
    height: "h-[370px] sm:h-[430px] lg:h-[490px]",
  },
  {
    id: 2,
    src: "/src/assets/images/sports.jpg",
    title: "Beyond the Classroom",
    category: "Sports",
    width: "w-[310px] sm:w-[390px] lg:w-[460px]",
    height: "h-[280px] sm:h-[320px] lg:h-[350px]",
  },
  {
    id: 3,
    src: "/src/assets/images/musics.jpg",
    title: "Space to Create",
    category: "Art & Expression",
    width: "w-[260px] sm:w-[320px] lg:w-[370px]",
    height: "h-[350px] sm:h-[410px] lg:h-[460px]",
  },
  {
    id: 4,
    src: "/src/assets/images/synapse_2026_5-300x200.jpeg",
    title: "Question. Experiment. Discover.",
    category: "Science",
    width: "w-[320px] sm:w-[400px] lg:w-[470px]",
    height: "h-[280px] sm:h-[330px] lg:h-[370px]",
  },
  {
    id: 5,
    src: "/src/assets/images/laissez_faire_2026_4-1-300x200.jpeg",
    title: "Finding a Voice",
    category: "Music",
    width: "w-[270px] sm:w-[330px] lg:w-[380px]",
    height: "h-[370px] sm:h-[430px] lg:h-[480px]",
  },
  {
    id: 6,
    src: "/src/assets/images/educationapproach.jpeg",
    title: "Growing Together",
    category: "Community",
    width: "w-[320px] sm:w-[400px] lg:w-[460px]",
    height: "h-[280px] sm:h-[330px] lg:h-[360px]",
  },
  {
    id: 7,
    src: "/src/assets/images/vasant-valley-hero.jpeg",
    title: "A Place to Belong",
    category: "Campus",
    width: "w-[270px] sm:w-[330px] lg:w-[390px]",
    height: "h-[370px] sm:h-[430px] lg:h-[490px]",
  },
  {
    id: 8,
    src: "/src/assets/images/Under-17-Girls-Table-Tennis--300x225.jpeg",
    title: "Moments We Remember",
    category: "School Events",
    width: "w-[320px] sm:w-[400px] lg:w-[470px]",
    height: "h-[280px] sm:h-[330px] lg:h-[370px]",
  },
];

const SchoolLifeGallery = () => {
  const x = useMotionValue(0);
  const firstSetRef = useRef(null);

  const [loopWidth, setLoopWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const duplicatedImages = [...galleryImages, ...galleryImages];

  // ------------------------------------------------
  // Calculate width of ONE complete gallery set
  // ------------------------------------------------

  useEffect(() => {
    const calculateWidth = () => {
      if (!firstSetRef.current) return;

      setLoopWidth(firstSetRef.current.scrollWidth);
    };

    calculateWidth();

    const observer = new ResizeObserver(calculateWidth);

    if (firstSetRef.current) {
      observer.observe(firstSetRef.current);
    }

    window.addEventListener("resize", calculateWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  // ------------------------------------------------
  // Infinite movement
  // ------------------------------------------------

  useAnimationFrame((time, delta) => {
    if (paused || dragging || selectedImage || loopWidth === 0) return;

    // Change this number to control speed
    const speed = 0.035;

    let nextX = x.get() - delta * speed;

    if (nextX <= -loopWidth) {
      nextX += loopWidth;
    }

    if (nextX > 0) {
      nextX -= loopWidth;
    }

    x.set(nextX);
  });

  // ------------------------------------------------
  // Keep dragged position inside loop
  // ------------------------------------------------

  const normalizePosition = () => {
    if (!loopWidth) return;

    let current = x.get();

    while (current <= -loopWidth) {
      current += loopWidth;
    }

    while (current > 0) {
      current -= loopWidth;
    }

    x.set(current);
  };

  // ------------------------------------------------
  // Lightbox
  // ------------------------------------------------

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const showPreviousImage = () => {
    if (!selectedImage) return;

    const currentIndex = galleryImages.findIndex(
      (image) => image.id === selectedImage.id
    );

    const previousIndex =
      currentIndex === 0
        ? galleryImages.length - 1
        : currentIndex - 1;

    setSelectedImage(galleryImages[previousIndex]);
  };

  const showNextImage = () => {
    if (!selectedImage) return;

    const currentIndex = galleryImages.findIndex(
      (image) => image.id === selectedImage.id
    );

    const nextIndex =
      currentIndex === galleryImages.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(galleryImages[nextIndex]);
  };

  // ------------------------------------------------
  // Prevent drag from opening lightbox
  // ------------------------------------------------

  const handleCardClick = (image) => {
    if (dragging) return;

    setSelectedImage(image);
  };

  return (
    <>
      <section className="overflow-hidden bg-[#F7F4EF] pb-16 pt-8 sm:pb-20 sm:pt-10 lg:pb-24 lg:pt-0">

        {/* ============================================
            HEADER
        ============================================ */}

        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

          {/* Section label */}

          <div className="flex items-center gap-4">
            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8E1731] sm:text-[11px]">
              04 / Life at Vasant Valley
            </span>

            <div className="h-px flex-1 bg-[#DCD3CF]" />
          </div>

          {/* Heading */}

          <div className="mt-9 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">

            <div>
              <h2 className="max-w-[850px] font-serif text-[43px] font-medium leading-[1.02] tracking-[-0.04em] text-[#211B1C] sm:text-[56px] md:text-[64px] lg:text-[72px]">

                Moments that make

                <span className="block italic text-[#8E1731]">
                  school more than school.
                </span>

              </h2>

              <p className="mt-5 max-w-[560px] text-[14px] leading-7 text-[#665D5E] sm:text-[15px]">
                From classrooms and creativity to sport, culture and
                friendships — explore everyday life across Vasant Valley.
              </p>
            </div>

            {/* Live indicator */}

            <div className="flex w-fit items-center gap-3">

              <span className="relative flex h-2 w-2">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8E1731] opacity-30" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8E1731]" />

              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8E1731]">
                Explore school life
              </span>

            </div>

          </div>
        </div>

        {/* ============================================
            MOVING TEXT
        ============================================ */}

        <div className="mt-10 overflow-hidden border-y border-[#DED6D2] py-4 sm:mt-12">

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max whitespace-nowrap"
          >

            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex items-center"
              >

                {[
                  "LEARN",
                  "CREATE",
                  "DISCOVER",
                  "PERFORM",
                  "PLAY",
                  "CONNECT",
                  "GROW",
                ].map((word) => (
                  <div
                    key={`${group}-${word}`}
                    className="flex items-center"
                  >

                    <span className="px-6 font-serif text-[16px] italic tracking-[0.05em] text-[#8E1731]/55 sm:px-8 sm:text-[19px]">
                      {word}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#8E1731]/30" />

                  </div>
                ))}

              </div>
            ))}

          </motion.div>

        </div>

        {/* ============================================
            GALLERY
        ============================================ */}

        <div
          className="mt-12 overflow-hidden sm:mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          <motion.div
            drag="x"
            dragConstraints={{
              left: -999999,
              right: 999999,
            }}
            dragElastic={0}
            dragMomentum={false}
            style={{ x }}
            onDragStart={() => {
              setDragging(true);
            }}
            onDragEnd={() => {
              normalizePosition();

              // Prevent release from becoming click
              setTimeout(() => {
                setDragging(false);
              }, 100);
            }}
            className="flex w-max cursor-grab select-none items-center active:cursor-grabbing"
          >

         

            <div
              ref={firstSetRef}
              className="flex shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6 lg:gap-7 lg:pr-7"
            >

              {galleryImages.map((image, index) => (
                <GalleryCard
                  key={image.id}
                  image={image}
                  index={index}
                  onOpen={() => handleCardClick(image)}
                />
              ))}

            </div>

            {/* DUPLICATED SET */}

            <div className="flex shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6 lg:gap-7 lg:pr-7">

              {galleryImages.map((image, index) => (
                <GalleryCard
                  key={`duplicate-${image.id}`}
                  image={image}
                  index={index}
                  onOpen={() => handleCardClick(image)}
                />
              ))}

            </div>

          </motion.div>
        </div>

        {/* ============================================
            FOOTER OF SECTION
        ============================================ */}

        <div className="mx-auto mt-10 max-w-[1280px] px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-4 border-t border-[#DCD3CF] pt-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">

              <ArrowLeft
                size={13}
                className="text-[#8E1731]"
              />

              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#776D6E] sm:text-[10px]">
                Drag anywhere to explore
              </p>

              <ArrowRight
                size={13}
                className="text-[#8E1731]"
              />

            </div>

            <p className="text-[9px] uppercase tracking-[0.2em] text-[#776D6E] sm:text-[10px]">
              Hover to pause · Click to view
            </p>

          </div>

        </div>

      </section>

      {/* ============================================
          LIGHTBOX
      ============================================ */}

      {selectedImage && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
          }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171112]/95 p-4 backdrop-blur-md sm:p-8"
        >

          {/* CLOSE */}

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#211B1C] sm:right-8 sm:top-8"
            aria-label="Close gallery"
          >
            <X size={19} />
          </button>

          {/* PREVIOUS */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#211B1C] sm:left-8 sm:h-12 sm:w-12"
            aria-label="Previous image"
          >
            <ArrowLeft size={18} />
          </button>

          {/* NEXT */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#211B1C] sm:right-8 sm:h-12 sm:w-12"
            aria-label="Next image"
          >
            <ArrowRight size={18} />
          </button>

          {/* CONTENT */}

          <motion.div
            key={selectedImage.id}
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-[1050px]"
          >

            <div className="overflow-hidden rounded-[22px] sm:rounded-[28px]">

              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[72vh] w-full object-contain"
              />

            </div>

            <div className="mt-5 text-center">

              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#EBCDD2]">
                {selectedImage.category}
              </p>

              <h3 className="mt-2 font-serif text-[27px] text-white sm:text-[36px]">
                {selectedImage.title}
              </h3>

            </div>

          </motion.div>

        </motion.div>
      )}
    </>
  );
};

/* ==========================================================
   GALLERY CARD
========================================================== */

const GalleryCard = ({
  image,
  index,
  onOpen,
}) => {
  return (
    <motion.article
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className={`
        ${image.width}
        shrink-0
        ${
          index % 3 === 0
            ? "pt-0"
            : index % 3 === 1
            ? "pt-16 sm:pt-20"
            : "pt-7 sm:pt-10"
        }
      `}
    >

      <button
        type="button"
        onClick={onOpen}
        className="group block w-full text-left"
        aria-label={`Open ${image.title}`}
      >

        <div
          className={`
            ${image.height}
            relative overflow-hidden
            rounded-[22px]
            bg-[#E8E0DC]
            sm:rounded-[28px]
          `}
        >

          {/* IMAGE */}

          <img
            src={image.src}
            alt={image.title}
            draggable="false"
            className="pointer-events-none h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.055]"
          />

          {/* GRADIENT */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#211B1C]/75 via-[#211B1C]/5 to-transparent" />

          {/* NUMBER */}

          <div className="absolute left-4 top-4 sm:left-5 sm:top-5">

            <span className="flex h-9 min-w-9 items-center justify-center rounded-full bg-[#F7F4EF]/95 px-3 text-[9px] font-semibold tracking-[0.15em] text-[#8E1731] backdrop-blur-md">
              {String(index + 1).padStart(2, "0")}
            </span>

          </div>

          {/* EXPAND */}

          <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#F7F4EF]/95 text-[#8E1731] backdrop-blur-md transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#8E1731] group-hover:text-white sm:right-5 sm:top-5 sm:h-10 sm:w-10">

            <Maximize2 size={14} />

          </div>

          {/* CONTENT */}

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

            <div className="overflow-hidden">

              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/65">
                {image.category}
              </p>

              <h3 className="mt-2 max-w-[350px] font-serif text-[24px] leading-[1.08] tracking-[-0.02em] text-white sm:text-[29px]">
                {image.title}
              </h3>

            </div>

          </div>

        </div>

      </button>

    </motion.article>
  );
};

export default SchoolLifeGallery;