type YouTubeProps = {
  id?: string;
  playlistId?: string;
  url?: string;
  title?: string;
};

function getYouTubeSrc({ id, playlistId, url }: Pick<YouTubeProps, "id" | "playlistId" | "url">) {
  if (id) {
    return `https://www.youtube.com/embed/${id}`;
  }

  if (playlistId) {
    return `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
  }

  if (!url) {
    return null;
  }

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.slice(1);
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }

    if (parsedUrl.hostname.endsWith("youtube.com")) {
      if (parsedUrl.pathname.startsWith("/embed/")) {
        const videoId = parsedUrl.pathname.split("/")[2];
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
      }

      const videoId = parsedUrl.searchParams.get("v");
      const listId = parsedUrl.searchParams.get("list");

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }

      if (listId) {
        return `https://www.youtube.com/embed/videoseries?list=${listId}`;
      }
    }
  } catch {
    return `https://www.youtube.com/embed/${url}`;
  }

  return null;
}

export function YouTube({ id, playlistId, url, title = "YouTube video" }: YouTubeProps) {
  const src = getYouTubeSrc({ id, playlistId, url });

  if (!src) {
    return null;
  }

  return (
    <div className="my-8 aspect-video w-full overflow-hidden rounded-lg border border-border bg-card">
      <iframe
        className="h-full w-full"
        src={src}
        title={title}
        loading="lazy"
        sandbox="allow-scripts allow-presentation allow-popups"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
