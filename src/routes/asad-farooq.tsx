import { createFileRoute } from "@tanstack/react-router";
import { PersonProfile } from "@/components/person-profile";
import { ASAD_FAROOQ, personProfileHead } from "@/lib/people";

export const Route = createFileRoute("/asad-farooq")({
  component: AsadFarooqPage,
  head: () => personProfileHead(ASAD_FAROOQ),
});

function AsadFarooqPage() {
  return <PersonProfile person={ASAD_FAROOQ} />;
}
