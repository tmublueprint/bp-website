"use client"
import React from "react"
import CompaniesLogo from "/src/assets/images/companies.svg"

const AlumniCompaniesCard: React.FC = () => {
  return (
    <section id="alumni-companies-section">
      <h2 id="alumni-companies-title">Where Our Alumni Work</h2>
      <p id="alumni-companies-subtitle">
        Here are some of the companies our members have gone on to work at
      </p>
      <div id="alumni-companies-image-container">
        <img src={CompaniesLogo} alt="Company logos" id="alumni-companies-image" />
      </div>
    </section>
  )
}

export default AlumniCompaniesCard
