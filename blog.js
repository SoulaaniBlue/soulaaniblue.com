// ==========================================
// Soulaani Blue – Blog data, rendering, modal
// ==========================================

// ---------- Blog post data ----------
const postContents = {
    1: {
        title: "From Classroom Cover to Healing Anthem: The Story of \"Operator\"",
        date: "November 20, 2025",
        image: "/images/IMG_8025.jpeg",
        content: `<div class="blog-full-post">
            <p>I found a video on my phone the other day from August 2024. I was in my classroom recording myself singing Anita Baker's "I Apologize."</p>
            <iframe style="width:100%; aspect-ratio:16 / 9;" src="https://odysee.com/%24/embed/%40soulaaniblue%3Af%2FOperator-Cover-%3A8?r=7Bg8W9w2rQrxPFkW2RYoZNePFGS9WHyX&signature=91e7faa0a7fdc090137a02302bd73993981629180da6fb98ee1e03d498767f7934b7f0b53ca546155a49ad84fb2ad35c62f0342dff83a8644171a62b4a4a9bdd&signature_ts=1773128933" allowfullscreen></iframe>
            <p class="image-caption">August 2024 – I didn't know it would become "Operator"</p>
            <p>Anita Baker was one of the first women I ever heard apologize on a record. It was like she meant it but wasn't broken by it. Her voice taught me something I didn't have words for yet. An apology ain't a transaction. It's not about getting something back. It's about becoming someone who can face what they did.</p>
            <p>I didn't know I was learning. I was just singing.</p>
            <p>Months passed and I tried to turn that cover into something. I even made my own beat on Bandlab lol and had the first verse and hook but it sat unfinished for almost a year.</p>
            <p>Here's that first draft—before it found its home:</p>
            <iframe style="width:100%; aspect-ratio:16 / 9;" src="https://odysee.com/%24/embed/%40soulaaniblue%3Af%2FOperator-1st-Draft%3A4?r=7Bg8W9w2rQrxPFkW2RYoZNePFGS9WHyX&signature=e1aeaf155fc2f7ba11e4f13ced8bd2683b237bc0a146a7c4f102cf3451861051074232c9df382cae74a1ed41f914aca0440d64296c42fc3d55c36914e8ee6a22&signature_ts=1773132748" allowfullscreen></iframe>
            <p class="image-caption">The first draft – made on Bandlab, before PLXY's beat and the second verse.</p>
            <img src="/images/IMG_2110.jpeg" alt="My recording setup when I first recorded the Operator draft"><p class="image-caption">The setup where the first draft came together.</p>
            <p>I'd open the project, listen for a minute and then close it. Something was missing but at the time, I couldn't name it. So I let it sit and focused on other things like surviving, mainly and on figuring out why my chest still hurt over somebody I wasn't even with anymore and hadn't been with in years.</p>
            <p>A day after I dropped "I love you, still," PLXY sent me a beat.</p>
            <p>Soon as I heard it, I knew this was what I had been missing for a year.</p>
            <p>The second verse poured out and I recorded it that same night.</p>
            <p>People ask about the "Re" thing. Regretful. Remorseful. Reflecting. Rewrite. Recite. Recital. Recognized. Realize. Recreate. Reconsider.</p>
            <p>"Repeat" had just dropped on Audiomack and I was thinking about cycles and how I kept coming back to the same wounds, the same lessons, and the same people in different bodies. Healing ain't linear, it's recursive. You learn it, then forget it, and then you learn it again. Deeper each time.</p>
            <p>Everything I know about love, loss, and apology, I learned the hard way. I learned usually by doing things the wrong way at first, realizing that I did it wrong, then adjusting after.</p>
            <p>There's a line in the second verse "Sweet lovin', sweet nothings" that's for those who know Anita's catalog. A nod to "Sweet Love." And "from beginning to the end and on repeat" is "Same Ole Love." That song where she sings about wanting the same love 365 days a year.</p>
            <p>Here's the thing though. Anita's songs are about love that lasts. Mine's are about a love that ended. Even though I finally understand what lasting love would've required.</p>
            <p>"Operator" is about sitting in that room long enough that the room changes you and apologizing because you finally understand why the apology was owed in the first place.</p>
            <p>Thank you for listening to the journey.</p>
            <p>If you ever had words you didn't know what to do with, keep them. They'll find their place. The right beat will come and you'll understand why you had to wait.</p>
            <div class="blog-links mt-8"><a href="https://audiomack.com/soulaaniblue/song/operator" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition duration-300"><i class="fas fa-headphones mr-2"></i> Listen to "Operator" on Audiomack</a></div>
        </div>`
    },
    2: {
        title: "The Song That Chose Me: The Story of \"Rather Be\"",
        date: "November 25, 2025",
        image: "/images/Caldwell%20House%20Recording%20Set%20Up.JPEG",
        content: `<div class="blog-full-post">
            <p>There are songs you write and then there are songs that write you.</p>
            <p>"Rather Be" is the second kind.</p>
            <p>I wrote the first verse in a rented room at Ms. Caldwell's house.</p>
            <p>I'd been forced out of my old apartment because of rats. Not metaphorically. Actual rats and the landlord wouldn't fix it. So I left.</p>
            <p>Ms. Caldwell gave me a room. Space to breathe.</p>
            <p>I'd sit on that bed at night, staring at the ceiling. Wondering if I'd ever stop waking up reaching for somebody who wasn't there.</p>
            <p>People talk about heartbreak like it's sad and it is but mostly it's exhausting. You carry it everywhere. To work, to bed, to the bathroom at 3am, to the classroom where you gotta smile at your babies who don't know their teacher is hurting.</p>
            <p>Writing became the only place I could put it down for a minute.</p>
            <p>I'm in Thailand now. Teaching and still trying to figure it out.</p>
            <p>People back home ask "You gonna find yourself an Asian girl? You dating?"</p>
            <p>I smile, say "nah" and often change the subject.</p>
            <p>They don't know that "nah" is carrying a whole lot of weight.</p>
            <p>"Hey Bunnie" sat unfinished for months.</p>
            <p>I carried those words with me across oceans from Virginia to Thailand. From Ms. Caldwell's house to a hotel room.</p>
            <img src="/images/sclassic%202025-11-02%20174405.291.jpeg" alt="The hotel room in Thailand where I finished 'Hey Bunnie'"><p class="image-caption">The hotel room in Thailand where I finished 'Hey Bunnie'</p>
            <p>When I recorded "Rather Be," I had a small room, a mirror on the wall, and the conviction that my truth deserved to be heard even if only by the four walls around me. If I didn't get this out, it was gonna eat me alive.</p>
            <img src="/images/Caldwell%20House%20Recording%20Set%20Up.jpeg" alt="The recording set up for 'Rather Be' at Ms. Caldwell's house"><p class="image-caption">The recording set up for "Rather Be" at Ms. Caldwell's house</p>
            <p>The truth is I miss her and I'd rather be alone than pretend I don't. But the truth also is I'm building something. A life, a sound, a self and it matters to me that it's real and mine. When I finally show up for somebody again, I'm showing up as me and not the broken version running from my own emptiness.</p>
            <p>I'd rather be here, alone, becoming.<br>Than anywhere else, with anybody, staying the same.</p>
            <div class="blog-links mt-8"><a href="https://audiomack.com/soulaaniblue/song/rather-be" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition duration-300"><i class="fas fa-headphones mr-2"></i> Stream "Rather Be" on Audiomack</a></div>
        </div>`
    },
    3: {
        title: "Same (Ole Lady)",
        date: "November 30, 2025",
        image: "/images/Caldwell%20House%20Bedroom.jpeg",
        content: `<div class="blog-full-post">
            <p>I wrote this because I got tired of lying to myself.</p>
            <p>"This what I get for not having the words."</p>
            <p>I couldn't say what I felt when it mattered. I couldn't apologize until years after she was already gone.</p>
            <p>I was too hurt, too proud, too stupid, and too busy running from guilt and shame to know that that was the last chance I'd ever get to feel her arms around me.</p>
            <img src="/images/Caldwell%20House%20Bedroom.jpeg" alt="The bedroom at Ms. Caldwell's house where I processed all of this">
            <p>I earned that.</p>
            <p>I tried to move on but every time I was with somebody else, I found myself comparing and that wasn't fair to them.</p>
            <p>Writing this taught me some equations don't balance.</p>
            <p>But maybe the equation changes. Maybe you keep showing up.</p>
            <p>I doubt she'll ever hear it and I know for sure that it won't change anything. I had to put it out so somebody else feeling this knows they're not crazy. Maybe hearing me will prevent someone else from making my same mistake. I can take solace in that.</p>
            <div class="blog-links mt-8"><a href="https://audiomack.com/soulaaniblue/song/same-ole-lady" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition duration-300"><i class="fas fa-headphones mr-2"></i> Stream "Same (Ole Lady)" on Audiomack</a></div>
            <p class="mt-8 text-xl text-gold">If you've ever lost somebody and still want them back years later, I see you.</p>
        </div>`
    },
    4: {
        title: "The Flower That Grew Into a Song (Repeat)",
        date: "December 5, 2025",
        image: "/images/IMG_1286.jpeg",
        content: `<div class="blog-full-post">
            <p>I wrote the first lines of "Repeat" in 2023, sitting on a friend's couch with nowhere else to go. Back then, all I had was a few words, a feeling, and a melody humming in my head during sleepless nights. Creating art in crisis feels impossible sometimes but that fragment of song became my lifeline when everything else felt like it was falling apart.</p>
            <p>For months, those words lived only in my phone's notes app and in the quiet moments between survival. I carried them with me like seeds waiting for soil.</p>
            <iframe style="width:100%; aspect-ratio:16 / 9;" src="https://odysee.com/%24/embed/%40soulaaniblue%3Af%2FRepeat-Cover%3A2?r=7Bg8W9w2rQrxPFkW2RYoZNePFGS9WHyX&signature=de800bb3c13c8ebef366e9174a1e10b92ac74423d1d204343fdea2c286fbe7ce2a760fb907731734f9a27c03c8adc7b44ac71234b3a372d2ef862fccba09cc5b&signature_ts=1773127206" allowfullscreen></iframe>
            <p class="image-caption">The single flower bud that grew from a dead bush—the moment that unlocked "Repeat" and taught me beauty persists.</p>
            <p>Then in April 2024, everything shifted. PLXY sent me a beat pack that included a track that immediately felt like home. By then, I had a small room of my own in Colonial Heights, thanks to Ms. Debbie's kindness. Every morning and evening, I'd sit by the creek behind her house, listening to the water flow while scrolling through that beat pack.</p>
            <img src="/images/Debbie%E2%80%99s%20Dining%20Room.jpg" alt="Ms. Debbie's dining room where Repeat was recorded"><p class="image-caption">Ms. Debbie's dining room—where "Repeat" came to life</p>
            <p>One afternoon, I noticed something that stopped me cold: a bush that looked completely dead, brown and brittle in the Virginia sun. But right in the center, pushing through the decay, was a single flower bud. Small, determined, and defiantly alive.</p>
            <p>I recorded a video of it on my phone. Something about that stubborn flower unlocked everything inside me. I went inside, loaded PLXY's beat into my session, and recorded "Repeat" right there in Ms. Debbie's living room</p>
            <img src="/images/IMG_1286.jpeg" alt="Repeat cover art"><p class="image-caption">Cover art for "Repeat"</p>
            <p>When I first released the song in July 2024, it felt wrong almost immediately. The platforms were tracking my listeners, slicing up their attention, and treating art like content. So I pulled it down. That decision cost me momentum, but it preserved my integrity.</p>
            <p>This January, I relaunched "Repeat" exclusively on Audiomack—the only streaming platform that respects independent artists enough to let us monetize our work directly.</p>
            <p>The response has been humbling: 21,500 streams across 17 countries. Messages from strangers who heard their own stories in my words. That flower by the creek taught me beauty persists even when systems try to bury it and so do we.</p>
            <p>Sometimes our most broken moments become the soil where our strongest art grows. That dead bush didn't know it was nurturing a flower and I didn't know those desperate lines scribbled on a friend's couch would someday reach thousands of ears across the globe.</p>
            <p>Art doesn't require perfect conditions. It requires only that we keep showing up even when we're barely holding on.</p>
            <div class="blog-links mt-8"><a href="https://audiomack.com/soulaaniblue/song/repeat" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition duration-300"><i class="fas fa-headphones mr-2"></i> Listen to "Repeat" on Audiomack</a></div>
        </div>`
    },
    5: {
        title: "Why I Left YouTube",
        date: "January 10, 2026",
        image: "/images/photo-collage.png.png",
        content: `<div class="blog-full-post"><p>I moved my videos to Odysee because I couldn't keep feeding a platform that profits from harm. YouTube's parent company has its hands in too much that goes against my values. Odysee isn't perfect, but it's creator-friendly and respects the audience. That matters.</p></div>`
    },
    6: {
        title: "February: First Sales, First Donations, and 'Dead Man Walkin''",
        date: "February 28, 2026",
        image: "/images/Dead%20Man%20Walkin%20Cover%20Art.jpeg",
        content: `<div class="blog-full-post">
            <p class="lead">February was heavy. The world kept spinning in its same cruel way. Bombs dropping. ICE murdering people in the streets. The US invading Venezuela and threatening half the planet. Same machine, different day.</p>
            <p>But here's what else happened in February.</p><p><strong>We made our first sale.</strong></p>
            <p>Someone out there heard what I'm building and said "I'll put my money behind that." That sale went straight into the Feed Every Body jar. And on February 11th, I made the first donation from that jar to RVA Community Fridges.</p>
            <img src="/images/FEB%20-%20FIRST%20DONATION.jpg" alt="Screenshot of first donation receipt to RVA Community Fridges for $12.22"><p class="image-caption">The receipt. $12.22 from music sales, directly to the fridges. February 7, 2026.</p>
            <p>Let me say that again. <em>Music from this artist funded food for someone in Richmond.</em> Directly. No corporate filter nor capitalist middleman.</p>
            <p>Then on February 22nd, I released "Dead Man Walkin'."</p>
            <img src="/images/Dead%20Man%20Walkin%20Cover%20Art.jpeg" alt="Dead Man Walkin' cover art"><p class="image-caption">Cover art for "Dead Man Walkin'"</p>
            <p>The song is exactly where I'm at. It's for the nights when sleep won't come because your people are hurting and you can't reach them. It's for the rage you feel watching the news and realizing the news won't show you half of what's really happening. It's for the moments when "keeping it peaceful" feels like a betrayal of everyone they're killing.</p>
            <p>This is God's work. Not in a holy book way. In a "I was put here to do this specific thing" way. Feed Every Body is that thing and the music is the tool. The food is the proof.</p>
            <p>So here's where we stand.</p><p><strong>One sale. One donation. One song that tells the truth about how it feels to be alive right now.</strong></p>
            <p>I don't know when the next sale will come but I know the work continues. The music keeps coming. The link to RVA Community Fridges stays on my site for anyone who wants to feed somebody directly.</p>
            <p>February showed me this model can work. Imagine what a hundred sales could do.</p>
            <p>The machine wants us tired, hopeless, and believing our little actions don't matter.</p>
            <p>February proved otherwise.</p>
            <div class="blog-links mt-8 space-y-4"><a href="https://audiomack.com/soulaaniblue/song/deadmanwalkin" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition duration-300"><i class="fas fa-headphones mr-2"></i> Listen to "Dead Man Walkin'" on Audiomack</a><a href="https://www.rvacommunityfridges.com/donate?fbclid=PAQ0xDSwMLTgRleHRuA2FlbQIxMQABp56X1KuhBv5F-un1zK59V2EAhn8y7qrYHp7LDT3cxY9BuiQ18UvN4Oq-hcMq_aem_FlWyxfX_vMKVAFlEdUNqjQ" target="_blank" rel="noopener" class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"><i class="fas fa-hand-holding-heart mr-2"></i> Donate directly to RVA Community Fridges</a></div>
            <p class="mt-8 text-xl text-gold">Us feeding us.</p>
        </div>`
    }
};

