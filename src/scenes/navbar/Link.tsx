import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ 
    page,
    selectedPage, 
    setSelectedPage,
}: Props) => {
  //treat the text as SelectedPage value instead
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    // if selected page is equal to lowerCasePage, set text to color 500, otherwise set text color to as is (no class applied)
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
    transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={()=> setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
