import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL || "", {
  ssl: {
    rejectUnauthorized: false, // This allows connecting to a database with a self-signed certificate
  },
});

export async function GET() {
  {
    try {
      const companies = await sql`SELECT * FROM goodhive.companies`;
      const formattedCompanies = companies.map((item) => ({
        headline: item.headline,
        address: item.address,
        country: item.country,
        city: item.city,
        phoneCountryCode: item.phone_country_code,
        phoneNumber: item.phone_number,
        email: item.email,
        telegram: item.telegram,
        details: item.details,
        image_url: item.image_url,
        wallet_address: item.wallet_address,
      }));

      return new Response(JSON.stringify(formattedCompanies)); //
    } catch (error) {
      console.error("Error fetching company's information:", error);

      return new Response(
        JSON.stringify({ message: "Error fetching company's information" }),
        {
          status: 500,
        }
      );
    }
  }
}
