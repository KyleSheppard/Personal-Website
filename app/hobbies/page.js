import Image from 'next/image'

export default function Hobbies() {
  return (
    <main>
      <h1>My Hobbies</h1>

      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/hobbies">My Hobbies</a></li>
        <li><a href="/projects">Personal Projects</a></li>
      </ul>

      <h2>Hunting</h2>
      <p>
        Hunting has been a part of my life since I was a kid. Growing up in Grants Pass, I was surrounded by beautiful country that offers great opportunities for hunting.
        I primarily hunt deer and bear, but I also enjoy bird hunting in the fall.
      </p>
      <p>
        I enjoy the entire process of gearing up, scouting locations, and spending time out in the woods. It&apos;s not just about the hunt it&apos;s about being outdoors with yourself, friends, and family.
      </p>
      <Image src="/deer.jpg" alt="A photo of a deer I hunted" width={150} height={200} />

      <h2>Fishing</h2>
      <p>
        Fishing is another outdoor hobby I&apos;m passionate about. Whether it&apos;s casting a line in a quiet lake or fishing in the Rogue River, there&apos;s nothing quite like the calm and focus that comes with being on the water. I fish for trout, bass, steelhead, and salmon depending on the season and location.
      </p>
      <p>
        Some of my favorite memories involve early morning fishing trips with friends or family, or even being alone enjoying a peaceful day by the water. It&apos;s a great way to relax and clear your mind from the stresses of everyday life.
      </p>
      <Image src="/fishing.jpg" alt="A photo of a fish I caught" width={150} height={200} />

      <div className="section-box">
        <h2>Why I Love the Outdoors</h2>
        <p>
          Being outside whether it&apos;s hunting, fishing, or hiking—keeps me grounded. The fresh air, the quiet, and the feeling of self-reliance all make outdoor hobbies more than just recreation—they&apos;re a way of life.
        </p>
      </div>

      <footer>
        © 2025 Kyle Sheppard | All rights reserved
      </footer>
    </main>
  )
}
