import { useState } from 'react';
import './app.scss';
import Accordion from './components/accordion/accordion';
import CheckboxGroup from './components/checkbox-group/checkbox-group';
import FilterPill from './components/filter-pill/filter-pill';
import OutlineButton from './components/outline-button/outline-button';
import ProfileCard from './components/profile-card/profile-card';
import RadioButton from './components/radio-button/radio-button';
import Hi from './icons/hi.svg'
import ProfileIcon from './imgs/profile-icon.png'
import CompanyLogo from './imgs/company-logo.jpg'
import Times from './icons/times.svg'
import Hamburger from './icons/hamburger.svg'
import ComponentLib from './components/component-lib/component-lib';
import { Dialog } from "@reach/dialog";
import PrimaryButton from './components/primary-button/primary-button';
import { SelectLocation } from './components/react-select/react-select';
import "@reach/dialog/styles.css";
import { conditionalExperience, dummy, interests } from './ui-data/ui-data';

function App() {
  const [showMainContent, setShowMainContent] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showDialog, setShowDialog] = useState(false);

  const toggleMenu = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
  }
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <>
      {showMainContent ? 
      
      <div className='page-wrapper'>
        <div className='header-container'>
          <header className={`header-container top-navigation ${isMenuOpen ? "" : "hide-top-nav"}`}>
            <div className='container'>
              <div className='top-navigation-wrap'>
                <a href="#home" className="logo" aria-label="Caregiver homepage">
                  <img src={CompanyLogo} height='80' width='100' alt="Caregiver Logo" />
                </a>
                <button 
                  title={isMenuOpen ? 'Close main menu' : 'Open main menu'} 
                  type="button" 
                  className="button action has-icon main-menu-toggle" 
                  aria-haspopup="menu" 
                  aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
                  onClick={toggleMenu}
                  aria-expanded={isMenuOpen ? true : false}>
                    <span className="button-wrap">
                      {isMenuOpen ?
                      <img src={Times} alt = 'close' height='40' width='40'/> :
                      <img src={Hamburger} alt = 'close' height='40' width='40'/>
                      }
                      <span className="visually-hidden">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
                    </span>
                  </button>
              </div>
              <div className={`top-navigation-main ${isMenuOpen ? "" : "hide-top-nav"}`}>
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
            <Accordion id='item-1' title='Type of care' open={true}>
              <RadioButton></RadioButton>
            </Accordion>
            <Accordion id='item-2' title='Type of help'>
              <CheckboxGroup items={dummy}></CheckboxGroup>
            </Accordion>
            <Accordion id='item-3' title='Conditional experience'>
              <CheckboxGroup items={conditionalExperience}></CheckboxGroup>
            </Accordion>
            <Accordion id='item-4' title='Care preferences'>
              <CheckboxGroup items={dummy}></CheckboxGroup>
            </Accordion>
            <Accordion id='item-6' title='Interests' open={true}>
              <CheckboxGroup items={interests}></CheckboxGroup>
            </Accordion>
            <Accordion id='item-7' title='Availability'>
              <CheckboxGroup items={dummy}></CheckboxGroup>
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
              <span className='result-information-stats'>Showing 56 users in
                <button onClick={open} className='primary-button'>
                  <span>Churchil gardens</span>
                  <span className='visually-hidden'>Click to change the location.</span>
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </button>
              </span>
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
        <Dialog isOpen={showDialog} onDismiss={close}>

          <div className='modal-header'>
            <h4>Change Postcode</h4>
            <button className='accessible-button close-modal-btn' onClick={close}>
              <span className="visually-hidden">Close change location modal</span>
              <img src={Times} alt = 'close' height='20' width='20'/>
            </button>            
          </div>
          <div className='modal-body'>
            <label for="search-postcode" id="select-postcode-label">Postcode</label>
            <SelectLocation></SelectLocation>
            <div className='location-search-btn'><PrimaryButton name='Search'>Search</PrimaryButton></div>
          </div>
        </Dialog>
      </div> 
      : 
      <ComponentLib></ComponentLib>}
    </>
  );
}

export default App;
