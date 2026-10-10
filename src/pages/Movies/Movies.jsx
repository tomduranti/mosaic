//react
import { useNavigate } from 'react-router';
import ParentPageLayout from '@templates/ParentPageLayout/ParentPageLayout.jsx';


export default function Movies() {
  const navigate = useNavigate();
  const onSearch = (userInput) => {
    if (userInput) navigate(`search?q=${userInput}&type=movie`)
  };

  return <ParentPageLayout pageTitle='Movies' text='movies' handler={onSearch} />;
}