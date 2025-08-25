import Image from 'next/image';

export default function Hobbies() {
  return (
    <main>
      <h2>Hunting</h2>
      <p>
        Hunting has been a part of my life since I was a kid. Growing up in Grants Pass, I was surrounded by beautiful country that offers great opportunities for hunting.
      </p>
      <p>
        I primarily hunt deer and bear, but I also enjoy bird hunting in the fall.
      </p>
      <Image src="/deer.jpg" alt="A photo of a deer I hunted" width={150} height={200} />

      <h2>Fishing</h2>
      <p>
        Fishing is another outdoor hobby Im passionate about. Whether its casting a line in a quiet lake or fishing in the Rogue River, theres nothing quite like the calm and focus that comes with being on the water.
      </p>
      <Image src="/fishing.jpg" alt="A photo of a fish I caught" width={150} height={200} />

      <div className="section-box">
        <h2>Why I Love the Outdoors</h2>
        <p>
          Being outside whether its hunting, fishing, or hiking—keeps me grounded. The fresh air, the quiet, and the feeling of self reliance all make outdoor hobbies more than just recreation theyre a way of life.
        </p>
      </div>
    </main>
  );
}
