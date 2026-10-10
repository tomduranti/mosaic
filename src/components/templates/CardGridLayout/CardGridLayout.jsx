//react
import CarouselCardGrid from '@organisms/CarouselCardGrid/CarouselCardGrid.jsx';
import StandardCardGrid from '@organisms/StandardCardGrid/StandardCardGrid.jsx';

//scss
import '@base/_base.scss';

export default function CardGridLayout({ pageName, isTrending = false, array, idSkipToSection = '', idJumpBackToSection ='' }) {
  return (
    <section className='section_layout'>
      <h2 className={`section_layout__title  text_preset_1  text_white`}>{pageName}</h2>
      {isTrending
      ? <CarouselCardGrid array={array} jump={[idSkipToSection, idJumpBackToSection]} />
      : <StandardCardGrid array={array} jump={[idSkipToSection, idJumpBackToSection]} pageName={pageName} />
      }
    </section>
  );
}