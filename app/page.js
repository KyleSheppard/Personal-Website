import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <header>
        <h1>Kyle Sheppard</h1>
        <nav>
          <Link href="/">Home</Link> |{" "}
          <Link href="/hobbies">Hobbies</Link> |{" "}
          <Link href="/projects">Projects</Link>
        </nav>
      </header>

      <p>
        Hello! My name is <strong>Kyle Sheppard</strong>. This is my second year at Southern Oregon University studying Computer Science, and I&apos;m <em>excited</em> to grow my skills in coding and web development.
      </p>

      <h2>My Educational Background</h2>
      <p>
        I am currently studying Computer Science, and I also attended Rogue Community College for 2 years prior to this, receiving an associate&apos;s degree in Design and Digital Media.
      </p>

      <h2>Goals For The Future</h2>
      <p>
        I will complete my Bachelor&apos;s Degree in Computer Science in June of 2027. At that point, I would like to find an entry-level job in the Rogue Valley doing software research and development.
        Until then, I have a lot more to learn, and I am hopeful that next summer I can get an internship in a field related to what I want to pursue.
      </p>

      <h2>Personal Background</h2>
      <p>
        I grew up in Grants Pass, Oregon, and graduated from Grants Pass High School. I really enjoy the small-town, simple life. I love the outdoors, including hunting, fishing, and hiking.
      </p>

      <Image src="/Me.jpg" alt="A photo of Kyle Sheppard" width={150} height={200} />

      <p>
        Here&apos;s a photo of my girlfriend Kiera and me celebrating her birthday at the Seven Feathers Casino in Canyonville, Oregon.
      </p>

      <p>
        Learn more about photography at{" "}
        <a href="https://www.nationalgeographic.com/photography" target="_blank" rel="noopener noreferrer">
          National Geographic Photography
        </a>.
      </p>

      <div className="section-box">
        <h2>Fun Fact About Me</h2>
        <p>
          I have never won any money from the Seven Feathers Casino, I am at a lifetime loss, but I still go with my friends and girlfriend who somehow win. Is this an addiction?
        </p>
      </div>

      <footer>
        © 2025 Kyle Sheppard | All rights reserved
      </footer>
    </main>
  );
}
