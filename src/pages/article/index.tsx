interface IProps {
  title: string;
  description: string;
  list: {
    label: string;
    info: string;
    link: string;
  }[];
}
export default function Article(){
  return(
    <div>
      article
      <a href="">第一章</a>
    </div>
  )
}