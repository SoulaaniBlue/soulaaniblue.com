// Run this script after updating blog.js to regenerate rss.xml
// Usage: node generate-rss.js > rss.xml

const postContents = require('./blog.js');

const escapeXML = (str) =>
  str.replace(/&/g, '&amp;')
     .replace(/</g, '&lt;')
     .replace(/>/g, '&gt;')
     .replace(/"/g, '&quot;')
     .replace(/'/g, '&apos;');

const formatDate = (dateStr) => {
  const d = new Date(dateStr + ' 00:00:00 GMT');
  return d.toUTCString();
};

let items = '';
for (let i = 1; i <= Object.keys(postContents).length; i++) {
  const post = postContents[i];
  const desc = escapeXML(post.content.replace(/<[^>]*>/g, '').substring(0, 250)) + '...';
  items += `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>https://www.soulaaniblue.com/blog.html#post-${i}</link>
      <guid>https://www.soulaaniblue.com/blog.html#post-${i}</guid>
      <pubDate>${formatDate(post.date)}</pubDate>
      <description><![CDATA[${desc}]]></description>
    </item>`;
}

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
    <title>Soulaani Blue Blog</title>
    <link>https://www.soulaaniblue.com/blog.html</link>
    <description>Stories, updates, and reflections from Soulaani Blue's journey.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://www.soulaaniblue.com/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
</channel>
</rss>`;

console.log(rss);
