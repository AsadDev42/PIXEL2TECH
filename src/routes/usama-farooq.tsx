import { createFileRoute, redirect } from "@tanstack/react-router";
import { PersonProfile } from "@/components/person-profile";
import { USAMA_FAROOQ, personProfileHead } from "@/lib/people";
import { isHiddenProfile } from "@/lib/team";

export const Route = createFileRoute("/usama-farooq")({
  // Temporary (302) while the profile is hidden, so it can come back unchanged.
  beforeLoad: () => {
    if (isHiddenProfile("/usama-farooq")) {
      throw redirect({ to: "/about", statusCode: 302 });
    }
  },
  component: UsamaFarooqPage,
  head: () => personProfileHead(USAMA_FAROOQ),
});

function UsamaFarooqPage() {
  return <PersonProfile person={USAMA_FAROOQ} />;
}
