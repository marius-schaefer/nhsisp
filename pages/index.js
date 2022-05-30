import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <PageSEO
        title={`Community Service Opportunities - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Community Service Opportunities
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            List of Community Service Opportunities
          </p>
          <div className="text-base font-medium leading-6">
            <Link
              href={`https://airtable.com/shrGB6EiLtVMY6CAA`}
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`To add your community service opportunity fill out this form`}
            >
              To add your community service opportunity fill out this form
            </Link>
          </div>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
