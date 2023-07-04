interface JobOffer {
    type: string;
    image: string;
    title: string;
    postedBy: string;
    postedOn: string;
    jobDescription: string;
    duration: string;
    country: string;
    countryFlag: string;
    city: string;
    rate: number;
    typeEngement: string;
    currency: string;
    skills: string[];
    buttonText: string;
  }

export default JobOffer;