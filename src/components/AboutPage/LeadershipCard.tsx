"use client"
import type React from "react"
import LinkedInLogo from "/src/assets/images/linkedin-logo.svg"

interface LeadershipCardProps {
  name: string
  title: string
  imageUrl: string
  linkedinUrl?: string
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({ name, title, imageUrl, linkedinUrl }) => {
  return (
    <div
      className="
    relative
    w-[340px]
    h-[470px]
    aspect-[3/4]
    rounded-3xl
    overflow-hidden
    shadow-xl
    hover:shadow-2xl
    transition-shadow
    duration-300
    mx-[10px]
    my-[16px]
  "
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      role="img"
      aria-label={`Photo of ${name}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      <div
        className="
        absolute
        bottom-4
        left-4
        right-4
        bg-white
        px-5
        py-4
        flex
        items-center
        justify-between
        rounded-2xl
        shadow-lg
        backdrop-blur-sm
      "
      >
        <div className="flex-1 min-w-0 mr-3">
          <h3 className="text-lg font-bold text-gray-900 leading-tight break-words">{name}</h3>
          <p className="text-sm text-gray-600 mt-0.5">{title}</p>
        </div>
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex-shrink-0
            w-10
            h-10
            text-white
            rounded-xl
            flex
            items-center
            justify-center
            transition-colors
            duration-200
          "
            aria-label={`View ${name}'s LinkedIn profile`}
          >
            <img src={LinkedInLogo} alt="LinkedIn"/>
          </a>
        )}
      </div>
    </div>
  )
}

export default LeadershipCard
