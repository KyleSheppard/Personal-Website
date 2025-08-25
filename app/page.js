import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <p>
        Hello! My name is <strong>Kyle Sheppard</strong>. This is my second year at Southern Oregon University studying Computer Science, and I'm <em>excited</em> to grow my skills in coding and web development.
      </p>

      <h2>My Educational Background</h2>
      <p>
        I am currently studying Computer Science, and I also attended Rogue Community College for 2 years prior to this, receiving an associate's degree in Design and Digital Media.
      </p>

      <h2>Goals For The Future</h2>
      <p>
        I will complete my Bachelor's Degree in Computer Science in June of 2027. At that point, I would like to find an entry-level job in the Rogue Valley doing software research and development.
      </p>

      <h2>Personal Background</h2>
      <p>
        I grew up in Grants Pass, Oregon, and graduated from Grants Pass High School. I really enjoy the small-town, simple life. I love the outdoors, including hunting, fishing, and hiking.
      </p>

      <Image src="/Me.jpg" alt="Kyle Sheppard" width={150} height={200} />

      <div className="section-box">
        <h2>Fun Fact About Me</h2>
        <p>
          I have never won any money from the Seven Feathers Casino, I am at a lifetime loss, but I still go with my friends and girlfriend who somehow win.
        </p>
      </div>
    </main>
  );
}
