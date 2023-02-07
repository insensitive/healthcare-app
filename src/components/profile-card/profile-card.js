import CardHighlights from './components/card-highlights/card-highlights';
import PrimaryButton from '../../components/primary-button/primary-button';
import InfoPill from '../../components/info-pill/info-pill';
import RateCard from '../../components/rate-card/rate-card';
import ProfilePic from '../../imgs/profile-pic.png'
import './profile-card.scss'

function ProfileCard() {
  return (
    <li className='profile-card'>
      <CardHighlights></CardHighlights>
      <div className='user-brief'>
        <img className='user-brief-img' src={ProfilePic} alt="Caregiver" />
        <div className='user-brief-text'>
          <div>
            <h3>Jane Doe</h3>
            <div className='last-active'>Last active 2 hours ago</div>
          </div>
          <CardHighlights></CardHighlights>
          <div className='view-profile-btn'><PrimaryButton name='View Profile'></PrimaryButton></div>
        </div>
      </div>
      <div className='user-detail-text'>
        Comapassionate caregiver with 6+ years of experience. One more line goes here so that they can talk more. One more line goes here so that they can talk more.
      </div>
      <div className='user-detail-tags-container'>
        <div className='user-detail-tags column'>
          <h4>Languages spoken</h4>
          <div>
            <InfoPill name='English'></InfoPill>
            <InfoPill name='Hindi'></InfoPill>
            <InfoPill name='Spanish'></InfoPill>
          </div>
          <h4>Interest and  hobbies</h4>
          <div>
            <InfoPill name='Football'></InfoPill>
            <InfoPill name='Netflix'></InfoPill>
            <InfoPill name='Gardening'></InfoPill>
          </div>
        </div>
        <div className='profile-card-rate-card'>
          <RateCard></RateCard>
        </div>
      </div>
    </li>
  );
}

export default ProfileCard;