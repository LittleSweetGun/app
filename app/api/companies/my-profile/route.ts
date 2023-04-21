import postgres from "postgres";

export async function POST(request: Request) {
  const dataForm = await request.json();

  const sql = postgres(process.env.DATABASE_URL || "", {
    ssl: {
      rejectUnauthorized: false, // This allows connecting to a database with a self-signed certificate
    },
  });

  try {
    await sql`
      INSERT INTO goodhive.companies (
        headline,
        designation,
        address,
        country,
        city,
        phone_country_code,
        phone_number,
        email,
        telegram,
        details
      ) VALUES (
        ${dataForm.headline},
        ${dataForm.designation},
        ${dataForm.address},
        ${dataForm.country},
        ${dataForm.city},
        ${dataForm.phoneCountryCode},
        ${dataForm.phoneNumber},
        ${dataForm.email},
        ${dataForm.telegram},
        ${dataForm.details}
      );
    `;

    return new Response(
      JSON.stringify({ message: "Data inserted successfully" })
    );
  } catch (error) {
    console.error("Error inserting data:", error);
    return new Response(JSON.stringify({ message: "Error inserting data" }), {
      status: 500,
    });
  }
}
