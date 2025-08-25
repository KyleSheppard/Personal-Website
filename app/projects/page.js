import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <main>
      <header>
        <h1>Personal Projects</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/hobbies">Hobbies</Link>
          <Link href="/projects">Projects</Link>
        </nav>
      </header>

      <h2>Photography</h2>
      <p>
        One of my main photography projects has been shooting cars and motorcycles. I work with friends and clients to capture unique angles, motion shots, and detailed close-ups.
      </p>
      <Image
        src="/payton.jpg"
        alt="A photo of Payton's motorcycle"
        width={150}
        height={200}
        style={{ objectFit: 'cover', display: 'block', margin: '20px auto' }}
      />

      <h2>Editing and Post-Production</h2>
      <p>
        I use Adobe Lightroom and Photoshop to edit my photos. I focus on enhancing color, contrast, and sharpness while keeping the image natural and true to the moment.
      </p>
      <Image
        src="/motorcycle.jpg"
        alt="A photo of a motorcycle I photographed"
        width={150}
        height={200}
        style={{ objectFit: 'cover', display: 'block', margin: '20px auto' }}
      />

      <div className="section-box">
        <h2>My Favorite Shooting Locations</h2>
        <p>
          I love capturing vehicles on winding roads and forest backdrops in the Rogue Valley. I usually shoot around sunrise or sunset for the best lighting.
        </p>
      </div>

      <footer>
        © 2025 Kyle Sheppard | All rights reserved
      </footer>
    </main>
  );
}
