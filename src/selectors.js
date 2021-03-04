export const selectValidEvidence = (evidenceType, state) => {
  const selectedEvidence = state.evidence
    .filter((e) => e.statusString === "active")
    .map((e) => e.name)
  
  selectedEvidence.push(evidenceType);
  const validEvidence = [
    ...new Set(
      state.ghosts
        .filter((ghost) =>
          selectedEvidence.every((e) => ghost.evidence.includes(e))
        )
        .map((ghost) => ghost.evidence)
        .flat()
    ),
  ];
  console.log("selectValidEvidence", {validEvidence, selectedEvidence});

  return validEvidence;
};
