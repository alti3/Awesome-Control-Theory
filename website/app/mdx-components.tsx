import type { MDXComponents } from "mdx/types"
import type { ReactNode } from "react"
import { nodeToText, slugifyHeading } from "@/lib/heading-utils"

type YouTubeProps = {
  id?: string
  playlistId?: string
  url?: string
  title?: string
}

function headingId(children: ReactNode) {
  return slugifyHeading(nodeToText(children))
}

function getYouTubeSrc({ id, playlistId, url }: Pick<YouTubeProps, "id" | "playlistId" | "url">) {
  if (id) {
    return `https://www.youtube.com/embed/${id}`
  }

  if (playlistId) {
    return `https://www.youtube.com/embed/videoseries?list=${playlistId}`
  }

  if (!url) {
    return null
  }

  try {
    const parsedUrl = new URL(url)

    if (parsedUrl.hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.slice(1)
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null
    }

    if (parsedUrl.hostname.endsWith("youtube.com")) {
      if (parsedUrl.pathname.startsWith("/embed/")) {
        const videoId = parsedUrl.pathname.split("/")[2]
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null
      }

      const videoId = parsedUrl.searchParams.get("v")
      const listId = parsedUrl.searchParams.get("list")

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`
      }

      if (listId) {
        return `https://www.youtube.com/embed/videoseries?list=${listId}`
      }
    }
  } catch {
    return `https://www.youtube.com/embed/${url}`
  }

  return null
}

function YouTube({ id, playlistId, url, title = "YouTube video" }: YouTubeProps) {
  const src = getYouTubeSrc({ id, playlistId, url })

  if (!src) {
    return null
  }

  return (
    <div className="my-8 aspect-video w-full overflow-hidden rounded-lg border border-border bg-card">
      <iframe
        className="h-full w-full"
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    YouTube,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, id, ...props }) => (
      <h2 id={id ?? headingId(children)} {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, id, ...props }) => (
      <h3 id={id ?? headingId(children)} {...props}>
        {children}
      </h3>
    ),
    ...components,
  }
}
