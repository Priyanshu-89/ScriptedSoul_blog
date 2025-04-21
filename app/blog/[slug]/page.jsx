
import matter from "gray-matter";

import fs from "fs"
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { reporter } from 'vfile-reporter'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'

export default async function Page({ params }) {
  const { slug } = params;
  const filepath = `content/${slug}.md`;
  // const filepath = `content/${params.slug}.md`
  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf-8")
  const { content, data } = matter(fileContent)
  const processor = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: '👋🌍' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypePrettyCode, {
      theme: 'github-dark',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],

    })


    const file = await processor.process(content);
    const htmlContent = file.toString();
    
    // console.error(reporter(file));
    // console.log(String(file));
    
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex items-center text-sm  mb-6">
        <span>By {data.author}</span>
        <span className="mx-2">•</span>
        <span>{data.date}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <img
          src={data.image}
          alt={data.title}
          className="w-full md:w-1/2 h-80 object-cover  rounded-lg shadow"
        />
        <p className="text-lg leading-relaxed">
          {data.description}
        </p>
      </div>

      <div className="mt-10 leading-relaxed dark:bg-gray-50 whitespace-pre-line text-base">
        {data.content}
      </div>

      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert">

      </div>
    </div>
  );
}
