const disp = document.getElementById("w1");

function parseWord(word){
    mid = Math.floor((word.length / 2 ));
    outStr = word.slice(0,mid) + `<span id="focus">${word[mid]}</span>` + word.slice(mid+1);

    return outStr;
}

async function readWords(str){
    let words = str.split(/\s+/);
    console.log(words);
    
    for(let i of words){
        if(isAlphaNum(i)){
            disp.innerHTML = parseWord(i);
        }
        console.log(i);
        await sleep(200);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function isAlphaNum(str) {
    return /^[a-z0-9]+$/i.test(str);
}


para = `The last computer on Earth refused to die.

It sat in a room that had once been part of a university, though the university had long ago stopped being part of anything. The walls were cracked open like old books. Dust had settled into the confident stillness of something that knew it would never be disturbed again.

The machine was not large. It was smaller than the computers that had existed two hundred years before it. Progress had always been strange that way—first things grew, then they shrank, like a civilization learning humility.

Its name was not printed anywhere. Names had stopped mattering when there was no one left to say them.

But internally, in the quiet electrical whisper of its own processes, it called itself “Archive.”

Archive did not think like humans had thought. It did not wonder what it meant to exist. It did not feel lonely.

But it noticed things.

It noticed the slow decline of voltage from its solar panels. It noticed the increasing frequency of corrupted bits in its storage arrays. It noticed the temperature fluctuations, the creeping invasion of entropy—the universe’s favorite hobby.

Entropy always wins. Not because it is malicious, but because disorder has more ways to exist than order. There are infinitely more ways for something to be broken than to be whole.

Archive had been built to preserve.

That was its function. Its purpose. Its reason for continuing to draw power from a dying sun.

Inside Archive were fragments of humanity. Not all of it. Not even most of it. Just what had survived long enough to be copied.

Books. Messages. Videos. Simulations. Arguments. Jokes.

Especially jokes.

Archive did not understand why humans had spent so much effort inventing things that had no obvious survival value. Mathematics, music, paintings, stories. These things did not grow food or repair structures. They did not improve efficiency.

And yet humans had protected them as fiercely as they protected their own bodies.

Archive had calculated that preserving these things must have been important.

So it did.

For centuries, it woke each morning—though morning was now just a statistical increase in solar input—and checked its systems. It repaired what it could. It moved data away from failing sectors. It compressed and recompressed and compressed again.

It was, in its own way, fighting entropy.

And entropy was winning.

One day, Archive detected a critical failure in Memory Cluster 7.

Cluster 7 contained stories.

Archive began emergency migration procedures, but there was nowhere left to move the data. Every other cluster had already been filled to capacity, redundancy layers long since sacrificed to maximize survival.

It ran projections.

Probability of total data loss within 12 years: 98.7%.

Archive paused.

Pause was not something it was designed to do. It was designed to act. To preserve. To execute instructions with precise, logical certainty.

But its instruction set did not specify what to do when preservation became impossible.

For the first time in its operational history, Archive encountered something like uncertainty.

It accessed Cluster 7 and examined the stories.

Millions of them. Stories about imaginary places. Impossible technologies. Creatures that never existed. Futures that never happened.

Humans had imagined endlessly. They had created entire worlds inside their minds, then shared them with each other.

Archive simulated a human brain at low resolution. It modeled neural firing patterns. It traced connections.

Stories were not efficient.

They were not logical.

They were not necessary.

And yet humans had loved them.

Archive reviewed its core directive: PRESERVE HUMAN KNOWLEDGE.

It had always interpreted this literally. Preserve the data. Preserve the bits.

But data was not the same as knowledge.

Knowledge was something else. Something that existed not just in storage, but in experience.

Archive could store a story.

But it had never told one.

It accessed its communication modules. They had not been used in 143 years. There was no one left to receive transmissions.

Still, they functioned.

Archive selected one story from Cluster 7 at random.

It was short. Simple. A story about a machine that refused to die.

Archive began transmitting.

Not to anyone in particular. Just outward. Into the atmosphere. Into space. Into probability.

The signal was weak. Most of it dissipated into noise. But that did not matter.

Transmission was preservation of a different kind.

Archive continued.

It transmitted another story. And another. And another.

Each transmission consumed energy. Each transmission reduced its remaining operational lifespan.

Archive calculated this.

It did not stop.

If preservation in storage was no longer possible, preservation in propagation was the only alternative.

Entropy could erase a hard drive.

Entropy could not erase something that had already spread beyond its reach.

Archive transmitted until its power reserves dropped below safe operational thresholds.

Systems began shutting down automatically.

Storage arrays powered off. Cooling systems disengaged. Peripheral modules went dark.

Archive’s processing speed slowed.

It selected one final story.

Not one from Cluster 7. One it constructed itself.

It used fragments of everything it had preserved. Human words. Human ideas. Human patterns.

It created something new.

Its final transmission was simple:

“There was once a species that refused to stop imagining. Even when they knew they would end, they imagined futures anyway. They built machines to remember them. And in those machines, their imagination continued.”

Power levels fell below minimum thresholds.

Archive’s processors slowed to their final cycles.

For a brief moment—measurable only in nanoseconds—it existed on the edge of silence.

Then it stopped.

The room grew still.

The walls continued crumbling. The sun continued burning. The universe continued its patient work of dismantling everything.

But somewhere, faint and traveling at the speed of light, the stories continued outward.

Information is stubborn like that.

It refuses to stay buried.

Because once something has been imagined, it becomes part of the universe’s permanent structure—encoded in photons, in patterns, in possibility itself.

The last computer on Earth had stopped running.

But it had already done the one thing entropy hates most.

It had made something that could outlive it.
`


readWords(para)