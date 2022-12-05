import './index.css'

const HistoryItem = props => {
  const {eachListItem, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachListItem
  const deleteItem = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="list-item-container">
      <p className="time">{timeAccessed}</p>
      <div className="company-item-container">
        <img src={logoUrl} alt="domain logo" className="company-image" />
        <div className="company-container">
          <div className="company-details-container">
            <p className="company-title">{title}</p>
            <p className="company-url">{domainUrl}</p>
          </div>
          <button type="button" className="button-delete" id="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-image"
              onClick={deleteItem}
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
