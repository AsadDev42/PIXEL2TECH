import { createFileRoute } from "@tanstack/react-router";
import { PersonProfile } from "@/components/person-profile";
import { USAMA_FAROOQ, personProfileHead } from "@/lib/people";

export const Route = createFileRoute("/usama-farooq")({
  component: UsamaFarooqPage,
  head: () => personProfileHead(USAMA_FAROOQ),
});

function UsamaFarooqPage() {
  return <PersonProfile person={USAMA_FAROOQ} />;
}
