import { useState } from "react";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import { frequentlyAsked } from "utils/useFAQ";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="w-full rounded border border-accent">
        <div className="grid">
          <div className="hs-accordion-group divide-y divide-accent-300">
            {frequentlyAsked.map((faq, index) => (
              <div className="hs-accordion p-3" key={index}>
                <button
                  className="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 pb-3 text-left text-sm font-medium text-body"
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => handleAccordionToggle(index)}
                >
                  {faq.question}
                  <IconChevronUp
                    className={`block h-5 w-5 text-body ${
                      activeIndex === index ? "hs-accordion-active:hidden" : ""
                    }`}
                  />
                  <IconChevronDown
                    className={`hidden h-5 w-5 text-body ${
                      activeIndex === index ? "hs-accordion-active:block" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                    activeIndex === index ? "block" : "hidden"
                  }`}
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p className="text-sm text-body-500">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
