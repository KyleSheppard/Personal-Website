import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <main>
      <h1>Personal Projects</h1>

      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/hobbies">My Hobbies</Link></li>
        <li><Link href="/projects">Personal Projects</Link></li>
      </ul>

      <h2>Photography</h2>
      <p>
        One of my main photography projects has been shooting cars and motorcycles. I work with friends and clients to capture unique angles, motion shots, and detailed close-ups that highlight the design and personality of each vehicle. Whether it&apos;s a classic restoration or a modern sport bike, I enjoy finding creative ways to make the machine stand out in its environment.
      </p>
      <Image src="/payton.jpg" alt="A photo of Payton's motorcycle" width={150} height={200} />

      <h2>Editing and Post-Production</h2>
      <p>
        I use Adobe Lightroom and Photoshop to edit my photos. I focus on enhancing color, contrast, and sharpness while keeping the image natural and true to the moment. I&apos;ve also experimented with different styles from cinematic tones to clean commercial looks depending on the project&apos;s vibe.
      </p>
      <p>
        Photography has become more than just a hobby it&apos;s a creative outlet and a skill I hope to continue developing alongside my studies in computer science. I&apos;d love to explore video work and possibly drone photography in the future as part of my personal projects.
      </p>
      <Image src="/motorcycle.jpg" alt="A photo of a motorcycle I photographed" width={150} height={200} />

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
  )
}