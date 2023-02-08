import Accordion from "../accordion/accordion";
import CheckboxGroup from "../checkbox-group/checkbox-group";
import FilterPill from "../filter-pill/filter-pill";
import InfoPill from "../info-pill/info-pill";
import OutlineButton from "../outline-button/outline-button";
import PrimaryButton from "../primary-button/primary-button";
import CardHighlights from "../profile-card/components/card-highlights/card-highlights";
import ProfileCard from "../profile-card/profile-card";
import RadioButton from "../radio-button/radio-button";
import RateCard from "../rate-card/rate-card";

function ComponentLib() {
  return (
    <div className="App">
      <RadioButton></RadioButton>
      <hr />
      <CheckboxGroup></CheckboxGroup>
      <hr />
      <div style={{width: '30%'}}>
        <Accordion id='item-1' title='Accordion example'>
          <CheckboxGroup></CheckboxGroup>
        </Accordion>
      </div>
      <hr />
      <div style={{width: '10%'}}>
        <FilterPill></FilterPill>
      </div>
      <hr />
      <div style={{width: '10%'}}>
        <InfoPill></InfoPill>
      </div>
      <hr />
      <div style={{width: '10%'}}>
        <PrimaryButton name='View Profile'></PrimaryButton>
      </div>
      <hr />
      <div style={{width: '10%'}}>
        <OutlineButton name='Outline Button'></OutlineButton>
      </div>
      <hr />
      <div style={{width: '30%'}}>
        <RateCard></RateCard>
      </div>
      <hr />
      <CardHighlights></CardHighlights>
      <hr />
      <div>
        <ul style={{width: '50%'}}>
          <ProfileCard></ProfileCard>
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default ComponentLib;