import { useState } from 'react';
import './app.scss';
import Accordion from './components/accordion/accordion';
import CheckboxGroup from './components/checkbox-group/checkbox-group';
import FilterPill from './components/filter-pill/filter-pill';
import InfoPill from './components/info-pill/info-pill';
import OutlineButton from './components/outline-button/outline-button';
import PrimaryButton from './components/primary-button/primary-button';
import CardHighlights from './components/profile-card/components/card-highlights/card-highlights';
import ProfileCard from './components/profile-card/profile-card';
import RadioButton from './components/radio-button/radio-button';
import RateCard from './components/rate-card/rate-card';
import Hi from './icons/hi.svg'
import ProfileIcon from './imgs/profile-icon.png'

function App() {
  const [showMainContent, setShowMainContent] = useState(true)
  return (
    <>
      {showMainContent ? 
      
      <div className='page-wrapper'>
        <div className='header-container'>
          <header className='header-container top-navigation'>
            <div className='container'>
              <div className='top-navigation-wrap'></div>
              <div className='top-navigation-main'>
                <nav className='main-nav' aria-label='main-menu'>
                  <ul className='main-menu'>
                    <li className='top-level-menu-item-container'>
                      <a className='top-level-menu-item' href='#home' aria-current='page'>Home</a>
                    </li>
                    <li className='top-level-menu-item-container'>
                      <a className='top-level-menu-item' href='#jobposts'>
                        Job posts
                        <span className='badge'>3</span>
                      </a>
                    </li>
                    <li className='top-level-menu-item-container'>
                      <a className='top-level-menu-item' href='#conversations'>
                        Conversations
                        <span className='badge'>3</span>
                      </a>
                    </li>
                    <li className='top-level-menu-item-container'>
                      <a className='top-level-menu-item' href='#contracts'>Contracts</a>
                    </li>
                  </ul>
                  <ul className='menu-actions'>
                    <li className='top-level-menu-item-container'>
                      <a className='top-level-menu-item p-r-0' href='#contracts'>
                        Notifications
                        <span className='badge'>3</span>
                      </a>
                    </li>
                    <div className='seperator'></div>
                    <li className='top-level-menu-item-container profile-pic'>
                      <img height={40} width={40} src={ProfileIcon} alt="Your pic" />
                      <div className='top-level-menu-item'>Dohn J.</div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
        </div>
        <div className='main-wrapper'>
          <aside className='sidebar'>
            <h2 className='aside-header'>Modify Search</h2>
            <Accordion id='item-1' title='Type of care'>
              <RadioButton></RadioButton>
            </Accordion>
            <Accordion id='item-2' title='Type of help'>
              <div className='checkbox-container'>
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales">Scales</label>
              </div>

              <div className='checkbox-container'>
                <input type="checkbox" id="horns" name="horns"/>
                <label htmlFor="horns">Horns</label>
              </div>
            </Accordion>
            <Accordion id='item-3' title='Conditional experience'>
              <CheckboxGroup></CheckboxGroup>
            </Accordion>
            <Accordion id='item-4' title='Care preferences'>
              <CheckboxGroup></CheckboxGroup>
            </Accordion>
            <Accordion id='item-5' title='Languages'>
              <RadioButton></RadioButton>
            </Accordion>
            <Accordion id='item-6' title='Interests'>
              <CheckboxGroup></CheckboxGroup>
            </Accordion>
            <Accordion id='item-7' title='Availability'>
              <CheckboxGroup></CheckboxGroup>
            </Accordion>
            <div className='flex-1'></div>
            <div className='apply-filter'>
              <OutlineButton name='Apply Filter'></OutlineButton>
            </div>
          </aside>
          <main className="main-content">
            <div>
              <img className='icon' src={Hi} alt='Hello,' />
              <h2>Welcome, John!</h2>
              <p>Here is a list of users based on your preferences</p>
            </div>
            <div className='result-information'>
              <span className='result-information-stats'>Showing 56 users in Churchil gardens</span>
              <div className='filter-pill-container'>
                <FilterPill></FilterPill>
                <FilterPill></FilterPill>
                <button className='clear-all' aria-label='remove all filters'>Clear all</button>
              </div>
            </div>
            <div>
              <ul className='cards-container'>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
              </ul>
              <div className='load-more'>
                <OutlineButton name='Load more'></OutlineButton>
              </div>
            </div>
          </main>
        </div>
      </div> 
      
      : <div className="App">
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
    </div>}
    </>
  );
}

export default App;
