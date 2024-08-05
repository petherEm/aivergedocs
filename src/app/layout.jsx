import glob from 'fast-glob'
import { Outfit } from 'next/font/google'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: 'aiverge.io | Tutorials & Opinions',
    default: 'aiverge.io | Tutorials & Opinions',
  },
}

export default async function RootLayout({ children }) {
  let pages = await glob('**/*.mdx', { cwd: 'src/app' })
  let allSectionsEntries = await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )
  let allSections = Object.fromEntries(allSectionsEntries)

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex min-h-full bg-white antialiased dark:bg-black">
        <Providers>
          <div className="w-full">
            <Layout allSections={allSections}>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
