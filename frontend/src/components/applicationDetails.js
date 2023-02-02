const ApplicationDetails = ({ application }) => {

  return (
    <div className="application-details">
      <h4>{application.job_title}</h4>
      <p><strong>{application.employer}</strong></p>
    
    </div>
  )
}

export default ApplicationDetails