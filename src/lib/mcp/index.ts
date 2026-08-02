import { auth, defineMcp } from "@lovable.dev/mcp-js";
import { listBlogPosts, getBlogPost } from "./tools/blog";
import { listServices, listPortfolioProjects, getAgencyInfo } from "./tools/agency";

// The OAuth issuer must be the direct Supabase host; the project ref is the only
// value that survives publish unchanged.
const projectRef = import.meta.env['VITE_SUPABASE_PROJECT_ID'] ?? "project-ref-unset";

export default defineMcp({
  name: "pixel2tech-on-loveable",
  title: "pixel2tech on loveable",
  version: "0.1.0",
  instructions:
    "Tools for Pixel2Tech, a full-service creative agency. Use `list_services` and `get_agency_info` for what the agency does and how to reach it, `list_portfolio_projects` for past work, and `list_blog_posts` / `get_blog_post` to read published articles.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listServices, getAgencyInfo, listPortfolioProjects, listBlogPosts, getBlogPost],
});
