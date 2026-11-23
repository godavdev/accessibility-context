import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarBlankIcon,
  ClockIcon,
  NewspaperIcon,
  SparkleIcon,
} from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import type { ReactNode } from "react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { posts, type Post } from "#/lib/posts"

interface ArticleLayoutProps {
  post: Post
  children: ReactNode
}

export function ArticleLayout({ post, children }: ArticleLayoutProps) {
  const nextPost = posts.find((item) => item.to !== post.to) ?? posts[0]

  return (
    <article className="mx-auto max-w-3xl space-y-10">
      <div className="space-y-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:underline underline-offset-4"
        >
          <ArrowLeftIcon size={16} />
          Volver al inicio
        </Link>

        <div className="space-y-4">
          <Badge className="gap-1.5 px-3 py-1">
            <SparkleIcon data-icon="inline-start" weight="fill" />
            {post.category}
          </Badge>
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {post.title}
          </h1>
          <p className="text-lg leading-8 text-muted-foreground text-pretty">
            {post.description}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <CalendarBlankIcon size={16} />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <ClockIcon size={16} />
              {post.readingTime}
            </span>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-6 text-[15px] leading-7 text-foreground/85 sm:text-base sm:leading-8">
        {children}
      </div>

      <Separator />

      <section className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
          <NewspaperIcon size={16} />
          Siguiente lectura
        </div>
        <Link to={nextPost.to} className="group block">
          <Card className="transition-all group-hover:-translate-y-0.5 group-hover:ring-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-4 text-lg">
                {nextPost.title}
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:translate-x-1">
                  <ArrowRightIcon size={18} />
                </span>
              </CardTitle>
              <CardDescription>{nextPost.description}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </section>
    </article>
  )
}
