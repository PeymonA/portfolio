import '../styles/Project.css'

function Project(props) {
    return (
        <div className='project'>
            <img src='./placeholder.svg' alt='project_photo'
                style={{width:"30%"}}/>

            <h2>{props.title}</h2>

            <p>{props.description}</p>

            <a href={props.link}>Project Here</a>
        </div>
        
    );
}

export default Project