"use client";

import Image from "next/image";

import { FC } from "react";

interface TalentProfileProps {
  image: string;
  firstName: string;
  lastName: string;
  jobHeadline: string;
  website: string;
  country: string;
  city: string;
  description: string;
  skills: string[];
  aboutWork: string;
  experiences: Experience[];
  studies: Study[];
  contact: Contact;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  employmentType: string;
  description: string;
}

interface Study {
  field: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  distinction: string;
  description: string;
}

interface Contact {
  phoneCountryCode: string;
  phoneNumber: string;
  email: string;
  telegram: string;
}

export const TalentProfile: FC<TalentProfileProps> = ({
  image,
  firstName,
  lastName,
  jobHeadline,
  website,
  country,
  city,
  description,
  skills,
  aboutWork,
  experiences,
  studies,
  contact,
}) => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-center">
        <img src={image} alt="Talent" className="w-24 h-24 rounded-full" />
        <h1 className="text-3xl font-bold ml-4">
          {firstName} {lastName}
        </h1>
      </div>
      <h2 className="text-xl font-bold mt-2">{jobHeadline}</h2>
      <div className="mt-2">
        <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          {website}
        </a>
      </div>
      <div className="mt-4">
        <p>
          <span className="font-bold">Location:</span> {country}, {city}
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Description</h2>
        <p className="mt-2">{description}</p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Skills</h2>
        <ul className="list-disc list-inside mt-2">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">About Work</h2>
        <p className="mt-2">{aboutWork}</p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Experiences</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="mt-4">
            <h3 className="text-lg font-bold">{experience.title}</h3>
            <p className="text-gray-500">
              {experience.company} | {experience.location} | {experience.startDate} - {experience.endDate}
            </p>
            <p className="mt-2">
              <span className="font-bold">Employment Type:</span> {experience.employmentType}
            </p>
            <p className="mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Studies</h2>
        {studies.map((study, index) => (
          <div key={index} className="mt-4">
            <h3 className="text-lg font-bold">{study.degree}</h3>
            <p className="text-gray-500">
              {study.field} | {study.school} | {study.location} | {study.startDate} - {study.endDate}
            </p>
            <p className="mt-2">
              <span className="font-bold">Distinction:</span> {study.distinction}
            </p>
            <p className="mt-2">{study.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Contact</h2>
        <p className="mt-2">
          <span className="font-bold">Phone:</span> {contact.phoneCountryCode} {contact.phoneNumber}
        </p>
        <p className="mt-2">
          <span className="font-bold">Email:</span> {contact.email}
        </p>
        <p className="mt-2">
          <span className="font-bold">Telegram:</span> {contact.telegram}
        </p>
      </div>
    </div>
  );
};
