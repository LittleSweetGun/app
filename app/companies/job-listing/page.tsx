"use client";

import { useEffect, useState, useContext } from "react";

import JobOffer from "@interfaces/job-offer";
import JobResult from "./job-result";
import CompaniesResult from "./companies-result";
import { AddressContext } from "../../components/context";

export default function JobListing() {
  const [jobOffersData, setJobOffersData] = useState<JobOffer[]>([]);
  const walletAddress = useContext(AddressContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const jobOffersResponse = await fetch("/api/job-offers", {
            method: "GET",
            body: JSON.stringify({ walletAddress }),
          });
          
        if (!jobOffersResponse.ok) {
          throw new Error("Failed to fetch data from the server");
        }

        const jobOffers = await jobOffersResponse.json();
        setJobOffersData(jobOffers);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [walletAddress]);

  return (
    <main className="mx-5">
      <section>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-row w-full md:flex-col md:w-2/6">
            <CompaniesResult />
          </div>
          <div className="box-border flex flex-col w-full p-5 mt-10 bg-white border-l-2 border-r-2 shadow-xl md:w-4/6 bg-blend-darken shadow-gray-300 rounded-3xl md:mx-2 border-radius">
            <h1 className="text-2xl font-bold">Job listing</h1>
            <div className="flex flex-col">
              <JobResult jobOffers={jobOffersData} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
