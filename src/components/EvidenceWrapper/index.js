import React from "react";
import { EVIDENCE_SECTIONS } from "./constants";
import "./EvidenceWrapper.css";

const EvidenceWrapper = () => (
  <div className="evidence__wrapper">
    {EVIDENCE_SECTIONS.map((section) => (
      <section
        id={`section-${section.key}`}
        data-testid={`test-${section.key}`}
        className={`main__${section.key}`}
        key={section.key}
      >
        {section.render}
      </section>
    ))}
  </div>
);

export default EvidenceWrapper;
