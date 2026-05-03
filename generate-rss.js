// ==========================================
// generate-rss.js – Run in Node.js to create rss.xml from blog.js
// Usage: node generate-rss.js > rss.xml
// ==========================================

const fs = require('fs');
const path = require('path');

// Read blog.js and extract the postContents object (safe because we wrote it)
const blogJs = fs.readFileSync(path.join(__dirname, 'blog.js'), 'utf8');
// Extract the object literal assigned to const postContents = { ... };
const match = blogJs.match(/const postContents = (\{[\s\S]*?\n\};)/);
if (!match) {
    console.error('Could not extract postContents from blog.js');
    process.exit(1);
}
let postContents;
eval('postContents = ' + match[1]);

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
const ids = Object.keys(postContents).sort((a, b) => a - b);
for (const id of ids) {
    const post = postContents[id];
    const desc = escapeXML(post.content.replace(/<[^>]*>/g, '').substring(0, 250)) + '...';
    items += `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>https://www.soulaaniblue.com/blog.html#post-${id}</link>
      <guid>https://www.soulaaniblue.com/blog.html#post-${id}</guid>
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

fs.writeFileSync(path.join(__dirname, 'rss.xml'), rss);
console.log('rss.xml updated');
