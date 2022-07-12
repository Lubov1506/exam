import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styles from './Header.module.sass';
import CONSTANTS from '../../constants';
import { getUserAction, clearUserStore, headerRequest } from '../../actions/actionCreator';

class Header extends React.Component {
  componentDidMount() {
    if (!this.props.data) {
      this.props.getUser();
    }
  }

    logOut = () => {
      localStorage.clear();
      this.props.clearUserStore();
      this.props.history.replace('/login');
    };

    startContests = () => {
      this.props.history.push('/startContest');
    };

    renderLoginButtons = () => {
      console.log(this.props);
      if (this.props.data) {
        return (
          <>
            <div className={styles.userInfo}>
              <img
                src={this.props.data.avatar === 'anon.png' ? CONSTANTS.ANONYM_IMAGE_PATH : `${CONSTANTS.publicURL}${this.props.data.avatar}`}
                alt="user"
              />
              <span>{`Hi, ${this.props.data.displayName}`}</span>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
              <ul>
                
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: 'none' }}
                  ><li>
                    <span>View Dashboard</span>
                 </li> </Link>
                
                <Link to="/account" style={{ textDecoration: 'none' }}><li><span>My Account</span></li></Link>
               
                  <Link
                    to="/"
                    style={{ textDecoration: 'none' }}
                  > <li>
                    <span>Messages</span>
                </li>  </Link>
                
                
                  <Link to="/" style={{ textDecoration: 'none' }}><li><span>Affiliate Dashboard</span>  </li></Link>
              
               <Link onClick={this.logOut} > <li><span >Logout</span></li></Link>
              </ul>
            </div>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`} className={styles.emailIcon} alt="email" />
          </>
        );
      }
      return (
        <>
          <Link to="/login" style={{ textDecoration: 'none' }}><span className={styles.btn}>LOGIN</span></Link>
          <Link to="/registration" style={{ textDecoration: 'none' }}>
            <span
              className={styles.btn}
            >
              SIGN UP
            </span>
          </Link>
        </>
      );
    };

    render() {
      if (this.props.isFetching) {
        return null;
      }
      return (
        <div className={styles.headerContainer}>
          <div className={styles.fixedHeader}>
            <span className={styles.info}>Squadhelp recognized as one of the Most Innovative Companies by Inc Magazine.</span>
            <a href="/">Read Announcement</a>
          </div>
          <div className={styles.loginSignnUpHeaders}>
            <div className={styles.numberContainer}>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
              <span>(877)&nbsp;355-3585</span>
            </div>
            <div className={styles.userButtonsContainer}>
              {this.renderLoginButtons()}
            </div>
          </div>
          <div className={styles.navContainer}>
            <Link to='/'><img src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`} className={styles.logo} alt="blue_logo" /></Link>
            <div className={styles.leftNav}>
              <div className={styles.nav}>
                <ul>
                  <li>
                    <span>NAME IDEAS</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <a href="/"><li>Beauty</li></a>
                      <a href="/"><li>Consulting</li></a>
                      <a href="/"><li>E-Commerce</li></a>
                      <a href="/"><li>Fashion & Clothing</li></a>
                      <a href="/"><li>Finance</li></a>
                      <a href="/"><li>Real Estate</li></a>
                      <a href="/"><li>Tech</li></a>
                      <li className={styles.last}>
                        <a href="/">More Categories</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>CONTESTS</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <a href="/"><li>HOW IT WORKS</li></a>
                      <a href="/"><li>PRICING</li></a>
                      <a href="/"><li>AGENCY SERVICE</li></a>
                      <a href="/"><li>ACTIVE CONTESTS</li></a>
                      <a href="/"><li>WINNERS</li></a>
                      <a href="/"><li>LEADERBOARD</li></a>
                      <li className={styles.last}>
                        <a href="/">
                            BECOME A
                            CREATIVE
</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Our Work</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <a href="/"><li>NAMES</li></a>
                      <a href="/"><li>TAGLINES</li></a>
                      <a href="/"><li>LOGOS</li></a>
                      <li className={styles.last}>
                        <a href="/">TESTIMONIALS</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Names For Sale</span>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
                    <ul>
                      <a href="/"><li>POPULAR NAMES</li></a>
                      <a href="/"><li>SHORT NAMES</li></a>
                      <a href="/"><li>INTRIGUING NAMES</li></a>
                      <a href="/"><li>NAMES BY CATEGORY</li></a>
                      <a href="/"><li>VISUAL NAME SEARCH</li></a>
                      <li className={styles.last}>
                        <a href="/">
                            SELL YOUR
                            DOMAINS
</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Blog</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <a href="/"><li>ULTIMATE NAMING GUIDE</li></a>
                      <a href="/"><li>POETIC DEVICES IN BUSINESS NAMING</li></a>
                      <a href="/"><li>CROWDED BAR THEORY</li></a>
                      <li className={styles.last}>
                        <a href="/">ALL ARTICLES</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {this.props.data && this.props.data.role !== CONSTANTS.CREATOR
                        && <div className={styles.startContestBtn} onClick={this.startContests}>START CONTEST</div>}
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => state.userStore;
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(headerRequest()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
