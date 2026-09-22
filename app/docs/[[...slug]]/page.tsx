import { notFound } from 'next/navigation';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { source } from '@/lib/source';
export default function Page({params}:{params:{slug?:string[]}}) { const page=source.getPage(params.slug); if(!page) notFound(); const MDX=page.data.body; return <DocsPage toc={page.data.toc} full={page.data.full}><DocsTitle>{page.data.title}</DocsTitle><DocsDescription>{page.data.description}</DocsDescription><DocsBody><MDX /></DocsBody></DocsPage>; }
export function generateStaticParams(){return source.generateParams();}
export function generateMetadata({params}:{params:{slug?:string[]}}){const page=source.getPage(params.slug); return page?{title:page.data.title,description:page.data.description}:{ };}
