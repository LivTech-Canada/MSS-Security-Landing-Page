import Image from 'next/image';

export default function PageHero({
  eyebrow,
  title,
  text,
  image,
  tags = [],
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  tags?: string[];
}) {
  return (
    <section className="pagehero pagehero-banner">
      <div className="pagehero-media" aria-hidden="true">
        <Image src={image} alt="" fill sizes="100vw" preload />
      </div>
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{text}</p>
        {tags.length > 0 && (
          <div className="pagehero-kicker">
            {tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        )}
      </div>
    </section>
  );
}
