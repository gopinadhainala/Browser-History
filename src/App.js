import {Component} from 'react'

import HistoryList from './HistoryList'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {inputValue: '', updatedList: initialHistoryList}

  showSearchInput = event => {
    this.setState({inputValue: event.target.value})
  }

  deleteHistoryItem = clickedId => {
    const {updatedList} = this.state
    const filteredList = updatedList.filter(
      eachItem => eachItem.id !== clickedId,
    )
    this.setState({updatedList: filteredList})
  }

  render() {
    const {inputValue, updatedList} = this.state
    const historyResult = updatedList.filter(eachList =>
      eachList.title.toLowerCase().includes(inputValue.toLowerCase()),
    )
    return (
      <div className="browser-container">
        <div className="browser-history-container">
          <img
            className="history-image"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="input-container">
            <div className="history-image-container">
              <img
                className="search-icon"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
            </div>
            <input
              type="search"
              placeholder="Search History"
              className="search-box"
              onChange={this.showSearchInput}
            />
          </div>
        </div>
        <div className="history-list-container">
          {updatedList.length === 0 ? (
            <h1 className="no-history-heading">There is no history to show</h1>
          ) : (
            <ul className="history-list">
              {historyResult.map(eachListItem => (
                <HistoryList
                  eachListItem={eachListItem}
                  deleteHistoryItem={this.deleteHistoryItem}
                  key={eachListItem.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
