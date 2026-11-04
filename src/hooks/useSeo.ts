import { useEffect } from 'react'
import { SITE_URL } from '../lib/seoTypes'

export type SeoOptions = {
  title: string
  description: string
  path: string
  jsonLd?: object[]
}

const upsert = (tag: 'meta' | 'link', key: string, keyValue: string, attr: string, value: string) => {
  let el = document.head.querySelector(tag + '[' + key + '="' + keyValue + '"]')
  if (!el) {
    el = document.createElement(tag)
    el.setAttribute(key, keyValue)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

export const useSeo = ({ title, description, path, jsonLd }: SeoOptions) => {
  const ld = JSON.stringify(jsonLd ?? [])

  useEffect(() => {
    const url = SITE_URL + path
    document.title = title
    upsert('meta', 'name', 'description', 'content', description)
    upsert('link', 'rel', 'canonical', 'href', url)
    upsert('meta', 'property', 'og:title', 'content', title)
    upsert('meta', 'property', 'og:description', 'content', description)
    upsert('meta', 'property', 'og:url', 'content', url)
    upsert('meta', 'name', 'twitter:title', 'content', title)
    upsert('meta', 'name', 'twitter:description', 'content', description)

            const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-page-seo', 'true')
    script.text = ld
    document.head.appendChild(script)

            window.scrollTo(0, 0)

            return () => {
              script.remove()
            }
  }, [title, description, path, ld])
}
