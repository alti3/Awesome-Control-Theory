export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-6 text-xs leading-relaxed text-muted-foreground">
        A map-aligned guide inspired by Brian Douglas&apos;s{" "}
        <a
          href="https://engineeringmedia.com/map-of-control"
          target="_blank"
          rel="noreferrer"
          className="text-foreground underline underline-offset-4 hover:text-primary"
        >
          Map of Control Theory
        </a>{" "}
        (Engineering Media). Text licensed CC BY 4.0.
      </div>
    </footer>
  )
}
