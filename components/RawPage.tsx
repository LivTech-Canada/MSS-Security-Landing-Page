type Props = { html: string };
export default function RawPage({ html }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
