//react
import { useNavigate } from 'react-router';
import ParentPageLayout from '@templates/ParentPageLayout/ParentPageLayout.jsx';


export default function Home() {
  const navigate = useNavigate();
  const onSearch = (userInput) => {
    if (userInput) navigate(`search?q=${userInput}&type=multi`)
  };

  return <ParentPageLayout pageTitle='Home page' text='movies or TV series' handler={onSearch} />;
}