import Files from "./Files";
import classes from './Admin.module.css';

function Admin() {
  return (
    <>
      <h1>Admin Page</h1>
      <div className={classes.container}>
        <div className="side-bar">
          <ul>
            <li>First group</li>
            <li>Second group</li>
          </ul>
        </div>
        <div className="content">
          <Files/>
        </div>
      </div>
    </>
  )
}

export default Admin