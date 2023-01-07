import  Level1  from "../data";
import AccordionItem from "./accordianItem";

const Accordion = () => {
  return (
    <ul className="accordion">
      {Level1.map((Level1, index) => (
          <AccordionItem key={index} faq={Level1} />
      ))}
    </ul>
  );
};

export default Accordion;