import ServicesCard from "@/app/components/Services/ServiceCard";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Taguini Marketing - Agence de Marketing Digital à Sfax",
};

const page = () => {

  return (
    <>
          <div className="pt-16 lg:pt-20" />

      <ServicesCard />
    </>
  );
};

export default page;
