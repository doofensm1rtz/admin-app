export default function NewUser() {
  return (
    <div className="new-user">
      <span className="new-user-title">Add new user</span>
      <div className="new-user-container">
        <form className="new-user-form">
          <div className="new-user-item">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="" id="username" />
          </div>
          <div className="new-user-item">
            <label htmlFor="fullname">Fullname</label>
            <input type="text" placeholder="" id="fullname" />
          </div>
          <div className="new-user-item">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="" id="email" />
          </div>
          <div className="new-user-item">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="" />
          </div>
          <div className="new-user-item">
            <label htmlFor="phone">Phone</label>
            <input type="text" placeholder="" />
          </div>
          <div className="new-user-item">
            <label htmlFor="address">Address</label>
            <input type="text" placeholder="" />
          </div>
          <div className="new-user-item">
            <label htmlFor="">Gender</label>
            <div className="new-user-radio-labels">
              <input type="radio" name="gender" id="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="female" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="other" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="new-user-item">
            <label htmlFor="active">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="yes">No</option>
            </select>
          </div>
        </form>
        <button className="new-user-save-btn">Create</button>
      </div>
    </div>
  );
}
