import Tools from "../Tools";
import Evidence from "../Evidence";
import Ghosts from "../Ghosts";
import GhostName from "../GhostName";
import SecondaryEvidence from "../SecondaryEvidence";

export const EVIDENCE_SECTIONS = [
  {
    key: "ghostName",
    render: <GhostName />,
  },
  {
    key: "evidence",
    render: <Evidence />,
  },
  {
    key: "ghosts",
    render: <Ghosts />,
  },
  {
    key: "tools",
    render: <Tools />,
  },
  {
    key: "secondaryEvidence",
    render: <SecondaryEvidence />,
  },
];