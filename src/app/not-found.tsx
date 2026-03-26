import NotFound from "@/app/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | Taguini Marketing - Page Non Trouvée",
};

const ErrorPage = () => {
  
  return (
    <>
      <NotFound />
    </>
  );
};

export default ErrorPage;
