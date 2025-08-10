import '../styles/Project.css'

function Project(props) {
    return (
        <div className='project'>

            <h2>{props.title}</h2>

            <p>{props.description}</p>

            <a href={props.link}>Project Here</a>
        </div>
        
    );
}

export default Project