import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getTopicBySlug } from "@/lib/control-data"
import { getTopicMetadata, getTopicModule, getTopicSlugs } from "@/lib/topics"

type TopicPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getTopicSlugs()

  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { slug } = await params
  const topic = getTopicBySlug(slug)
  const metadata = await getTopicMetadata(slug)
  const title = metadata?.title ?? topic?.term ?? slug.replace(/-/g, " ")
  const description = metadata?.description || topic?.description || `Deep dive into ${title} in Control Theory`

  return {
    title: `${title} | Control Theory`,
    description,
    openGraph: {
      title,
      description,
    },
  }
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params
  const topic = getTopicBySlug(slug)

  const mdx = await getTopicModule(slug)

  if (!mdx) {
    notFound()
  }

  const { default: TopicContent, frontmatter } = mdx

  return (
    <div className="min-h-screen">
      <SiteHeader activePage="map" />

      <main className="mx-auto max-w-4xl px-5 py-8 md:py-12">
        <Link
          href="/map"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Back to map
        </Link>

        <div className="mb-8 border-b border-border pb-6">
          <div className="mb-3 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span className="text-primary">{frontmatter?.branch ?? topic?.branchTitle}</span>
            <span>/</span>
            <span>{frontmatter?.category ?? topic?.sectionTitle}</span>
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            {frontmatter?.title ?? topic?.term ?? "Control Theory Topic"}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {frontmatter?.description ?? topic?.description}
          </p>
        </div>

        <article className="topic-prose">
          <TopicContent />
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}

export const dynamicParams = true
export const revalidate = 3600
