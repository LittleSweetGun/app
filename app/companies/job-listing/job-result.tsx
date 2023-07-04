"use client";

import { Card } from "../../components/card";
import JobOffer from "@interfaces/job-offer";

export default function JobResult({ jobOffers }: { jobOffers: JobOffer[] }) {
  return (
    <div className="w-full">
      {jobOffers.map((jobOffer, index) => (
        <Card
          key={index}
          type="company"
          title={jobOffer.title}
          postedBy="Company Name" //TODO: connect job_offers table to companies table
          postedOn="posted 2 days ago"
          image="/img/company_img.png" //TODO: connect job_offers table to companies table
          countryFlag="/img/country_flag.png" // TODO: create flag table
          city="City" //TODO: connect job_offers table to companies table
          rate={jobOffer.rate}
          currency={jobOffer.currency}
          description={jobOffer.jobDescription}
          skills={jobOffer.skills}
          buttonText="Apply"
          // escrowAmount={jobOffer.escrowAmount} Add escrowAmount to job_offers table
          // escrowCurrency={jobOffer.escrowCurrency} Add escrowCurrency to job_offers table
        />
      ))}
    </div>
  );
}
