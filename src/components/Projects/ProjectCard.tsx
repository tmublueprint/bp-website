"use client"
import React from "react"
import GithubIcon from "/src/assets/images/github-icon.svg"
import WebsiteIcon from "/src/assets/images/website-icon.svg"

interface ProjectCardProps {
  npoName: string
  npoDescription: string
  solution: string
  bannerImage: string
  githubUrl?: string
  websiteUrl?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ npoName, npoDescription, solution, bannerImage, githubUrl, websiteUrl }) => {
  return (
    <div className="project-card">
      <div className="project-card-banner">
        <img src={bannerImage} alt="Project banner" className="project-card-banner-image" />
      </div>
      <div className="project-card-content">
        <div className="project-card-section">
          <h3 className="project-card-heading">{npoName}</h3>
          <p className="project-card-text">{npoDescription}</p>
        </div>
        <div className="project-card-divider"></div>
        <div className="project-card-section">
          <h3 className="project-card-heading">Our Solution</h3>
          <p className="project-card-text">{solution}</p>
          <div className="project-card-links">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-card-link" aria-label="GitHub">
                <img src={GithubIcon} alt="GitHub" className="project-card-icon" />
              </a>
            )}
            {websiteUrl && (
              <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="project-card-link" aria-label="Website">
                <img src={WebsiteIcon} alt="Website" className="project-card-icon" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
