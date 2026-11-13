import { CORE_SERVICE_STORIES } from "@/lib/service-stories/core";
import { CREATIVE_SERVICE_STORIES } from "@/lib/service-stories/creative";
import { PRODUCTION_MARKETING_STORIES } from "@/lib/service-stories/production-marketing";
import type { ServiceStory } from "@/lib/service-stories/types";

export const SERVICE_STORIES: Record<string, ServiceStory> = {
  ...CORE_SERVICE_STORIES,
  ...CREATIVE_SERVICE_STORIES,
  ...PRODUCTION_MARKETING_STORIES,
};
