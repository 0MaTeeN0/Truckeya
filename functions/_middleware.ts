// Sends each page's own title, description and canonical in the first HTML response,
// so Google and Bing see the right tags without needing to run JavaScript.
// Only HTML pages listed below are changed. Everything else passes through untouched.
import { seoPages } from "../src/lib/seoPages"
import { blogPosts } from "../src/lib/blogPosts"
import { SITE_URL } from "../src/lib/seoTypes"

type Meta = { title: string; description: string }

const PAGES = new Map<string, Meta>()
PAGES.set("/quote", { title: "Get a Free Truck Quote in Pakistan | Truckeya", description: "Request a free truck quote in minutes. Enter your pickup, drop and cargo details and Truckeya will reply with a price for trucks anywhere in Pakistan." })
PAGES.set("/track", { title: "Track Your Shipment | Truckeya Pakistan", description: "Track your cargo with Truckeya. Enter your tracking details to see the status of your truck booking anywhere in Pakistan." })
PAGES.set("/blog", { title: "Truckeya Blog | Logistics, Trade Routes and Trucking in Pakistan", description: "Guides and updates on trucking in Pakistan: trade routes with China, Afghanistan and Iran, seasonal road conditions, freight rates and shipping tips." })
for (const p of seoPages) PAGES.set("/" + p.slug, { title: p.title, description: p.description })
for (const b of blogPosts) PAGES.set("/blog/" + b.slug, { title: b.title + " | Truckeya", description: b.description })

const setAttr = (name: string, value: string) => ({ element: (e: any) => { e.setAttribute(name, value) } })

export const onRequest = async (context: any) => {
  const req = context.request
  if (req.method !== "GET") return context.next()
  const path = new URL(req.url).pathname.replace(/\/+$/, "") || "/"
  const meta = PAGES.get(path)
  if (!meta) return context.next()
  const res = await context.next()
  if (!(res.headers.get("content-type") || "").includes("text/html")) return res
  const url = SITE_URL + path
  const Rewriter = (globalThis as any).HTMLRewriter
  return new Rewriter()
  .on("head > title", { element: (e: any) => { e.setInnerContent(meta.title) } })
  .on("meta[name=description]", setAttr("content", meta.description))
  .on("link[rel=canonical]", setAttr("href", url))
  .on("meta[property='og:title']", setAttr("content", meta.title))
  .on("meta[property='og:description']", setAttr("content", meta.description))
  .on("meta[property='og:url']", setAttr("content", url))
  .on("meta[name='twitter:title']", setAttr("content", meta.title))
  .on("meta[name='twitter:description']", setAttr("content", meta.description))
  .transform(res)
}
