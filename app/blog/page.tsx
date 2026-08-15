import { blogSchemas } from "./schema";
import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { CTASection } from '@/components/sections/cta-section'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

const BLOG_POSTS = [
  {
    title: '10 Essential Website Features for Small Businesses',
    excerpt: 'Discover the key features every small business website needs to attract customers and generate sales.',
    category: 'Website Tips',
    date: 'June 15, 2024',
    readTime: '5 min read',
  },
  {
    title: 'AWS vs Traditional Hosting: What\'s Right for You?',
    excerpt: 'Compare cloud hosting with traditional hosting and learn which solution fits your business needs.',
    category: 'AWS Hosting',
    date: 'June 10, 2024',
    readTime: '7 min read',
  },
  {
    title: 'Complete Guide to Business Registration in 2024',
    excerpt: 'Everything you need to know about registering your business, from filing requirements to compliance.',
    category: 'Compliance & Registration',
    date: 'June 5, 2024',
    readTime: '10 min read',
  },
  {
    title: 'How to Secure Your Business Data',
    excerpt: 'Learn practical tips to protect your sensitive business information from cyber threats.',
    category: 'Security',
    date: 'May 30, 2024',
    readTime: '6 min read',
  },
  {
    title: 'SEO Tips for Better Search Rankings',
    excerpt: 'Simple, actionable SEO strategies to improve your website visibility in search results.',
    category: 'SEO',
    date: 'May 25, 2024',
    readTime: '8 min read',
  },
  {
    title: 'Why Your Business Needs a Mobile-Friendly Website',
    excerpt: 'Understand why responsive design is crucial for reaching customers on all devices.',
    category: 'Website Tips',
    date: 'May 20, 2024',
    readTime: '4 min read',
  },
]

const CATEGORIES = [
  'All Posts',
  'Website Tips',
  'AWS Hosting',
  'SEO',
  'Security',
  'Compliance & Registration',
  'Business Growth',
]

export default function BlogPage() {
  return (
     <>
      {blogSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

     
   
    <MainLayout>
      {/* Hero */}
      <Hero
        title="Business Tips & Insights"
        subtitle="Read our latest articles on web development, hosting, business registration, and growing your online presence."
        backgroundGradient
      />

      {/* Blog */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {CATEGORIES.map((cat, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full transition-smooth ${
                  i === 0
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border text-foreground hover:border-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="space-y-6 mb-12">
            {BLOG_POSTS.map((post, i) => (
              <article
                key={i}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-smooth"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-grow">
                    <span className="text-primary text-sm font-semibold">{post.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3 hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex gap-4 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="#"
                    className="text-primary font-semibold hover:underline whitespace-nowrap"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Subscribe to Our Newsletter"
        subtitle="Get the latest tips and insights delivered to your inbox."
        primaryCta={{ text: 'Subscribe', href: '/contact' }}
      />
    </MainLayout>
     </>
  )
}
