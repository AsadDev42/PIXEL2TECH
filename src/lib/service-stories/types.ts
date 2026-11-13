/** Service journeys describe the proposed work, never fictional client results. */
export type ServiceStory = {
  keyword: string;
  problem: string;
  approach: string;
  handover: string;
  process: [
    { title: string; desc: string },
    { title: string; desc: string },
    { title: string; desc: string },
    { title: string; desc: string },
  ];
};