// ---------- Render blog grid ----------
document.addEventListener('DOMContentLoaded', function() {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid) return;

    for (let id in postContents) {
        const post = postContents[id];
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.onclick = () => showBlogPost(id);
        card.innerHTML = `
            <div class="blog-card__image" style="background-image: url('${post.image}');"></div>
            <div class="blog-card__body">
                <h3 class="blog-title text-gold">${post.title}</h3>
                <p class="blog-meta pixel-font text-gold">${post.date}</p>
                <p class="blog-excerpt text-gray-400">${post.content.replace(/<[^>]*>/g, '').substring(0, 120)}...</p>
                <span class="read-more">Read more →</span>
            </div>
        `;
        blogGrid.appendChild(card);
    }

    // Attach modal close handlers
    const closeBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('postModal');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModal();
        });
    }

    // Open modal from URL hash on load
    const hash = window.location.hash;
    if (hash && hash.startsWith('#post-')) {
        const id = hash.replace('#post-', '');
        if (postContents[id]) showBlogPost(id);
    }
});

// ---------- Modal logic ----------
function showBlogPost(id) {
    const post = postContents[id];
    if (!post) return;
    const modalContent = document.getElementById('modalContent');
    if (!modalContent) return;
    modalContent.innerHTML = `<h2 class="text-3xl md:text-4xl font-bold text-gold mb-2">${post.title}</h2>
        <p class="blog-meta pixel-font mb-6">${post.date}</p>${post.content}`;
    const modal = document.getElementById('postModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    history.pushState(null, null, `#post-${id}`);
}

function closeModal() {
    const modal = document.getElementById('postModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    history.pushState(null, null, window.location.pathname);
}
