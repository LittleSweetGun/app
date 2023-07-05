"use client";

import { useContext } from "react";

import { AddressContext } from "@/app/components/context";
import { CompaniesCard } from "../../components/companies-card";
import CompanyProfile from "@interfaces/company-profile";

export default function CompaniesResult({ companiesProfile }: { companiesProfile: CompanyProfile[] }) {
  const walletAddress = useContext(AddressContext);

  const filteredCompany = companiesProfile.find((companyProfile) => companyProfile.walletAddress === walletAddress);

  return (
    <div className="flex flex-col min-w-full">
      {filteredCompany && (
        <CompaniesCard
          designation={filteredCompany.designation}
          image={filteredCompany.imageUrl}
          website="websitename.com" //add in DB
          details={filteredCompany.details}
          mail={filteredCompany.mail}
          phoneNumber={filteredCompany.phoneNumber}
          country={filteredCompany.country}
          city={filteredCompany.city}
          address={filteredCompany.address}
          countryFlag="/img/country_flag.png"
          telegram={filteredCompany.telegram}
          buttonText="Connect"
        />
      )}
    </div>
  );
}
