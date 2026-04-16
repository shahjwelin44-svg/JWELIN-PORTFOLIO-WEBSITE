import "./styles/Work.css";
import { useState } from "react";
import { MdArrowOutward, MdPlayCircleOutline } from "react-icons/md";

type Category = "all" | "video" | "thumbnails" | "restaurant" | "reels";

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Video Editing", value: "video" },
  { label: "Thumbnails", value: "thumbnails" },
  { label: "Restaurant & Hotel", value: "restaurant" },
  { label: "Reels", value: "reels" },
];

const videoProjects = [
  { id: 1, title: "Vlog Edit", image: "/images/placeholder.webp", link: "https://drive.google.com/file/d/1QaQH42C7NzWeZJdSxIsvrrsSLtFbYsrp/view?usp=sharing" },
  { id: 2, title: "Gaming Montage", image: "/images/placeholder.webp", link: "https://drive.google.com/file/d/1wlTAj5IKB2X7UtfYDG6nnPVyto0iwWQQ/view?usp=sharing" },
];

const thumbnailProjects = [
  { id: 6, title: "Gaming Thumbnail", image: "/images/WhatsApp Image 2026-04-16 at 12.12.43 PM.jpeg" },
  { id: 7, title: "Vlog Thumbnail", image: "/images/WhatsApp Image 2026-04-16 at 12.12.36 PM.jpeg" },
  { id: 8, title: "Saturation", image: "/images/SATURATION .jpg (1).jpeg" },
  { id: 9, title: "Client Work", image: "/images/279 Client,jay .jpg.jpeg" },
];

const restaurantProjects = [
  { id: 13, title: "Restaurant Promo", image: "/images/1.jpeg" },
  { id: 14, title: "Hotel Tour", image: "/images/2.jpeg" },
  { id: 15, title: "Food Showcase", image: "/images/3.jpeg" },
  { id: 16, title: "Menu Design", image: "/images/4.png" },
  { id: 17, title: "Interior Highlight", image: "/images/5.png" },
];

const reelsProjects = [
  { id: 18, title: "Trending Reel", video: "/videos/1 .mp4" },
  { id: 19, title: "Lifestyle Reel", video: "/videos/2 .mp4" },
  { id: 20, title: "Product Reel", video: "/videos/3 .mp4" },
  { id: 21, title: "Dance Reel", video: "/videos/4.mp4" },
];

/* Reusable card with clickable video links */
const VideoCard = ({
  title,
  description,
  projects,
}: {
  title: string;
  description: string;
  projects: typeof videoProjects;
}) => (
  <div className="work-card work-card-video">
    <div className="work-card-header">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className="work-card-content">
      <div className="work-video-grid">
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-video-link"
            key={project.id}
            data-cursor="disable"
          >
            <div className="work-video-preview">
              <img src={project.image} alt={project.title} />
              <div className="work-play-overlay">
                <MdPlayCircleOutline />
              </div>
            </div>
            <div className="work-video-info">
              <span className="work-video-title">{project.title}</span>
              <MdArrowOutward />
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

/* Reusable card with thumbnail grid layout */
const BentoCard = ({
  title,
  description,
  projects,
}: {
  title: string;
  description: string;
  projects: typeof thumbnailProjects;
}) => (
  <div className="work-card work-card-design">
    <div className="work-card-header">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className="work-card-content">
      <div className="work-thumb-grid">
        {projects.map((project) => (
          <div className="work-thumb-item" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="work-thumb-label">{project.title}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* Equal grid card for uniform image sizes */
const EqualGridCard = ({
  title,
  description,
  projects,
}: {
  title: string;
  description: string;
  projects: typeof restaurantProjects;
}) => (
  <div className="work-card work-card-equal">
    <div className="work-card-header">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className="work-card-content">
      <div className="work-equal-grid">
        {projects.map((project) => (
          <div className="work-equal-item" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="work-equal-label">{project.title}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* Reels card with vertical video layout */
const ReelsCard = ({
  title,
  description,
  projects,
}: {
  title: string;
  description: string;
  projects: typeof reelsProjects;
}) => (
  <div className="work-card work-card-reels">
    <div className="work-card-header">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className="work-card-content">
      <div className="work-reels-grid">
        {projects.map((project) => (
          <div className="work-reel-item" key={project.id}>
            <video
              src={project.video}
              muted
              loop
              playsInline
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />
            <div className="work-reel-label">{project.title}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Work = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const show = (cat: Category) => activeFilter === "all" || activeFilter === cat;

  return (
    <div className="work-section" id="work">
      <div className="work-header">
        <span className="work-subtitle">Some of my</span>
        <h2>WORK</h2>
        <p className="work-description">A collection of projects I'm proud of</p>

        <div className="work-filters">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`work-filter-btn ${activeFilter === filter.value ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.value)}
              data-cursor="disable"
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="work-grid">
        {show("video") && (
          <VideoCard
            title="VIDEO PROJECTS"
            description="Cinematic edits, motion graphics, and storytelling through video."
            projects={videoProjects}
          />
        )}

        {show("thumbnails") && (
          <BentoCard
            title="THUMBNAILS"
            description="Eye-catching thumbnails designed for maximum clicks."
            projects={thumbnailProjects}
          />
        )}

        {show("restaurant") && (
          <EqualGridCard
            title="RESTAURANT & HOTEL"
            description="Stunning promos and visual content for the hospitality industry."
            projects={restaurantProjects}
          />
        )}

        {show("reels") && (
          <ReelsCard
            title="REELS"
            description="Short-form viral content for Instagram and TikTok."
            projects={reelsProjects}
          />
        )}
      </div>

      <div className="work-cta">
        <a href="#contact" data-cursor="disable">
          LET'S WORK TOGETHER <MdArrowOutward />
        </a>
      </div>
    </div>
  );
};

export default Work;
