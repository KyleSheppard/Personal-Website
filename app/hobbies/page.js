import Image from 'next/image';
import Link from 'next/link';

export default function Hobbies() {
  return (
    <main>
      <header>
        <h1>My Hobbies</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/hobbies">Hobbies</Link>
          <Link href="/projects">Projects</Link>
        </nav>
      </header>

      <h2>Hunting</h2>
      <p>
        Hunting has been a part of my life since I was a kid. Growing up in Grants Pass, I was surrounded by beautiful country that offers great opportunities for hunting.
      </p>
      <p>
        I primarily hunt deer and bear, but I also enjoy bird hunting in the fall. I enjoy the entire process of gearing up, scouting locations, and spending time out in the woods.
      </p>
      <Image
        src="/deer.jpg"
        alt="A photo of a deer I hunted"
        width={150}
        height={200}
        style={{ objectFit: 'cover', display: 'block', margin: '20px auto' }}
      />

      <h2>Fishing</h2>
      <p>
        Fishing is another outdoor hobby I’m passionate about. Whether it's casting a line in a quiet lake or fishing in the Rogue River, there’s nothing quite like the calm and focus that comes with being on the water.
      </p>
      <p>
        Some of my favorite memories involve early morning fishing trips with friends or family, or even being alone enjoying a peaceful day by the water.
      </p>
      <Image
        src="/fishing.jpg"
        alt="A photo of a fish I caught"
        width={150}
        height={200}
        style={{ objectFit: 'cover', display: 'block', margin: '20px auto' }}
      />

      <div className="section-box">
        <h2>Why I Love the Outdoors</h2>
        <p>
          Being outside whether it’s hunting, fishing, or hiking—keeps me grounded. The fresh air, the quiet, and the feeling of self-reliance all make outdoor hobbies more than just recreation—they're a way of life.
        </p>
      </div>

      <footer>
        © 2025 Kyle Sheppard | All rights reserved
      </footer>
    </main>
  );
}
