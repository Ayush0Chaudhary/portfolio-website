import { Meteors } from "@/components/ui/meteor-card";
import Navbar from "@/components/ui/navbar";
import Purenet from "./purenet";
import FireFoxAddons from "./firefox-extension";
import EcertiAdmin from "./ecerti-admin";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {/* Card 1 */}
        <Purenet/>
        <FireFoxAddons/>
        <EcertiAdmin/>
    </div>
    </div>
  );
};

export default Projects;
