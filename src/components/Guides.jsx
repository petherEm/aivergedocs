import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/',
    name: 'OpenAI API',
    description: 'Learn how to authenticate your API requests.',
  },
  {
    href: '/nextjs',
    name: 'Latest Vercel Inc. developments',
    description: 'Understand how to work with paginated responses.',
  },
  {
    href: '/ai/machine-learning',
    name: 'Artificial Intelligence',
    description: 'Learn how to authenticate your API requests.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Current Areas of Exploration
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Check it out
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
