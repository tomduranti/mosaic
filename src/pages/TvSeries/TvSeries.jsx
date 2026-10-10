//react
import { useNavigate } from 'react-router';
import ParentPageLayout from '@templates/ParentPageLayout/ParentPageLayout.jsx';


export default function TvSeries() {
  const navigate = useNavigate();
  const onSearch = (userInput) => {
    if (userInput) navigate(`search?q=${userInput}&type=tv`)
  };

  return <ParentPageLayout pageTitle='TV series' text='tv series' handler={onSearch} />;
}